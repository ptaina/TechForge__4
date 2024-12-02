class EmailNotification {
    sendEmail(userName: string): void {
        console.log(`Enviando e-mail para ${userName}: "Bem-vindo ao sistema!"`);
    }
}

class UserManager {
    private users: string[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(userName: string): void {
        this.users.push(userName);
        console.log(`Usuário ${userName} criado.`);
        
        this.emailNotification.sendEmail(userName);
    }

    getUsers(): string[] {
        return this.users;
    }
}

const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser("João");
userManager.createUser("Maria");

console.log(userManager.getUsers());