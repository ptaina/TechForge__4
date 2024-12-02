class Temperatura { 
    private valorCelsius: number;

    constructor(valorCelsius: number) {
        this.valorCelsius = valorCelsius;
    }

    converterFahrenheit() {
        let valorFahrenheit = (this.valorCelsius * 9/5) + 32;
        console.log(`A temperatura em Fahrenheit é: ${valorFahrenheit}`);
    }

    converterKelvin() {
        let valorKelvin = this.valorCelsius + 273.15
        console.log(`A temperatura em Kelvin é: ${valorKelvin}`);
    }
}

const temperatura1 = new Temperatura(20);
temperatura1.converterFahrenheit();
temperatura1.converterKelvin();