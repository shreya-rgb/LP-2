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