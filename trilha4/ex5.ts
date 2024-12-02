interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    livros: LivroBiblioteca[] = [];  
  
    adicionarLivro(livro: LivroBiblioteca) {
      this.livros.push(livro);
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)  
        .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }
  }
  
  let bibliotecaGestao = new BibliotecaGestao();
  
  bibliotecaGestao.adicionarLivro({ titulo: "Drácula", autor: "Bram Stoker", genero: "Terror", disponivel: true });
  bibliotecaGestao.adicionarLivro({ titulo: "Frankenstein", autor: "Mary Shelley", genero: "Terror", disponivel: false });
  bibliotecaGestao.adicionarLivro({ titulo: "O Exorcista", autor: "William Peter Blatty", genero: "Terror", disponivel: true });
  bibliotecaGestao.adicionarLivro({ titulo: "A Assombração da Casa da Colina", autor: "Shirley Jackson", genero: "Terror", disponivel: true });
  bibliotecaGestao.adicionarLivro({ titulo: "It - A Coisa", autor: "Stephen King", genero: "Terror", disponivel: false });
  
  const livrosTerror = bibliotecaGestao.filtrarPorGenero("Terror");
  console.log("Livros de Terror:", livrosTerror);
  
  const livrosStephenKing = bibliotecaGestao.buscarPorAutor("Stephen King");
  console.log("Livros de Stephen King:", livrosStephenKing);
  
  const livrosDisponiveisOrdenados = bibliotecaGestao.obterLivrosDisponiveisOrdenados();
  console.log("Livros Disponíveis Ordenados:", livrosDisponiveisOrdenados);
  