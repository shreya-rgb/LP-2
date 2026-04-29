# Assignment 4: Employee Management System (Console Based)

> **CC- Employee Management System**: Develop a menu-driven Employee Management System that manages employee records (Emp ID, Emp Name, Email, Birth Date, Department) in Salesforce using console based.

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Fill in:
   - Label: `Employee`
   - Plural Label: `Employees`
   - Record Name: `Employee Name` | Data Type: `Text`
3. ✅ Check Allow Reports, Allow Activities, Allow Search
4. Click **Save**

---

## Step 2: Add Custom Fields

**Setup** → **Object Manager** → **Employee** → **Fields & Relationships** → **New**

### Field 1: Emp ID
- Data Type: `Auto Number`
- Field Label: `Emp ID`
- Display Format: `EMP-{0000}`
- Starting Number: `1`
- Save & New

### Field 2: Emp Name
- Data Type: `Text`
- Field Label: `Emp Name`
- Length: `80`
- Save & New

### Field 3: Email
- Data Type: `Email`
- Field Label: `Email`
- Save & New

### Field 4: Birth Date
- Data Type: `Date`
- Field Label: `Birth Date`
- Save & New

### Field 5: Department
- Data Type: `Picklist`
- Field Label: `Department`
- Values (enter each on a new line):
  ```
  HR
  Engineering
  Sales
  Marketing
  Finance
  Operations
  ```
- Save

---

## Step 3: Create Apex Class

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class EmployeeManager {

    // 1. Add Employee
    public static void addEmployee(String empName, String email, Date birthDate, String department) {
        Employee__c emp = new Employee__c();
        emp.Name = empName;
        emp.Emp_Name__c = empName;
        emp.Email__c = email;
        emp.Birth_Date__c = birthDate;
        emp.Department__c = department;
        insert emp;
        System.debug('✅ Employee Added Successfully!');
        System.debug('Emp ID: ' + emp.Emp_ID__c);
        System.debug('Name: ' + emp.Emp_Name__c);
    }

    // 2. View All Employees
    public static void viewAllEmployees() {
        List<Employee__c> empList = [SELECT Emp_ID__c, Emp_Name__c, Email__c, Birth_Date__c, Department__c FROM Employee__c ORDER BY Emp_ID__c];
        if (empList.isEmpty()) {
            System.debug('⚠️ No employees found.');
            return;
        }
        System.debug('===== ALL EMPLOYEES =====');
        for (Employee__c emp : empList) {
            System.debug('Emp ID: ' + emp.Emp_ID__c +
                         ' | Name: ' + emp.Emp_Name__c +
                         ' | Email: ' + emp.Email__c +
                         ' | DOB: ' + emp.Birth_Date__c +
                         ' | Dept: ' + emp.Department__c);
        }
        System.debug('Total Employees: ' + empList.size());
    }

    // 3. Search Employee by Emp ID
    public static void searchEmployee(String empId) {
        List<Employee__c> empList = [SELECT Emp_ID__c, Emp_Name__c, Email__c, Birth_Date__c, Department__c FROM Employee__c WHERE Emp_ID__c = :empId];
        if (empList.isEmpty()) {
            System.debug('❌ No employee found with Emp ID: ' + empId);
            return;
        }
        Employee__c emp = empList[0];
        System.debug('===== EMPLOYEE FOUND =====');
        System.debug('Emp ID: ' + emp.Emp_ID__c);
        System.debug('Name: ' + emp.Emp_Name__c);
        System.debug('Email: ' + emp.Email__c);
        System.debug('Birth Date: ' + emp.Birth_Date__c);
        System.debug('Department: ' + emp.Department__c);
    }

    // 4. Update Employee
    public static void updateEmployee(String empId, String newName, String newEmail, Date newBirthDate, String newDept) {
        List<Employee__c> empList = [SELECT Id, Emp_ID__c, Emp_Name__c, Email__c, Birth_Date__c, Department__c FROM Employee__c WHERE Emp_ID__c = :empId];
        if (empList.isEmpty()) {
            System.debug('❌ No employee found with Emp ID: ' + empId);
            return;
        }
        Employee__c emp = empList[0];
        emp.Name = newName;
        emp.Emp_Name__c = newName;
        emp.Email__c = newEmail;
        emp.Birth_Date__c = newBirthDate;
        emp.Department__c = newDept;
        update emp;
        System.debug('✅ Employee Updated Successfully!');
        System.debug('Emp ID: ' + emp.Emp_ID__c + ' | New Name: ' + newName + ' | New Dept: ' + newDept);
    }

    // 5. Delete Employee
    public static void deleteEmployee(String empId) {
        List<Employee__c> empList = [SELECT Id, Emp_ID__c FROM Employee__c WHERE Emp_ID__c = :empId];
        if (empList.isEmpty()) {
            System.debug('❌ No employee found with Emp ID: ' + empId);
            return;
        }
        delete empList;
        System.debug('✅ Employee with Emp ID: ' + empId + ' deleted successfully!');
    }
}
```

---

## Step 4: Create Tab for Employee Object

1. **Setup** → search **Tabs** in Quick Find → click **Tabs**
2. Under **Custom Object Tabs** → click **New**
3. Object: `Employee` → pick any Tab Style → **Next** → **Next** → **Save**

---

## Step 5: Execute via Developer Console (Menu-Driven Testing)

1. Click **gear ⚙️** → **Developer Console**
2. In Developer Console: **Debug** → **Open Execute Anonymous Window** (or `Ctrl+E`)
3. ✅ Check **Open Log** before executing each operation

### Operation 1: Add Employees

```java
EmployeeManager.addEmployee('Shreya Gupta', 'shreya@gmail.com', Date.newInstance(2003, 5, 15), 'Engineering');
EmployeeManager.addEmployee('Rahul Sharma', 'rahul@gmail.com', Date.newInstance(2002, 8, 22), 'HR');
EmployeeManager.addEmployee('Priya Desai', 'priya@gmail.com', Date.newInstance(2001, 3, 10), 'Marketing');
```

### Operation 2: View All Employees

```java
EmployeeManager.viewAllEmployees();
```

### Operation 3: Search Employee by Emp ID

```java
EmployeeManager.searchEmployee('EMP-0001');
```

### Operation 4: Update Employee

```java
EmployeeManager.updateEmployee('EMP-0001', 'Shreya R Gupta', 'shreya.updated@gmail.com', Date.newInstance(2003, 5, 15), 'Sales');
```

### Operation 5: Delete Employee

```java
EmployeeManager.deleteEmployee('EMP-0003');
```

### Operation 6: Verify After Deletion

```java
EmployeeManager.viewAllEmployees();
```

---

## Step 6: View Records in Lightning

1. Go to your **Salesforce homepage**
2. Click the **App Launcher** (⊞ grid icon at top-left)
3. Search **"Employees"** → click on it
4. You will see all employee records in a **List View table**
5. Click on any record to see full details (Emp ID, Name, Email, Birth Date, Department)

---

## Step 7: Verify Debug Logs

After each execution in Developer Console:

1. In the log window, check **"Debug Only"** checkbox
2. You should see the respective output messages:

**For Add:**
```
DEBUG|✅ Employee Added Successfully!
DEBUG|Emp ID: EMP-0001
DEBUG|Name: Shreya Gupta
```

**For View All:**
```
DEBUG|===== ALL EMPLOYEES =====
DEBUG|Emp ID: EMP-0001 | Name: Shreya Gupta | Email: shreya@gmail.com | DOB: 2003-05-15 | Dept: Engineering
DEBUG|Total Employees: 3
```

**For Search:**
```
DEBUG|===== EMPLOYEE FOUND =====
DEBUG|Emp ID: EMP-0001
DEBUG|Name: Shreya Gupta
```

**For Update:**
```
DEBUG|✅ Employee Updated Successfully!
```

**For Delete:**
```
DEBUG|✅ Employee with Emp ID: EMP-0003 deleted successfully!
```
