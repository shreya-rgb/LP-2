// ==============================
//  ShopBot - Chatbot Logic (chatbot.js)
// ==============================

// Default reply when no keyword matches
const defaultReply =
  "🤔 I'm not sure about that, but I'm here to help!\n\n" +
  "Try asking about:\n" +
  "• Order tracking & status\n" +
  "• Returns & refunds\n" +
  "• Payment issues\n" +
  "• Shipping & delivery\n" +
  "• Offers & discounts\n\n" +
  "Or type 'Talk to human' to reach our support team.";


// ---- CORE FUNCTION: Match user input to a rule ----
function getReply(userInput) {
  // Convert input to lowercase for case-insensitive matching
  const text = userInput.toLowerCase();

  // Loop through each rule
  for (let i = 0; i < rules.length; i++) {
    // Check if ANY keyword from this rule exists in user input
    for (let j = 0; j < rules[i].keys.length; j++) {
      const keyword = rules[i].keys[j];
      // Use whole-word matching (\b = word boundary)
      // Prevents 'hi' matching inside 'shipping', 'hey' inside 'they', etc.
      const regex = new RegExp('\\b' + keyword + '\\b');
      if (regex.test(text)) {
        return rules[i].reply;  // Return the matching reply
      }
    }
  }

  // If no rule matched, return the default reply
  return defaultReply;
}


// ---- Add a message bubble to the chat ----
function addMessage(text, sender) {
  const messagesDiv = document.getElementById('messages');

  // Create the outer message container
  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg ' + sender;  // 'msg bot' or 'msg user'

  if (sender === 'bot') {
    msgDiv.innerHTML =
      '<div class="bubble">' + text.replace(/\n/g, '<br>') + '</div>';
  } else {
    msgDiv.innerHTML =
      '<div class="bubble">' + text + '</div>';
  }

  messagesDiv.appendChild(msgDiv);

  // Auto-scroll to the latest message
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// ---- Show typing animation ----
function showTyping() {
  const messagesDiv = document.getElementById('messages');

  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg bot';
  typingDiv.id = 'typing-indicator';

  typingDiv.innerHTML =
    '<div class="bubble typing">' +
    '<span></span><span></span><span></span>' +
    '</div>';

  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// ---- Remove typing animation ----
function removeTyping() {
  const typingDiv = document.getElementById('typing-indicator');
  if (typingDiv) {
    typingDiv.remove();
  }
}


// ---- Main send function (called on button click or Enter key) ----
function sendMsg(quickText) {
  // Get the input field
  const inputField = document.getElementById('user-input');

  // Use quick button text OR what user typed
  const userMessage = quickText || inputField.value.trim();

  // Don't do anything if message is empty
  if (userMessage === '') return;

  // Clear the input field
  inputField.value = '';

  // Show user's message on the right
  addMessage(userMessage, 'user');

  // Show typing animation
  showTyping();

  // After a short delay, show bot's reply (simulates thinking)
  setTimeout(function () {
    removeTyping();
    const botReply = getReply(userMessage);
    addMessage(botReply, 'bot');
  }, 800);
}


// ---- Show welcome message when page loads (only once) ----
let welcomeShown = false;
window.onload = function () {
  if (welcomeShown) return;
  welcomeShown = true;
  setTimeout(function () {
    addMessage(
      "👋 Hi there! I'm ShopBot, your customer support assistant.\n\n" +
      "How can I help you today? You can type your question or use the quick buttons below!",
      'bot'
    );
  }, 400);
};
