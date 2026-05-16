# Assignment 6: Product Inventory Management System (Visualforce)

> **CC- Product Inventory Management System**: Develop an application in Salesforce using the Apex programming language and visual force page to manage Product Inventory records (Product Name, Serial No, Manufacture Date, Expiry Date) stored in a custom object.

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Fill in:
   - Label: `Product Inventory`
   - Plural Label: `Product Inventories`
   - Record Name: `Record Name` | Data Type: `Auto Number` | Display Format: `REC-{0000}` | Starting Number: `1`
3. ✅ Check Allow Reports, Allow Activities, Allow Search
4. Click **Save**

---

## Step 2: Add Custom Fields

**Setup** → **Object Manager** → **Product Inventory** → **Fields & Relationships** → **New**

### Field 1: Product Name
- Data Type: `Text`
- Field Label: `Product Name`
- Length: `80`
- Save & New

### Field 2: Serial No
- Data Type: `Text`
- Field Label: `Serial No`
- Length: `50`
- Save & New

### Field 3: Manufacture Date
- Data Type: `Date`
- Field Label: `Manufacture Date`
- Save & New

### Field 4: Expiry Date
- Data Type: `Date`
- Field Label: `Expiry Date`
- Save

---

## Step 3: Create Apex Controller

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class ProductController {

    public Product_Inventory__c product {get;set;}
    public List<Product_Inventory__c> productList {get;set;}
    public String searchText {get;set;}

    // Constructor
    public ProductController() {

        product = new Product_Inventory__c();

        productList = [
            SELECT Id,
                   Product_Name__c,
                   Serial_No__c,
                   Manufacture_Date__c,
                   Expiry_Date__c
            FROM Product_Inventory__c
        ];
    }

    // ADD PRODUCT
    public void addProduct() {

        insert product;

        product = new Product_Inventory__c();

        refreshProducts();
    }

    // DELETE PRODUCT
    public void deleteProduct() {

        delete [
            SELECT Id
            FROM Product_Inventory__c
            WHERE Id = :product.Id
        ];

        refreshProducts();
    }

    // EDIT PRODUCT
    public void editProduct() {

        product = [
            SELECT Id,
                   Product_Name__c,
                   Serial_No__c,
                   Manufacture_Date__c,
                   Expiry_Date__c
            FROM Product_Inventory__c
            WHERE Id = :product.Id
        ];
    }

    // UPDATE PRODUCT
    public void updateProduct() {

        update product;

        product = new Product_Inventory__c();

        refreshProducts();
    }

    // SEARCH PRODUCT
    public void searchProduct() {

        productList = [
            SELECT Id,
                   Product_Name__c,
                   Serial_No__c,
                   Manufacture_Date__c,
                   Expiry_Date__c
            FROM Product_Inventory__c
            WHERE Product_Name__c LIKE :('%' + searchText + '%')
        ];
    }

    // REFRESH PRODUCT LIST
    public void refreshProducts() {

        productList = [
            SELECT Id,
                   Product_Name__c,
                   Serial_No__c,
                   Manufacture_Date__c,
                   Expiry_Date__c
            FROM Product_Inventory__c
        ];
    }
}
```

---

## Step 4: Create Visualforce Page

**Setup** → **Visualforce Pages** → **New**
- Label: `ProductPage` | Name: `ProductPage`

Paste & Save:

```html
<apex:page controller="ProductController">

    <h2>Product Inventory Management System</h2>

    <apex:form>

        <!-- SEARCH SECTION -->

        <apex:pageBlock title="Search Product">

            <apex:pageBlockSection columns="2">

                <apex:inputText value="{!searchText}"
                                label="Product Name"/>

                <apex:commandButton value="Search"
                                    action="{!searchProduct}"
                                    rerender="productTable"/>

                <apex:commandButton value="Show All"
                                    action="{!refreshProducts}"
                                    rerender="productTable"/>

            </apex:pageBlockSection>

        </apex:pageBlock>

        <!-- ADD / UPDATE SECTION -->

        <apex:pageBlock title="Add / Update Product">

            <apex:pageBlockSection columns="1">

                <apex:inputText value="{!product.Product_Name__c}"
                                label="Product Name"/>

                <apex:inputText value="{!product.Serial_No__c}"
                                label="Serial No"/>

                <apex:inputField value="{!product.Manufacture_Date__c}"
                                  label="Manufacture Date"/>

                <apex:inputField value="{!product.Expiry_Date__c}"
                                  label="Expiry Date"/>

                <!-- ADD BUTTON -->

                <apex:commandButton value="Add Product"
                                    action="{!addProduct}"
                                    rerender="productTable"
                                    rendered="{!ISNULL(product.Id)}"/>

                <!-- UPDATE BUTTON -->

                <apex:commandButton value="Update Product"
                                    action="{!updateProduct}"
                                    rerender="productTable"
                                    rendered="{!NOT(ISNULL(product.Id))}"/>

            </apex:pageBlockSection>

        </apex:pageBlock>

        <!-- PRODUCT TABLE -->

        <apex:pageBlock title="Inventory List">

            <apex:pageBlockTable value="{!productList}"
                                 var="p"
                                 id="productTable">

                <apex:column value="{!p.Product_Name__c}"
                             headerValue="Product Name"/>

                <apex:column value="{!p.Serial_No__c}"
                             headerValue="Serial No"/>

                <apex:column value="{!p.Manufacture_Date__c}"
                             headerValue="Manufacture Date"/>

                <apex:column value="{!p.Expiry_Date__c}"
                             headerValue="Expiry Date"/>

                <!-- EDIT BUTTON -->

                <apex:column headerValue="Edit">

                    <apex:commandButton value="Edit"
                                        action="{!editProduct}"
                                        rerender="productTable">

                        <apex:param name="productId"
                                    value="{!p.Id}"
                                    assignTo="{!product.Id}"/>

                    </apex:commandButton>

                </apex:column>

                <!-- DELETE BUTTON -->

                <apex:column headerValue="Delete">

                    <apex:commandButton value="Delete"
                                        action="{!deleteProduct}"
                                        rerender="productTable">

                        <apex:param name="productId"
                                    value="{!p.Id}"
                                    assignTo="{!product.Id}"/>

                    </apex:commandButton>

                </apex:column>

            </apex:pageBlockTable>

        </apex:pageBlock>

    </apex:form>

</apex:page>
```

---

## Step 5: Preview & Test

1. Go to your Visualforce page URL: `https://YOUR-DOMAIN.develop.lightning.force.com/apex/ProductPage`
2. You can also just click the **Preview** button on the Visualforce page setup screen.
3. Test adding a few products (e.g., "Laptop", "Mouse") and then test the delete button.
