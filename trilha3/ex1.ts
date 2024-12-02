class Veiculo {
    public mover() {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    public mover() {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    public mover() {
        console.log("A bicicleta está pedalando");
    }
}

const carro = new Carro();
carro.mover();

const bicicleta = new Bicicleta();
bicicleta.mover();