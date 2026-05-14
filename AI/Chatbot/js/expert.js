// =============================================
//  IT Help Desk Expert System - Logic (expert.js)
// =============================================

// Default reply when no keyword matches
const defaultReply =
  "🤔 I couldn't understand that.\n\n" +
  "Please try asking differently. For example:\n" +
  "• 'Where is my order?'\n" +
  "• 'How do I return an item?'\n" +
  "• 'What are your shipping times?'\n" +
  "• 'How can I pay?'\n\n" +
  "Or ask for a 'human agent'!";


// ---- Match user input to a rule ----
function getReply(userInput) {

    const text = userInput.toLowerCase();

    for(let i = 0; i < rules.length; i++) {

        for(let j = 0; j < rules[i].keys.length; j++) {

            const keyword = rules[i].keys[j];

            if(text.includes(keyword)) {

                return rules[i].reply;
            }
        }
    }

    return defaultReply;
}


// ---- Add message bubble ----
function addMessage(text, sender) {

    const messagesDiv =
        document.getElementById('messages');

    const msgDiv =
        document.createElement('div');

    msgDiv.className =
        'msg ' + sender;

    msgDiv.innerHTML =
        '<div class="bubble">' +
        text.replace(/\n/g, '<br>') +
        '</div>';

    messagesDiv.appendChild(msgDiv);

    messagesDiv.scrollTop =
        messagesDiv.scrollHeight;
}


// ---- Send message ----
function sendMsg(quickText) {

    const inputField =
        document.getElementById('user-input');

    const userMessage =
        quickText || inputField.value.trim();

    if(userMessage === '') return;

    inputField.value = '';

    // Show user message
    addMessage(userMessage, 'user');

    // Get bot reply
    const reply =
        getReply(userMessage);

    // Show bot reply
    addMessage(reply, 'bot');
}


// ---- Welcome message ----
window.onload = function () {

    addMessage(

      "👋 Hello! I'm your ShopBot Assistant.\n\n" +

      "Ask me anything about your orders, shipping, or returns!\n\n" +

      "Or click one of the quick buttons below.",

      'bot'
    );
};