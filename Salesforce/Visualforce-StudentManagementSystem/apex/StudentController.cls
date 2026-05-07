public class StudentController {
    public Student__c student {get;set;}
    public List<Student__c> studentList {get;set;}

    public StudentController() {
        student = new Student__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }

    public void addStudent() {
        insert student;
        student = new Student__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }

    public void deleteStudent() {
        delete [SELECT Id FROM Student__c WHERE Id = :student.Id];
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }
}