# Assignment 9: Email Sender with Visualforce Frontend

> **CC- Develop an Apex program that sends an email notification** to a specified email address using Salesforce email services. The program should define the recipient email, subject, and message body, and send the email (with /without Attachment) using the built-in messaging class. Give the appropriate message on invalid email id (with frontend using visualforce pages).

---

## Step 1: Enable Email Deliverability

*Note: Skip this if you already did it for previous assignments.*

1. **Setup** → search **Deliverability** in Quick Find → click **Deliverability**
2. Set Access level to: **All Email**
3. Click **Save**

---

## Step 2: Create Apex Controller

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class EmailSenderController {
    
    // Properties to bind to the Visualforce page
    public String toAddress { get; set; }
    public String subject { get; set; }
    public String body { get; set; }

    public void sendEmail() {
        // Clear any previous messages
        ApexPages.getMessages().clear();

        // 1. Validate Email format
        // if (String.isBlank(toAddress) || !Pattern.matches('^[a-zA-Z0-9._|\\\\%#~`=?&/$^*!}{+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$', toAddress)) {
        //    ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Invalid Email ID provided. Please enter a valid email address.'));
        //    return;
        //}
            if (String.isBlank(toAddress) || !toAddress.contains('@') || !toAddress.contains('.')) {
                ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Invalid Email ID provided.'));
                return;
            }

        try {
            // 2. Create Email Object
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setToAddresses(new String[] { toAddress });
            mail.setSubject(subject);
            mail.setPlainTextBody(body);

            // 3. Create Attachment
            Messaging.EmailFileAttachment attachment = new Messaging.EmailFileAttachment();
            attachment.setFileName('SystemReport.txt');
            attachment.setBody(Blob.valueOf('This is an auto-generated attachment from your Visualforce page.'));
            attachment.setContentType('text/plain');

            mail.setFileAttachments(new Messaging.EmailFileAttachment[] { attachment });

            // 4. Send Email
            Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

            // 5. Handle Results
            if (results[0].isSuccess()) {
                ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM, 'Email sent successfully to ' + toAddress + ' with attachment.'));
                // Clear fields after success
                toAddress = '';
                subject = '';
                body = '';
            } else {
                ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Failed to send email: ' + results[0].getErrors()[0].getMessage()));
            }

        } catch (Exception e) {
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'An error occurred: ' + e.getMessage()));
        }
    }
}
```

---

## Step 3: Create Visualforce Page

**Setup** → **Visualforce Pages** → **New**
- Label: `EmailSenderPage` | Name: `EmailSenderPage`

Paste & Save:

```html
<apex:page controller="EmailSenderController">
    <apex:sectionHeader title="Email Service" subtitle="Send Email with Attachment"/>
    
    <apex:form >
        <!-- Displays Success or Error Messages -->
        <apex:pageMessages id="messages"/>

        <apex:pageBlock title="Compose Email">
            <apex:pageBlockSection columns="1">
                
                <apex:inputText value="{!toAddress}" label="Recipient Email ID" style="width: 300px;"/>
                <apex:inputText value="{!subject}" label="Subject" style="width: 300px;"/>
                <apex:inputTextarea value="{!body}" label="Message Body" rows="6" style="width: 300px;"/>
                
                <apex:pageBlockSectionItem >
                    <apex:outputLabel value=""/>
                    <apex:outputText value="* A default text attachment will be automatically added." style="color: gray; font-size: 0.9em;"/>
                </apex:pageBlockSectionItem>

            </apex:pageBlockSection>

            <apex:pageBlockButtons location="bottom">
                <apex:commandButton value="Send Email" action="{!sendEmail}" rerender="messages"/>
            </apex:pageBlockButtons>
        </apex:pageBlock>

    </apex:form>
</apex:page>
```

---

## Step 4: Preview & Test

1. Go to your Visualforce page URL: `https://YOUR-DOMAIN.develop.lightning.force.com/apex/EmailSenderPage`
2. **Test 1 (Invalid Email):** Type `hello_world` in the Recipient Email ID box and click "Send Email". You should see an **Error** message saying "Invalid Email ID".
3. **Test 2 (Valid Email):** Type your actual Gmail address, fill in the Subject and Body, and click "Send Email". You should see a **Green Success** message.
4. Check your Gmail inbox to see the email and the attachment!
