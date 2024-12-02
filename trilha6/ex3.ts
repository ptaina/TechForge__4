class ContactValidator {
    isValidContact(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //validacao
        return emailPattern.test(email);
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(email: string, message: string): void {
        if (this.contactValidator.isValidContact(email)) {
            console.log(`Enviando e-mail para ${email}: ${message}`);
        } else {
            console.log(`O e-mail ${email} não é válido`);
        }
    }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

emailSender.sendEmail("user@gamil.com", "Olá, bem-vindo ao nosso serviço!");
emailSender.sendEmail("invalid-email", "Isso não vai ser enviado");