📌 Salesforce Assignment 7: Employee Management Lightning Web Component (LWC)

🎯 Objective

Develop a Lightning Web Component (LWC) that allows users to add employee records with strict client-side and server-side validations before saving.

🛠️ Features
- Custom Lightning Web Component UI
- Client-side validation using JavaScript
- Apex backend for saving records
- Validations implemented:
  - Name: Not empty, >= 3 chars
  - ID: > 0, Unique
  - Salary: 10,000 to 500,000
  - Email: Valid format
  - Department: Must be selected
  - Joining Date: Cannot be in the future

⚙️ Technologies Used
- LWC (Lightning Web Components - HTML/JS/XML)
- Apex (Backend Controller)
- Salesforce CLI / VS Code
- Salesforce Platform

🚀 Steps Performed
1. Created Custom Object: LWC Employee (`LWC_Employee__c`)
2. Created Custom Fields (Name, Emp ID, Salary, Email, Department, Joining Date)
3. Developed Apex Controller (`EmployeeLWCController.cls`)
4. Developed LWC (`employeeManagerLWC`)
   - `employeeManagerLWC.html` (UI)
   - `employeeManagerLWC.js` (Logic & Validations)
   - `employeeManagerLWC.js-meta.xml` (Metadata)
5. Added LWC to a Lightning App Page for testing.

✅ Result

Successfully implemented a Lightning Web Component for Employee Management with complex validations.
