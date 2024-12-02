interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    produtos: ProdutoLoja[] = []; 
  
    adicionarProduto(produto: ProdutoLoja) {
      this.produtos.push(produto);
    }
  
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find(produto => produto.codigo === codigo);
    }
  }
  
  const loja = new Loja();
  
  loja.adicionarProduto({ codigo: 1, nome: "Camiseta" });
  loja.adicionarProduto({ codigo: 2, nome: "Tênis" });
  loja.adicionarProduto({ codigo: 3, nome: "Calça" });
  
  const produto = loja.buscarProdutoPorCodigo(2);
  if (produto) {
    console.log(`Produto encontrado: ${produto.nome}`);
  } else {
    console.log("Produto não encontrado.");
  }
  