# 📌 Salesforce Assignment 2: Student Management Lightning App


Validation Rules 
Marks_Validation → OR(Marks__c < 0, Marks__c > 100)
Roll_Number_Validation → Roll_Number__c <= 0
Email_Format_Validation → NOT(CONTAINS(Email__c,"@"))
Student_Name_Validation → ISBLANK(Student_Name__c)


## 🎯 Objective
To enhance the Student Management System by adding validation rules and creating a Lightning App.

---

## 🛠️ Features
- Email field added
- Validation rules implemented
- Lightning App created
- Data validation enforced

---

## ⚙️ Technologies Used
- Salesforce Platform
- Lightning App Builder
- Validation Rules

---

## 🚀 Steps Performed

### 1. Added Email Field
- Field Name: Email
- Data Type: Email

---

### 2. Validation Rules

#### 🔴 Marks Validation

OR(Marks__c < 0, Marks__c > 100)


#### 🔴 Roll Number Validation

Roll_Number__c <= 0


#### 🔴 Email Validation

NOT(CONTAINS(Email__c,"@"))


#### 🔴 Student Name Validation

ISBLANK(Student_Name__c)

---

### 3. Created Lightning App
- App Name: Student Management
- Added Student Object

---

### 4. Testing Validation

- Marks > 100 → Error shown
- Roll Number ≤ 0 → Error shown
- Invalid Email → Error shown
- Empty Name → Error shown

---

## 📸 Screenshots

### 🔹 Email Field
![Email Field](screenshots/email_field.png)

### 🔹 Validation Rules
![Validation Rules](screenshots/validation_rules.png)

### 🔹 Lightning App
![Lightning App](screenshots/lightning_app.png)

### 🔹 App Running
![App Running](screenshots/app_running.png)

### 🔹 Marks Error
![Marks Error](screenshots/marks_error.png)

### 🔹 Roll Number Error
![Roll Error](screenshots/roll_error.png)

### 🔹 Email Error
![Email Error](screenshots/email_error.png)

### 🔹 Name Error
![Name Error](screenshots/name_error.png)

---

## ✅ Result
Successfully implemented validation rules and created a Lightning App ensuring data accuracy.

---