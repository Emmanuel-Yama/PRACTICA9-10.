class Matriz {
    constructor(numeroMatriz) {
        this.numeroMatriz = numeroMatriz;
        this.matriz = this.crearMatriz();
    }

    crearMatriz() {
        console.log(`Ingresa los valores de la matriz ${this.numeroMatriz}`);
        const matriz = [];
        for(let i = 0; i < 2; i++) {
            matriz[i] = [];
            for(let x = 0;  x < 2; x++) {
                const valor = parseFloat(prompt(`Ingrese el valor de la posición ${i + 1}, ${x + 1}`));
                matriz[i][x] = valor;
            }
        }
        return matriz;
    }

    sumarMatriz(otraMatriz) {
        const resultado = [];
        for(let i = 0; i < 2; i++) {
            resultado[i] = []; 
            for(let x = 0; x < 2; x++) {
                resultado[i][x] = this.matriz[i][x] + otraMatriz.matriz[i][x];
            }
        }
        return resultado;
    }

    restarMatrices(otraMatriz) {
        const resultado = [];
        for(let i = 0; i < 2; i++) {
            resultado[i] = [];
            for(let x = 0; x < 2; x++) {
                resultado[i][x] = this.matriz[i][x] - otraMatriz.matriz[i][x];
            }
        }
        return resultado;
    }

    multiplicarMatrices(otraMatriz) {
        const resultado = [];
        for( let i = 0; i < 2; i++) {
            resultado[i] = [];
            for(let x = 0; x < 2; x++) {
                resultado[i][x] = this.matriz[i][x] * otraMatriz.matriz[i][x];
            }
        }
        return resultado;
    }

    dividirMatrices(otraMatriz) {
        const resultado = [];
        for(let i = 0; i < 2; i++) {
            resultado[i] = [];
            for(let x = 0; x < 2; x++) {
                resultado[i][x] = this.matriz[i][x] / otraMatriz.matriz[i][x];
            }
        }
        return resultado;
    }
}

const matriz1 = new Matriz(1);
const matriz2 = new Matriz(2);

const suma = matriz1.sumarMatriz(matriz2);
const resta = matriz1.restarMatrices(matriz2);
const multiplicar = matriz1.multiplicarMatrices(matriz2);
const dividir = matriz1.dividirMatrices(matriz2);

console.log(matriz1);
console.log(matriz2);

document.getElementById("la suma es:");
console.table(suma);
console.log("La resta es:");
console.table(resta);
console.log("La multiplicacion es:");
console.table(multiplicar);
console.log("la division es:");
console.table(dividir);