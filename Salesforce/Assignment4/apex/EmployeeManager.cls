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
