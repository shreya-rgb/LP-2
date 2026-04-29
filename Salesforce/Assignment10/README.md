📌 Salesforce Assignment 10: College Management Lightning Application

🎯 Objective

Develop a College Management Lightning Application to store and manage `Student` and `Faculty` records, ensuring data accuracy using Salesforce Validation Rules.

🛠️ Features
- Custom Object: `Student`
- Custom Object: `Faculty`
- Standard Salesforce Validation Rules (No Apex code required)
- Custom Lightning Application grouping both objects

⚙️ Technologies Used
- Salesforce Object Manager (Validation Rules)
- Lightning App Builder
- Salesforce Platform

🚀 Steps Performed
1. **Student Object Setup:**
   - Reused/Created `Student` object with fields: Name, Roll Number, Marks, Email
   - Added Validation Rules:
     - Marks between 0-100
     - Roll Number > 0
     - Email must contain `@`
     - Name cannot be blank

2. **Faculty Object Setup:**
   - Created `Faculty` object with fields: Name, Faculty ID, Salary, Department, Joining Date
   - Added Validation Rules:
     - Name >= 3 characters
     - Faculty ID > 0 (Uniqueness handled by field setting)
     - Salary between 10,000 and 500,000
     - Joining Date cannot be a future date

3. **Lightning App Creation:**
   - Created `College Management` App
   - Added `Students` and `Faculties` tabs to the navigation bar.

✅ Result

Successfully implemented a declarative (no-code) Lightning Application for College Management with comprehensive validation rules.
