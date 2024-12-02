class Pagamento {
    processar(): void {
        console.log("Pagamento processado");
    }
}

class PagamentoCartao extends Pagamento {
    processar(): void {
        console.log("Cartão validado e pagamento processado");
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        console.log("Código de boleto gerado");
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}

const pagamentos: Pagamento[] = [
    new PagamentoCartao(),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);