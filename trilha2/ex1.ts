class ContaBancaria {
    private titular: string;
    private saldo: number
    
    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositarDinheiro(saldo: number) {
        let saldoAtual = this.saldo = this.saldo + saldo
        console.log(`Olá, ${this.titular}! Foi realizado um depósito de: ${saldo}. Seu saldo atual é de: ${saldoAtual}`)
    }

    public sacarDinheiro(saldo: number) {
        let saldoAtual = this.saldo = this.saldo - saldo
        console.log(`Olá, ${this.titular}! Foi realizado um saque de: ${saldo}. Seu saldo atual é de: ${saldoAtual}`)
    }
}

const conta1 = new ContaBancaria('Taina', 5000);
conta1.depositarDinheiro(500);
conta1.sacarDinheiro(600);