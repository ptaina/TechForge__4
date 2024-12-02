
abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getSalario(): number {
      return this.salario;
    }
  
    abstract calcularBonus(): number;
  }
  
  class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
    calcularBonus(): number {
      return this.getSalario() * 0.10; 
    }
  }
  
  class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
    calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  function calcularSalarioComBonus(funcionarios: Funcionario[]): number {
    let salarioTotal = 0;
  
    funcionarios.forEach(funcionario => {
      const bonus = funcionario.calcularBonus();
      salarioTotal += funcionario.getSalario() + bonus;
    });
  
    return salarioTotal;
  }
  
  const gerente = new Gerente("Alana", 5000);
  const operario = new Operario("Maria", 2000);
  
  const funcionarios: Funcionario[] = [gerente, operario];
  const salarioComBonus = calcularSalarioComBonus(funcionarios);
  
  console.log("Salário total com bônus: R$", salarioComBonus);
  
