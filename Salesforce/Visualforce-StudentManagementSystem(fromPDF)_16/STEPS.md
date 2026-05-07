# Assignment 1.1: Student Management System (Variant)

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Fill in:
   - Label: `Student Variant`
   - Plural Label: `Student Variants`
   - Record Name: `Student Name` | Data Type: `Text`
3. ✅ Check Allow Reports, Allow Activities, Allow Search
4. Click **Save**

---

## Step 2: Add Custom Fields

**Setup** → **Object Manager** → **Student Variant** → **Fields & Relationships** → **New**

### Field 1: Student Name
- Data Type: `Text`
- Field Label: `Student Name`
- Length: `80`
- Save & New

### Field 2: Roll Number
- Data Type: `Number`
- Field Label: `Roll Number`
- Decimal Places: `0`
- Save & New

### Field 3: Class
- Data Type: `Text`
- Field Label: `Class`
- Length: `50`
- Save & New

### Field 4: Mobile No
- Data Type: `Phone`
- Field Label: `Mobile No`
- Save

---

## Step 3: Create Apex Controller

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
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

   // Load student data into form for editing
public void editStudent() {
    student = [SELECT Id, Student_Name__c, Roll_Number__c, Class__c, Mobile_No__c 
               FROM Student_Variant__c WHERE Id = :student.Id];
}

// Save the updated student
public void updateStudent() {
    update student;
    student = new Student_Variant__c();
    studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Class__c, Mobile_No__c 
                   FROM Student_Variant__c];
}

}
```

---

## Step 4: Create Visualforce Page

**Setup** → **Visualforce Pages** → **New**
- Label: `StudentVariantPage` | Name: `StudentVariantPage`

Paste & Save:

```html
<apex:page controller="StudentVariantController">
    <h2>Student Record Management System</h2>

    <apex:form>

        <apex:pageBlock title="Add Student">
            <apex:pageBlockSection columns="1">
                <apex:inputText value="{!student.Student_Name__c}" label="Student Name"/>
                <apex:inputText value="{!student.Roll_Number__c}" label="Roll Number"/>
                <apex:inputText value="{!student.Class__c}" label="Class"/>
                <apex:inputText value="{!student.Mobile_No__c}" label="Mobile No"/>

                <apex:commandButton value="Add Student" action="{!addStudent}" rerender="studentTable"/>
<apex:commandButton value="Update Student" action="{!updateStudent}" rerender="studentTable"/>
            </apex:pageBlockSection>
        </apex:pageBlock>

        <apex:pageBlock title="Student List">
            <apex:pageBlockTable value="{!studentList}" var="s" id="studentTable">

                <apex:column value="{!s.Student_Name__c}" headerValue="Name"/>
                <apex:column value="{!s.Roll_Number__c}" headerValue="Roll No"/>
                <apex:column value="{!s.Class__c}" headerValue="Class"/>
                <apex:column value="{!s.Mobile_No__c}" headerValue="Mobile No"/>

               <apex:column>
    <apex:commandButton value="Edit" action="{!editStudent}" rerender="studentTable">
        <apex:param name="studentId" value="{!s.Id}" assignTo="{!student.Id}"/>
    </apex:commandButton>
</apex:column>

                <apex:column>
                    <apex:commandButton value="Delete" action="{!deleteStudent}" rerender="studentTable">
                        <apex:param name="studentId" value="{!s.Id}" assignTo="{!student.Id}"/>
                    </apex:commandButton>
                </apex:column>

            </apex:pageBlockTable>
        </apex:pageBlock>

    </apex:form>
</apex:page>
```

---

## Step 5: Preview

Go to: `https://YOUR-DOMAIN.develop.lightning.force.com/apex/StudentVariantPage`
