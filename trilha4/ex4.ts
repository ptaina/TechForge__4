interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  
  class Biblioteca {
    livros: Livro[] = []; 
  
    adicionarLivro(livro: Livro) {
      this.livros.push(livro);
    }
  
    buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.disponivel);  // Retorna apenas os livros com disponivel = true
    }
  }
  
  const biblioteca = new Biblioteca();
  
  biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
  biblioteca.adicionarLivro({ titulo: "Psicose", autor: "Robert Bloch", disponivel: true });
  
  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  
  livrosDisponiveis.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
  });
  