# Assignment 7: Employee Management LWC with Validations

> **CC- Develop an Employee Management Lightning Web Component** that allows users to add employee records with validation. The system should validate the following before saving:
> - Employee Name cannot be empty and must contain at least 3 characters.
> - Employee ID must be greater than 0 and should be unique.
> - Salary must be greater than 10,000 and less than 500,000.
> - Email addresses must follow a valid email format.
> - The department must be selected from the available list.
> - Joining Date cannot be a future date.

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Label: `LWC Employee` | Plural Label: `LWC Employees` | Record Name: `Record Name` (Auto Number: `LWC-{0000}`)
3. Save

---

## Step 2: Add Custom Fields

Go to **Fields & Relationships** → **New** and add these fields:

1. **Employee Name**: `Text` (Length: 80)
2. **Emp ID**: `Number` (Length: 18, Decimal: 0) *(Note: NOT Auto-number, because user must input it to validate > 0)*
3. **Salary**: `Currency` (Length: 16, Decimal: 2)
4. **Email**: `Email`
5. **Department**: `Picklist` (Values: IT, HR, Sales, Finance)
6. **Joining Date**: `Date`

---

## Step 3: Create Apex Controller

*Because Lightning Web Components (LWC) need to query the database to check if the Employee ID is unique, we need an Apex Controller.*

1. **Developer Console** → **File** → **New** → **Apex Class**
2. Name it `EmployeeLWCController`
3. Paste the code from `apex/EmployeeLWCController.cls` and Save.

---

## Step 4: Create Lightning Web Component (LWC)

*Note: Creating an LWC usually requires VS Code and Salesforce CLI, or the Salesforce Code Builder.*

1. Create a new LWC named `employeeManagerLWC`.
2. Copy the contents of the files provided in the `lwc/employeeManagerLWC` folder:
   - `employeeManagerLWC.html` (The UI form)
   - `employeeManagerLWC.js` (The client-side validation logic)
   - `employeeManagerLWC.js-meta.xml` (To expose it to Lightning Pages)
3. **Deploy** the component to your Salesforce Org.

---

## Step 5: Add LWC to a Lightning Page

1. **Setup** → Search **Lightning App Builder**
2. Click **New** → **App Page** → Name it `Employee LWC App` → Select any layout (e.g., One Region) → Finish.
3. In the left panel under **Custom**, you will see `employeeManagerLWC`. Drag and drop it onto the page.
4. Click **Save** and then **Activate**.
5. Go to Activation → **Lightning Experience** → Add it to the App you are using (e.g., Sales App or a custom App).

---

## Step 6: Test Validations

Open the `Employee LWC App` tab in Salesforce and test all the rules:

1. Try saving with a 2-character name ❌ (Fails)
2. Try negative Emp ID ❌ (Fails)
3. Try Salary = 5000 ❌ (Fails)
4. Try invalid email (e.g., `test.com`) ❌ (Fails)
5. Select a future joining date ❌ (Fails)
6. Enter valid details and Save ✅ (Success)
7. Enter valid details but use the *same* Emp ID again ❌ (Fails uniquely in Apex)
