# IT Help Desk Expert System

## Practical / Lab Assignment
**Problem Statement:** Implement any one Expert System — Help Desk Management

---

## Folder Structure

```
ITHelpDesk/
│
├── index.html        ← Main HTML file
├── css/
│   └── style.css     ← Styling
└── js/
    ├── rules.js      ← Knowledge Base (all IT problems + solutions)
    └── expert.js     ← Inference Engine (logic)

README.md             ← Theory + Viva Q&A
```

---

## How to Run

1. Open `ITHelpDesk` folder in VS Code
2. Right-click `index.html` → Open with Live Server
3. OR just double-click `index.html` in any browser

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling |
| JavaScript | Expert system logic |

---

# THEORY

---

## 1. What is an Expert System?

An **Expert System** is a computer program that mimics the decision-making ability of a human expert in a specific domain.

It captures the **knowledge of a human expert** (like an IT technician) into rules, and uses those rules to solve problems automatically.

**Example:** Instead of calling an IT person every time your WiFi stops working, the expert system asks you to describe the problem and gives you the same solution the IT expert would give.

---

## 2. Components of an Expert System

### A) Knowledge Base (rules.js)
- Contains all the domain knowledge
- Stored as IF-THEN rules
- Example: IF problem contains "wifi" THEN show WiFi diagnosis and solution
- In our project: the `rules` array in `rules.js`

### B) Inference Engine (expert.js)
- The brain of the expert system
- Applies rules from knowledge base to the user's input
- Finds the best matching rule and returns the solution
- In our project: the `getReply()` function in `expert.js`

### C) User Interface (index.html + style.css)
- How the user interacts with the system
- Takes problem as input, shows diagnosis as output
- GUI-based: chat interface with quick buttons

---

## 3. How It Works (Flow)

```
User describes problem
        ↓
Convert input to lowercase
        ↓
Inference Engine loops through Knowledge Base
        ↓
Match keyword found? → Return diagnosis + solution
        ↓
No match? → Return default "can't identify" message
```

---

## 4. IF-THEN Rules (Rule-Based Reasoning)

Expert systems use IF-THEN logic:

```
IF problem contains "wifi" or "internet" or "network"
THEN
    Cause = Router issue / Driver problem
    Solution = Restart router, update driver, etc.
```

In JavaScript:
```javascript
{
  keys: ['wifi', 'internet', 'network'],
  reply: "WiFi diagnosed! \n Solution: restart router..."
}
```

---

## 5. Problems This System Can Solve

| Problem | Keywords Detected |
|---|---|
| WiFi / Internet | wifi, internet, network, connection |
| Printer | printer, print, paper |
| Slow PC | slow, hang, freeze, lagging |
| Keyboard | keyboard, keys, typing |
| Screen | screen, monitor, display, blank |
| Software crash | software, app, crash, not opening |
| Virus | virus, malware, hacked |
| Password | password, forgot, locked, login |
| Blue Screen | blue screen, bsod, crash |
| Disk Full | storage, disk full, no space |

---

## 6. Advantages of Expert System

1. Available 24/7 — no human expert needed
2. Consistent — always gives same answer for same problem
3. Fast — instant diagnosis
4. Cost-effective — reduces IT support calls
5. Captures expert knowledge permanently

---

## 7. Disadvantages of Expert System

1. Cannot handle problems outside its knowledge base
2. Cannot learn from new problems on its own
3. Knowledge base must be updated manually
4. Cannot handle vague or ambiguous input well

---

---

# VIVA QUESTIONS & ANSWERS

---

**Q1. What is an Expert System?**
An Expert System is a computer program that simulates the decision-making ability of a human expert. It uses a knowledge base of rules to diagnose problems and suggest solutions in a specific domain.

---

**Q2. What are the main components of your Expert System?**
Three components:
1. Knowledge Base (rules.js) — contains all IT problems and solutions as rules
2. Inference Engine (expert.js) — matches user input to rules and returns solution
3. User Interface (index.html + style.css) — GUI for user interaction

---

**Q3. What is a Knowledge Base?**
A knowledge base is a collection of facts and rules about a specific domain. In our system, it is the `rules` array in `rules.js` which contains keywords (IF part) and solutions (THEN part) for each IT problem.

---

**Q4. What is an Inference Engine?**
The inference engine is the logic that applies the knowledge base rules to the user's input. In our system, it is the `getReply()` function which loops through rules, finds a keyword match, and returns the appropriate diagnosis.

---

**Q5. What type of reasoning does your system use?**
Forward chaining — the system starts from the user's input (facts) and applies rules to reach a conclusion (diagnosis and solution). This is also called data-driven reasoning.

---

**Q6. What is the difference between a Chatbot and an Expert System?**
A chatbot gives general information. An expert system diagnoses a problem, identifies its cause, and gives a step-by-step expert solution. Expert systems have a structured knowledge base representing domain expertise.

---

**Q7. What domain does your expert system cover?**
IT Help Desk Management — it diagnoses and solves common computer problems like WiFi issues, printer problems, slow PC, virus attacks, blue screen errors, and more.

---

**Q8. How does keyword matching work?**
The user's input is converted to lowercase. The inference engine uses regular expressions with word boundaries (`\b`) to match exact keywords from the knowledge base. This prevents false matches like "hi" matching inside "shipping".

---

**Q9. What happens if the system cannot identify the problem?**
A default reply is shown asking the user to describe the problem differently, and provides the IT helpdesk contact number as a fallback.

---

**Q10. How can you improve this Expert System?**
1. Add a decision tree with follow-up questions for better diagnosis
2. Use NLP for better understanding of natural language
3. Connect to a real ticketing system
4. Add a feedback mechanism so the system learns
5. Add more problems to the knowledge base

---

*End of README*
