# Assignment 5: Bank Account System (Console Based)

> **CC- Bank Account System**: Develop a menu-driven Bank Account System that manages Customer records (Emp ID, Emp Name, email, birth date, Department) in Salesforce using console based.
> 
> *Note: Although it's a Bank Account System, the problem statement explicitly mentions fields like "Emp ID, Emp Name, Department". For this assignment, we'll create a `Customer` object with fields mapped to those exact requirements: `Customer ID`, `Customer Name`, `Email`, `Birth Date`, and `Department`.*

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Fill in:
   - Label: `Customer`
   - Plural Label: `Customers`
   - Record Name: `Customer Name` | Data Type: `Text`
3. ✅ Check Allow Reports, Allow Activities, Allow Search
4. Click **Save**

---

## Step 2: Add Custom Fields

**Setup** → **Object Manager** → **Customer** → **Fields & Relationships** → **New**

### Field 1: Customer ID
- Data Type: `Auto Number`
- Field Label: `Customer ID`
- Display Format: `CUST-{0000}`
- Starting Number: `1`
- Save & New

### Field 2: Customer Name
- Data Type: `Text`
- Field Label: `Customer Name`
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
  Personal Banking
  Corporate Banking
  Loans
  Credit Cards
  Investments
  ```
- Save

---

## Step 3: Create Apex Class

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
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
```

---

## Step 4: Create Tab for Customer Object

1. **Setup** → search **Tabs** in Quick Find → click **Tabs**
2. Under **Custom Object Tabs** → click **New**
3. Object: `Customer` → pick any Tab Style (e.g., Bank, Building) → **Next** → **Next** → **Save**

---

## Step 5: Execute via Developer Console (Menu-Driven Testing)

1. Click **gear ⚙️** → **Developer Console**
2. In Developer Console: **Debug** → **Open Execute Anonymous Window** (or `Ctrl+E`)
3. ✅ Check **Open Log** before executing each operation

### Operation 1: Add Customers

```java
CustomerManager.addCustomer('Aman Verma', 'aman.v@example.com', Date.newInstance(1990, 4, 12), 'Personal Banking');
CustomerManager.addCustomer('Neha Sharma', 'neha.s@example.com', Date.newInstance(1985, 8, 25), 'Corporate Banking');
CustomerManager.addCustomer('Rohan Das', 'rohan.d@example.com', Date.newInstance(1992, 11, 5), 'Credit Cards');
```

### Operation 2: View All Customers

```java
CustomerManager.viewAllCustomers();
```

### Operation 3: Search Customer by ID

```java
CustomerManager.searchCustomer('CUST-0001');
```

### Operation 4: Update Customer

```java
CustomerManager.updateCustomer('CUST-0001', 'Aman Kumar Verma', 'aman.new@example.com', Date.newInstance(1990, 4, 12), 'Investments');
```

### Operation 5: Delete Customer

```java
CustomerManager.deleteCustomer('CUST-0003');
```

### Operation 6: Verify After Deletion

```java
CustomerManager.viewAllCustomers();
```

---

## Step 6: View Records in Lightning

1. Go to your **Salesforce homepage**
2. Click the **App Launcher** (⊞ grid icon at top-left)
3. Search **"Customers"** → click on it
4. Make sure to change the List View from "Recently Viewed" to **"All"**
5. You will see all customer records in a **List View table**
6. Click on any record to see full details (Customer ID, Name, Email, Birth Date, Department)

---

## Step 7: Verify Debug Logs

After each execution in Developer Console:

1. In the log window, check **"Debug Only"** checkbox
2. You should see the respective output messages.
