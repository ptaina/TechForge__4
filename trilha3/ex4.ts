class Animal {
    public energia: number = 0;

    comer(): void {
        this.energia += 10;
        console.log("Comendo, energia foi aumentada");
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("Caçando");
        this.energia -= 5;
        super.comer();
    }
}

class Passaro extends Animal {
}

const leao = new Leao();
leao.comer();
leao.statusEnergia();

const passaro = new Passaro();
passaro.comer();
passaro.statusEnergia();