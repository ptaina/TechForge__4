
interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;
  
    constructor(id: number, nome: string, preco: number) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  const produto1 = new ItemLoja(1, "Camiseta", 799.99);
  const produto2 = new ItemLoja(2, "Tênis", 10.90);
  
  console.log(produto1);
  console.log(produto2);
  
