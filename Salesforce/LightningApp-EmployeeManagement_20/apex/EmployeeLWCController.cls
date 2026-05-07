public with sharing class EmployeeLWCController {

    @AuraEnabled
    public static String saveEmployee(String empName, Integer empId, Decimal salary, String email, String department, Date joiningDate) {
        try {
            // Server-side uniqueness check for Employee ID
            List<LWC_Employee__c> existingEmp = [SELECT Id FROM LWC_Employee__c WHERE Emp_ID__c = :empId LIMIT 1];
            if (!existingEmp.isEmpty()) {
                return 'Error: Employee ID must be unique. This ID already exists.';
            }

            // Create new record
            LWC_Employee__c newEmp = new LWC_Employee__c();
            newEmp.Name = empName;
            newEmp.Emp_ID__c = empId;
            newEmp.Salary__c = salary;
            newEmp.Email__c = email;
            newEmp.Department__c = department;
            newEmp.Joining_Date__c = joiningDate;
            
            insert newEmp;
            return 'Success';
            
        } catch (Exception e) {
            return 'Error: ' + e.getMessage();
        }
    }
}
