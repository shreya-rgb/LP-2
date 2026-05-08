# ShopBot — Rule-Based Customer Service Chatbot

## Practical / Lab Assignment
**Problem Statement:** Develop an elementary Chatbot for any suitable customer interaction application (Rule Based & GUI Based)

---

## Folder Structure

```
ShopBot/
│
├── index.html          ← Main HTML file (structure + layout)
├── css/
│   └── style.css       ← All styling (colors, fonts, layout)
└── js/
    ├── rules.js        ← All chatbot rules (keywords + replies)
    └── chatbot.js      ← Core logic (matching, DOM, send/receive)
```

---

## How to Run

1. Open VS Code
2. Open the `ShopBot` folder
3. Install the **Live Server** extension (by Ritwick Dey)
4. Right-click `index.html` → **Open with Live Server**
5. Browser opens at `http://127.0.0.1:5500`

OR simply double-click `index.html` to open in any browser. No server needed.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and layout |
| CSS3 | Styling, animations, responsive design |
| JavaScript (Vanilla) | Chatbot logic, DOM manipulation |

No frameworks. No libraries. No backend. Pure frontend.

---

## Application Type

**Domain:** E-Commerce / Online Shopping  
**Use Case:** Customer Support  
**Type:** Rule-Based + GUI-Based Chatbot

---

## What the Bot Can Handle

| Topic | Keywords Detected |
|---|---|
| Greetings | hello, hi, hey, good morning |
| Order Tracking | track, order status, my order |
| Returns & Refunds | return, refund, exchange, money back |
| Payment Help | payment, pay, transaction, UPI, failed |
| Shipping Info | shipping, delivery, courier, how long |
| Cancel Order | cancel, cancellation |
| Discounts | discount, coupon, promo, offer, code |
| Account Help | account, login, password, forgot |
| Human Agent | human, agent, talk to someone |
| Size Guide | size, fit, measurement |
| Warranty | warranty, damaged, defective |
| Thanks/Bye | thank you, bye, goodbye |

---

---

# THEORY SECTION

---

## 1. What is a Chatbot?

A **chatbot** is a computer program designed to simulate conversation with human users, especially over the internet. It takes text input from a user and generates a relevant response.

Chatbots are used in:
- Customer support
- Healthcare (symptom checker)
- Banking (balance enquiry)
- Education (FAQ bots)
- E-commerce (order tracking)

---

## 2. Types of Chatbots

### A) Rule-Based Chatbot (Pattern Matching)
- Works on **predefined rules**
- Uses **if-else logic** or **keyword matching**
- Responses are **hardcoded** by the developer
- Cannot learn or improve on its own
- Simple, fast, and reliable
- Example: ShopBot (this project)

### B) AI/ML-Based Chatbot
- Uses **Machine Learning** and **Natural Language Processing (NLP)**
- Learns from conversations over time
- Can understand context and intent
- More complex to build
- Example: ChatGPT, Google Bard, Siri

### C) Hybrid Chatbot
- Combination of rule-based and AI
- Uses rules for simple queries, AI for complex ones
- Example: Many modern customer support bots

---

## 3. Rule-Based Chatbot — How It Works

```
User types input
       ↓
Convert to lowercase
       ↓
Loop through all rules
       ↓
Check if any keyword from rule exists in input
       ↓
Match found? → Return that rule's reply
       ↓
No match? → Return default reply
```

### Core Logic (in simple terms):

```javascript
for each rule in rules:
    for each keyword in rule.keywords:
        if keyword found in userInput:
            return rule.reply

return "Sorry, I don't understand"
```

---

## 4. GUI-Based vs Console-Based

| Feature | Console-Based | GUI-Based |
|---|---|---|
| Interface | Text terminal | Visual browser window |
| Input method | Terminal keyboard | Input box + buttons |
| Output | Plain text | Styled chat bubbles |
| User Experience | Poor | Good |
| Complexity | Low | Medium |
| This project | ❌ | ✅ |

---

## 5. Components of ShopBot

### A) HTML (index.html)
Defines the **structure** of the chatbot:
- `#header` — Top bar with bot name and status
- `#messages` — Area where chat appears
- `#quick-btns` — One-click shortcut buttons
- `#input-row` — Text input + send button

### B) CSS (style.css)
Defines the **appearance**:
- Colors and fonts
- Chat bubble shapes (border-radius)
- Left align for bot, right align for user
- Typing animation (bouncing dots)
- Scrollable message area

### C) JavaScript — rules.js
Contains the **knowledge base**:
- An array of rule objects
- Each rule has `keys` (keywords) and `reply` (response)
- Developer can easily add more rules

### D) JavaScript — chatbot.js
Contains the **logic**:
- `getReply(input)` — Matches input to a rule
- `addMessage(text, sender)` — Adds bubble to chat
- `showTyping()` / `removeTyping()` — Typing animation
- `sendMsg()` — Called on button click or Enter key
- `window.onload` — Shows welcome message at start

---

## 6. Key JavaScript Concepts Used

### DOM Manipulation
```javascript
document.getElementById('messages')       // Find element
document.createElement('div')            // Create element
element.appendChild(child)               // Add to page
element.innerHTML = '...'                // Set content
element.scrollTop = element.scrollHeight // Auto scroll
```

### String Methods
```javascript
userInput.toLowerCase()    // "Hello" → "hello"
text.includes('keyword')   // Check if word exists in string
text.replace(/\n/g, '<br>') // Replace newlines with HTML line breaks
```

### setTimeout (Fake delay for typing effect)
```javascript
setTimeout(function() {
    // This runs after 800 milliseconds
    addMessage(reply, 'bot');
}, 800);
```

### Arrays and Objects
```javascript
// rules is an array of objects
const rules = [
  {
    keys: ['hello', 'hi'],   // array of keywords
    reply: "Hi there!"       // string response
  }
];
```

---

## 7. Advantages of Rule-Based Chatbot

1. **Simple to build** — No AI/ML knowledge needed
2. **Predictable** — Always gives exact expected output
3. **Fast** — No model loading or API calls
4. **Reliable** — No wrong or random answers
5. **Easy to update** — Just add new rules
6. **Works offline** — No internet needed

---

## 8. Disadvantages of Rule-Based Chatbot

1. **Limited** — Can only answer what's hardcoded
2. **No learning** — Doesn't improve over time
3. **Typo sensitive** — May miss keywords if user misspells
4. **Cannot handle context** — Each message is independent
5. **Scalability** — Managing 1000s of rules becomes hard

---

## 9. Real-World Applications of Chatbots

- **Amazon / Flipkart** — Order tracking, returns
- **Banking apps** — Balance check, mini statements
- **Hospital apps** — Appointment booking, symptom info
- **IRCTC** — Train booking assistance
- **College websites** — Admission enquiries
- **Swiggy / Zomato** — Order status, complaints

---

---

# VIVA QUESTIONS & ANSWERS

---

**Q1. What is a chatbot?**  
A chatbot is a software program that simulates human conversation. It takes text input from a user and generates an appropriate response automatically.

---

**Q2. What is a rule-based chatbot?**  
A rule-based chatbot works on predefined rules. It uses keyword matching — when a user types a message, the bot checks for specific keywords and returns the corresponding hardcoded response. There is no AI or machine learning involved.

---

**Q3. What is the difference between rule-based and AI-based chatbot?**  
A rule-based chatbot uses hardcoded if-else logic and keywords. An AI-based chatbot uses machine learning and NLP to understand natural language and learn over time. Rule-based is simpler and predictable; AI-based is smarter but complex.

---

**Q4. What is GUI-based chatbot?**  
GUI stands for Graphical User Interface. A GUI-based chatbot has a visual interface — buttons, text boxes, colored chat bubbles — unlike a console chatbot which only shows plain text in a terminal.

---

**Q5. Which languages/technologies did you use?**  
HTML5 for structure, CSS3 for styling and animations, and JavaScript (vanilla, no frameworks) for the chatbot logic.

---

**Q6. How does keyword matching work in your chatbot?**  
The user's input is converted to lowercase. Then we loop through the rules array. For each rule, we check if any of its keywords exist in the input using the `includes()` method. The first matching rule's reply is returned.

---

**Q7. What happens if no keyword matches?**  
The bot returns a default reply that tells the user what topics it can help with and suggests they try different keywords.

---

**Q8. What is the purpose of setTimeout in your code?**  
setTimeout is used to add a small delay (800ms) before showing the bot's reply. During this delay, a typing animation is shown. This makes the chatbot feel more natural and human-like.

---

**Q9. What is the purpose of rules.js and chatbot.js?**  
rules.js contains all the chatbot's knowledge — the keywords and responses. chatbot.js contains the logic — functions to match input, display messages, and handle user interaction. Separating them makes the code cleaner and easier to maintain.

---

**Q10. How can you improve this chatbot?**  
1. Add Natural Language Processing (NLP) for better understanding  
2. Add a database to store conversations  
3. Integrate with real APIs (actual order tracking)  
4. Add multi-language support  
5. Use ML to learn from user feedback  

---

**Q11. What is DOM manipulation?**  
DOM stands for Document Object Model. DOM manipulation means using JavaScript to dynamically create, modify, or delete HTML elements on the page. In our chatbot, we use it to add new chat bubbles every time a message is sent.

---

**Q12. Why did you choose e-commerce as the domain?**  
E-commerce is one of the most common real-world applications for chatbots. Topics like order tracking, returns, and payments are frequently asked by customers and are easy to handle with rule-based responses, making it ideal for an elementary chatbot.

---

*End of README*
