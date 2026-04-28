# Assignment 1: Student Management System (Apex + Visualforce)

---

## Step 1: Create Custom Object

1. **Setup** → **Object Manager** → **Create** → **Custom Object**
2. Fill in:
   - Label: `Student`
   - Plural Label: `Students`
   - Record Name: `Student Name` | Data Type: `Text`
3. ✅ Check Allow Reports, Allow Activities, Allow Search
4. Click **Save**

---

## Step 2: Add Custom Fields

**Setup** → **Object Manager** → **Student** → **Fields & Relationships** → **New**

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

### Field 3: Marks
- Data Type: `Number`
- Field Label: `Marks`
- Decimal Places: `0`
- Save

---

## Step 3: Create Apex Controller

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class StudentController {
    public Student__c student {get;set;}
    public List<Student__c> studentList {get;set;}

    public StudentController() {
        student = new Student__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }

    public void addStudent() {
        student.Id = null;
        insert student;
        student = new Student__c();
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }

    public void deleteStudent() {
        delete [SELECT Id FROM Student__c WHERE Id = :student.Id];
        studentList = [SELECT Id, Student_Name__c, Roll_Number__c, Marks__c FROM Student__c];
    }
}
```

---

## Step 4: Create Visualforce Page

**Setup** → **Visualforce Pages** → **New**
- Label: `StudentPage` | Name: `StudentPage`

Paste & Save:

```html
<apex:page controller="StudentController">
    <h2>Student Record Management System</h2>

    <apex:form>

        <apex:pageBlock title="Add Student">
            <apex:pageBlockSection columns="1">
                <apex:inputText value="{!student.Student_Name__c}" label="Student Name"/>
                <apex:inputText value="{!student.Roll_Number__c}" label="Roll Number"/>
                <apex:inputText value="{!student.Marks__c}" label="Marks"/>

                <apex:commandButton value="Add Student" action="{!addStudent}" rerender="studentTable"/>
            </apex:pageBlockSection>
        </apex:pageBlock>

        <apex:pageBlock title="Student List">
            <apex:pageBlockTable value="{!studentList}" var="s" id="studentTable">

                <apex:column value="{!s.Student_Name__c}" headerValue="Name"/>
                <apex:column value="{!s.Roll_Number__c}" headerValue="Roll No"/>
                <apex:column value="{!s.Marks__c}" headerValue="Marks"/>

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

Go to: `https://YOUR-DOMAIN.develop.lightning.force.com/apex/StudentPage`
