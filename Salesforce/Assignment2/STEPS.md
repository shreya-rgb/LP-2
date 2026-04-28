# Assignment 2: Validation Rules + Lightning App

> **Prerequisite:** Complete Assignment 1 Step 1 & Step 2 (Custom Object + Fields)

---

## Step 1: Add Email Field

1. **Setup** → **Object Manager** → **Student** → **Fields & Relationships** → **New**
2. Data Type: `Email`
3. Field Label: `Email`
4. Save

---

## Step 2: Create Validation Rules

**Setup** → **Object Manager** → **Student** → **Validation Rules** → **New**

### Rule 1: Marks Validation
- Rule Name: `Marks_Validation`
- Active: ✅
- Formula:
```
OR(Marks__c < 0, Marks__c > 100)
```
- Error Message: `Marks must be between 0 and 100`
- Error Location: Field → `Marks`
- Save

### Rule 2: Roll Number Validation
- Rule Name: `Roll_Number_Validation`
- Active: ✅
- Formula:
```
Roll_Number__c <= 0
```
- Error Message: `Roll Number must be greater than 0`
- Error Location: Field → `Roll Number`
- Save

### Rule 3: Email Format Validation
- Rule Name: `Email_Format_Validation`
- Active: ✅
- Formula:
```
NOT(CONTAINS(Email__c, "@"))
```
- Error Message: `Please enter a valid email address`
- Error Location: Field → `Email`
- Save

### Rule 4: Student Name Validation
- Rule Name: `Student_Name_Validation`
- Active: ✅
- Formula:
```
ISBLANK(Student_Name__c)
```
- Error Message: `Student Name is required`
- Error Location: Field → `Student Name`
- Save

---

## Step 3: Create Tab (Required for Lightning App)

1. **Setup** → search **Tabs** → click **Tabs**
2. Under **Custom Object Tabs** → click **New**
3. Object: `Student` → pick any Tab Style → Next → Next → Save

---

## Step 4: Create Lightning App

1. **Setup** → search **App Manager** → click **App Manager**
2. Click **New Lightning App**

### Wizard:
| Screen | Action |
|---|---|
| App Details | Name: `Student Management` |
| App Options | Standard Navigation → Next |
| Utility Items | Skip → Next |
| Navigation Items | Move **Students** to Selected Items |
| User Profiles | Move **System Administrator** to Selected |

3. Click **Save & Finish**

---

## Step 5: Test

1. Click **App Launcher** (⊞) → search **Student Management** → open it
2. Click **Students** tab → **New**
3. Test each validation:
   - Marks = `150` → ❌ Error
   - Roll Number = `0` → ❌ Error
   - Email = `testgmail.com` → ❌ Error
   - Name = *(blank)* → ❌ Error
   - Valid data → ✅ Saves
