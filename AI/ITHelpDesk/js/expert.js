// =============================================
//  IT Help Desk Expert System - Logic (expert.js)
// =============================================

// Default reply when no keyword matches
const defaultReply =
  "🤔 I couldn't identify your problem.\n\n" +
  "Please describe it differently. For example:\n" +
  "• 'WiFi not working'\n" +
  "• 'Computer is slow'\n" +
  "• 'Printer not printing'\n" +
  "• 'Screen is blank'\n\n" +
  "Or call IT directly: Ext. 101";


// ---- Match user input to a rule (whole-word matching) ----
function getReply(userInput) {
  const text = userInput.toLowerCase();

  for (let i = 0; i < rules.length; i++) {
    for (let j = 0; j < rules[i].keys.length; j++) {
      const keyword = rules[i].keys[j];
      const regex = new RegExp('\\b' + keyword + '\\b');
      if (regex.test(text)) {
        return rules[i].reply;
      }
    }
  }

  return defaultReply;
}


// ---- Add message bubble to chat ----
function addMessage(text, sender) {
  const messagesDiv = document.getElementById('messages');

  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg ' + sender;
  msgDiv.innerHTML = '<div class="bubble">' + text.replace(/\n/g, '<br>') + '</div>';

  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// ---- Show typing animation ----
function showTyping() {
  const messagesDiv = document.getElementById('messages');

  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg bot';
  typingDiv.id = 'typing';
  typingDiv.innerHTML = '<div class="bubble typing"><span></span><span></span><span></span></div>';

  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// ---- Remove typing animation ----
function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}


// ---- Send message (called on button click or Enter) ----
function sendMsg(quickText) {
  const inputField = document.getElementById('user-input');
  const userMessage = quickText || inputField.value.trim();

  if (userMessage === '') return;

  inputField.value = '';
  addMessage(userMessage, 'user');
  showTyping();

  setTimeout(function () {
    removeTyping();
    addMessage(getReply(userMessage), 'bot');
  }, 700);
}


// ---- Welcome message on page load ----
let welcomeShown = false;
window.onload = function () {
  if (welcomeShown) return;
  welcomeShown = true;
  setTimeout(function () {
    addMessage(
      "👋 Hello! I'm your IT Help Desk Expert System.\n\n" +
      "Describe your computer problem and I'll diagnose it!\n\n" +
      "Or click one of the quick buttons below.",
      'bot'
    );
  }, 300);
};
