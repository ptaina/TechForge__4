
interface Documento {
    titulo: string;
    conteudo: string;
  }
  
  class Texto implements Documento {
    titulo: string;
    conteudo: string;
  
    constructor(titulo: string, conteudo: string) {
      this.titulo = titulo;
      this.conteudo = conteudo;
    }
  
    exibir(): string {
      return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
  }
  
  const documento1 = new Texto("Título 1", "Conteúdo não sei o que não sei o que lá");
  const documento2 = new Texto("Título 2", "Segundo conteúdo de não sei o que não sei o que lá");
  
  console.log(documento1.exibir());
  console.log(documento2.exibir());
  