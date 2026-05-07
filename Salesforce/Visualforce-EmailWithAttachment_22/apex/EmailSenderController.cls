public class EmailSenderController {
    
    // Properties to bind to the Visualforce page
    public String toAddress { get; set; }
    public String subject { get; set; }
    public String body { get; set; }

    public void sendEmail() {
        // Clear any previous messages
        ApexPages.getMessages().clear();

        // 1. Validate Email format
        if (String.isBlank(toAddress) || !Pattern.matches('^[a-zA-Z0-9._|\\\\%#~`=?&/$^*!}{+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$', toAddress)) {
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Invalid Email ID provided. Please enter a valid email address.'));
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
