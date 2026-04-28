# Assignment 3: Email Notification using Apex

---

## Step 1: Enable Email Deliverability

1. **Setup** → search **Deliverability** → click **Deliverability**
2. Set Access level to: **All Email**
3. Save

---

## Step 2: Create Apex Class

**Setup** → **Apex Classes** → **New** → Paste & Save:

```java
public class SendEmailExample {
    public static void sendEmail() {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

        mail.setToAddresses(new String[] {'yourgmail@gmail.com'});
        mail.setSubject('Test Email from Salesforce Apex');
        mail.setPlainTextBody('Hello, this is a test email sent using Apex.');

        Messaging.SendEmailResult[] results =
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});

        if(results[0].isSuccess()){
            System.debug('Email Sent Successfully');
        } else {
            System.debug('Email Failed: ' + results[0].getErrors()[0].getMessage());
        }
    }
}
```

> ⚠️ Replace `yourgmail@gmail.com` with your actual email address.

---

## Step 3: Execute the Code

1. Click **gear ⚙️** → **Developer Console**
2. In Developer Console: **Debug** → **Open Execute Anonymous Window** (or `Ctrl+E`)
3. Type:

```java
SendEmailExample.sendEmail();
```

4. ✅ Check **Open Log**
5. Click **Execute**

---

## Step 4: Verify Debug Log

1. In the log window, check **"Debug Only"** checkbox
2. You should see:

```
DEBUG|Email Sent Successfully
```

---

## Step 5: Verify Email

1. Open your Gmail inbox
2. Check **Spam folder** too
3. You should receive the test email from Salesforce
