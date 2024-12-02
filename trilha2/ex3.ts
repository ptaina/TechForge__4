class Produto { 
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public valorTotalEmEstoque() {
        let valorTotal = this.preco * this.quantidade;
        console.log(`O valor total em estoque é de: RS${valorTotal}`);
    }
}

const produto1 = new Produto('estojo', 12.99, 20);
produto1.valorTotalEmEstoque();