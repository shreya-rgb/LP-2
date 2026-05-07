# Assignment 10: College Management Lightning Application

> **CC- Develop a College Management Lightning Application** to store and manage student and faculty records. The system should ensure data accuracy using **validation rules** while creating or updating records.

---

## Part A: Student Validation Rules

*(Note: If you already have the Student object from Assignment 1 & 2, just verify or add these rules).*

**Setup** → **Object Manager** → **Student** → **Validation Rules** → **New**

### 1. Marks Validation
- **Rule Name:** `Marks_Validation`
- **Formula:** `OR(Marks__c < 0, Marks__c > 100)`
- **Error Message:** Marks must be between 0 and 100.
- **Error Location:** Field → Marks

### 2. Roll Number Validation
- **Rule Name:** `Roll_Number_Validation`
- **Formula:** `Roll_Number__c <= 0`
- **Error Message:** Roll number must be greater than 0.
- **Error Location:** Field → Roll Number

### 3. Email Validation
- **Rule Name:** `Email_Format_Validation`
- **Formula:** `NOT(CONTAINS(Email__c, "@"))`
- **Error Message:** Ensure the email contains @ symbol.
- **Error Location:** Field → Email

### 4. Name Validation
- **Rule Name:** `Name_Cannot_Be_Blank`
- **Formula:** `ISBLANK(Student_Name__c)`
- **Error Message:** The student's name cannot be blank.
- **Error Location:** Field → Student Name

---

## Part B: Faculty Object & Validations

### 1. Create Faculty Object
- **Setup** → **Object Manager** → **Create** → **Custom Object**
- Label: `Faculty` | Plural: `Faculties`
- Record Name: `Faculty Name` | Type: `Text`

### 2. Add Faculty Fields
Go to **Fields & Relationships** → **New**:
- **Faculty ID:** `Number` (Check the **"Unique"** checkbox to satisfy the unique requirement)
- **Salary:** `Currency`
- **Department:** `Picklist` (e.g., IT, CS, Mech)
- **Joining Date:** `Date`

### 3. Add Faculty Validation Rules
**Setup** → **Object Manager** → **Faculty** → **Validation Rules** → **New**

**Rule 1: Faculty Name Validation**
- **Rule Name:** `Name_Length_Validation`
- **Formula:** `OR(ISBLANK(Name), LEN(Name) < 3)`
- **Error Message:** Faculty Name cannot be empty and must contain at least 3 characters.
- **Error Location:** Field → Faculty Name

**Rule 2: Faculty ID Validation**
- **Rule Name:** `Faculty_ID_Validation`
- **Formula:** `Faculty_ID__c <= 0`
- *(Note: Uniqueness is already handled by the field setting)*
- **Error Message:** Faculty ID must be greater than 0.
- **Error Location:** Field → Faculty ID

**Rule 3: Salary Validation**
- **Rule Name:** `Salary_Validation`
- **Formula:** `OR(Salary__c <= 10000, Salary__c >= 500000)`
- **Error Message:** Salary must be greater than 10,000 and less than 500,000.
- **Error Location:** Field → Salary

**Rule 4: Joining Date Validation**
- **Rule Name:** `Joining_Date_Validation`
- **Formula:** `Joining_Date__c > TODAY()`
- **Error Message:** Joining Date cannot be a future date.
- **Error Location:** Field → Joining Date

---

## Part C: Create Tabs

1. **Setup** → Search **Tabs**
2. **Custom Object Tabs** → **New**
3. Create a tab for `Student` (if not already done).
4. Create a tab for `Faculty`.

---

## Part D: Create Lightning Application

1. **Setup** → Search **App Manager**
2. Click **New Lightning App**
3. **App Details:** Name it `College Management` → Next
4. **App Options:** Standard Navigation → Next
5. **Utility Items:** Leave blank → Next
6. **Navigation Items:** Move **Students** and **Faculties** to the "Selected Items" list → Next
7. **User Profiles:** Select **System Administrator** (and any other profile you use) → Save & Finish

---

## Step 5: Test the Application

1. Go to your Salesforce Homepage, click the **App Launcher** (⊞)
2. Search and open **College Management**
3. You will see two tabs: **Students** and **Faculties**.
4. Click **New** in both tabs and try to enter invalid data (like salary = 5000) to verify your validation rules pop up!
