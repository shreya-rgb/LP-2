# Assignment 8: Email Notification with Attachment (Console Based)

> **CC- Develop an console based Apex program that sends an email notification** to a specified email address using Salesforce email services. The program should define the recipient email, subject, and message body, and send the email using the built-in messaging class. (with /without Attachment)

---

## Step 1: Enable Email Deliverability

*Note: If you already did this for Assignment 3, you can skip this step.*

1. **Setup** → search **Deliverability** in Quick Find → click **Deliverability**
2. Set Access level to: **All Email**
3. Click **Save**

---

## Step 2: Create Apex Class

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class EmailWithAttachment {
    
    public static void sendEmail(String toEmailAddress) {
        // 1. Create a new email object
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

        // 2. Define recipient, subject, and body
        mail.setToAddresses(new String[] { toEmailAddress });
        mail.setSubject('Test Email with Attachment from Salesforce Apex');
        mail.setPlainTextBody('Hello,\n\nPlease find the attached document sent from Salesforce Apex.\n\nRegards,\nSalesforce Developer');

        // 3. Create an attachment
        Messaging.EmailFileAttachment attachment = new Messaging.EmailFileAttachment();
        attachment.setFileName('SampleAttachment.txt');
        attachment.setBody(Blob.valueOf('This is a sample text file generated from Apex and attached to the email.'));
        attachment.setContentType('text/plain');

        // 4. Add the attachment to the email
        mail.setFileAttachments(new Messaging.EmailFileAttachment[] { attachment });

        // 5. Send the email
        Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

        // 6. Check the result
        if (results[0].isSuccess()) {
            System.debug('✅ Email Sent Successfully with Attachment to ' + toEmailAddress);
        } else {
            System.debug('❌ Email Failed: ' + results[0].getErrors()[0].getMessage());
        }
    }
}
```

---

## Step 3: Execute via Developer Console

1. Click **gear ⚙️** → **Developer Console**
2. In Developer Console: **Debug** → **Open Execute Anonymous Window** (or `Ctrl+E`)
3. ✅ Check **Open Log**
4. Paste the following code (Replace with your actual email address):

```java
EmailWithAttachment.sendEmail('your.actual.email@gmail.com');
```

5. Click **Execute**

---

## Step 4: Verify Debug Log & Email Inbox

1. In the log window, check the **"Debug Only"** checkbox. You should see:
   ```
   DEBUG|✅ Email Sent Successfully with Attachment to your.actual.email@gmail.com
   ```

2. Open your Email Inbox (e.g., Gmail).
3. Check for an email titled **"Test Email with Attachment from Salesforce Apex"**.
4. You will see the email body along with a text file attached named `SampleAttachment.txt`!
