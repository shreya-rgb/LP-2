# IT Help Desk Expert System (No GUI)

# 1. The Knowledge Base (Rules)
knowledge_base = {
    ("wifi", "internet", "network", "connection"): "📶 WiFi Issue Diagnosed!\nSolutions:\n1. Restart router\n2. Reconnect WiFi\n3. Update network drivers.",
    
    ("printer", "print", "paper"): "🖨️ Printer Issue Diagnosed!\nSolutions:\n1. Check paper/ink\n2. Clear print queue\n3. Restart print spooler.",
    
    ("slow", "hang", "freeze", "lag"): "🐢 Slow PC Diagnosed!\nSolutions:\n1. Close heavy apps\n2. Clear temp files\n3. Run antivirus scan.",
    
    ("password", "login", "locked"): "🔑 Login Issue Diagnosed!\nSolutions:\n1. Click 'Forgot Password'\n2. Use OTP to reset\n3. Contact Admin.",
}

# 2. The Inference Engine
def diagnose_problem(user_input):
    user_input = user_input.lower()
    for keywords, solution in knowledge_base.items():
        for word in keywords:
            if word in user_input:
                return solution
    return "🤔 I couldn't identify the problem. Please try describing it differently (e.g., 'wifi is not working')."

# Main execution loop
print("="*40)
print("🖥️  Welcome to the IT Help Desk Expert System")
print("Type 'exit' to quit.")
print("="*40)

while True:
    print("\n")
    user_input = input("Describe your IT problem: ")
    if user_input.lower() in ['exit', 'quit', 'bye']:
        print("Goodbye! Stay productive! 💻")
        break
    reply = diagnose_problem(user_input)
    print("\n--- DIAGNOSIS ---")
    print(reply)
    print("-----------------")