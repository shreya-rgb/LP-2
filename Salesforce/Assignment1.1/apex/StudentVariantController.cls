public class StudentVariantController {
    public Student_Variant__c student {get;set;}
    public List<Student_Variant__c> studentList {get;set;}

    public StudentVariantController() {
        student = new Student_Variant__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Class__c, Mobile_No__c FROM Student_Variant__c];
    }

    public void addStudent() {
        student.Id = null;
        insert student;
        student = new Student_Variant__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Class__c, Mobile_No__c FROM Student_Variant__c];
    }

    public void deleteStudent() {
        delete [SELECT Id FROM Student_Variant__c WHERE Id = :student.Id];
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Class__c, Mobile_No__c FROM Student_Variant__c];
    }
}
