abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    public calcularArea(): number {
        let area = Math.PI * Math.pow(this.raio, 2);
        return area
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado
    }

    public calcularArea(): number {
        let area = Math.pow(this.lado, 2);
        return area
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura
    }

    public calcularArea(): number {
        let area = (this.base * this.altura) / 2;
        return area
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(3, 6);

const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];
imprimirAreas(figuras)