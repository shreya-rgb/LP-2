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
