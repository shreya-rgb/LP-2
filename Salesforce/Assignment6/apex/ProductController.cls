public class ProductController {
    public Product_Inventory__c product {get;set;}
    public List<Product_Inventory__c> productList {get;set;}

    public ProductController() {
        product = new Product_Inventory__c();
        productList = [SELECT Id, Product_Name__c, Serial_No__c, Manufacture_Date__c, Expiry_Date__c FROM Product_Inventory__c];
    }

    public void addProduct() {
        product.Id = null;
        insert product;
        product = new Product_Inventory__c(); // reset form
        productList = [SELECT Id, Product_Name__c, Serial_No__c, Manufacture_Date__c, Expiry_Date__c FROM Product_Inventory__c]; // refresh list
    }

    public void deleteProduct() {
        delete [SELECT Id FROM Product_Inventory__c WHERE Id = :product.Id];
        productList = [SELECT Id, Product_Name__c, Serial_No__c, Manufacture_Date__c, Expiry_Date__c FROM Product_Inventory__c]; // refresh list
    }
}
