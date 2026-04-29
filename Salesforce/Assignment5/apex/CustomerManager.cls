public class CustomerManager {

    // 1. Add Customer
    public static void addCustomer(String customerName, String email, Date birthDate, String department) {
        Customer__c cust = new Customer__c();
        cust.Name = customerName; // Standard Name field for List View
        cust.Customer_Name__c = customerName;
        cust.Email__c = email;
        cust.Birth_Date__c = birthDate;
        cust.Department__c = department;
        insert cust;
        
        System.debug('✅ Customer Added Successfully!');
        System.debug('Customer ID: ' + cust.Customer_ID__c);
        System.debug('Name: ' + cust.Customer_Name__c);
    }

    // 2. View All Customers
    public static void viewAllCustomers() {
        List<Customer__c> custList = [SELECT Customer_ID__c, Customer_Name__c, Email__c, Birth_Date__c, Department__c FROM Customer__c ORDER BY Customer_ID__c];
        if (custList.isEmpty()) {
            System.debug('⚠️ No customers found.');
            return;
        }
        
        System.debug('===== ALL CUSTOMERS =====');
        for (Customer__c cust : custList) {
            System.debug('ID: ' + cust.Customer_ID__c +
                         ' | Name: ' + cust.Customer_Name__c +
                         ' | Email: ' + cust.Email__c +
                         ' | DOB: ' + cust.Birth_Date__c +
                         ' | Dept: ' + cust.Department__c);
        }
        System.debug('Total Customers: ' + custList.size());
    }

    // 3. Search Customer by ID
    public static void searchCustomer(String custId) {
        List<Customer__c> custList = [SELECT Customer_ID__c, Customer_Name__c, Email__c, Birth_Date__c, Department__c FROM Customer__c WHERE Customer_ID__c = :custId];
        if (custList.isEmpty()) {
            System.debug('❌ No customer found with ID: ' + custId);
            return;
        }
        
        Customer__c cust = custList[0];
        System.debug('===== CUSTOMER FOUND =====');
        System.debug('Customer ID: ' + cust.Customer_ID__c);
        System.debug('Name: ' + cust.Customer_Name__c);
        System.debug('Email: ' + cust.Email__c);
        System.debug('Birth Date: ' + cust.Birth_Date__c);
        System.debug('Department: ' + cust.Department__c);
    }

    // 4. Update Customer
    public static void updateCustomer(String custId, String newName, String newEmail, Date newBirthDate, String newDept) {
        List<Customer__c> custList = [SELECT Id, Customer_ID__c, Customer_Name__c, Email__c, Birth_Date__c, Department__c FROM Customer__c WHERE Customer_ID__c = :custId];
        if (custList.isEmpty()) {
            System.debug('❌ No customer found with ID: ' + custId);
            return;
        }
        
        Customer__c cust = custList[0];
        cust.Name = newName; // Update Standard Name field
        cust.Customer_Name__c = newName;
        cust.Email__c = newEmail;
        cust.Birth_Date__c = newBirthDate;
        cust.Department__c = newDept;
        update cust;
        
        System.debug('✅ Customer Updated Successfully!');
        System.debug('Customer ID: ' + cust.Customer_ID__c + ' | New Name: ' + newName + ' | New Dept: ' + newDept);
    }

    // 5. Delete Customer
    public static void deleteCustomer(String custId) {
        List<Customer__c> custList = [SELECT Id, Customer_ID__c FROM Customer__c WHERE Customer_ID__c = :custId];
        if (custList.isEmpty()) {
            System.debug('❌ No customer found with ID: ' + custId);
            return;
        }
        
        delete custList;
        System.debug('✅ Customer with ID: ' + custId + ' deleted successfully!');
    }
}
