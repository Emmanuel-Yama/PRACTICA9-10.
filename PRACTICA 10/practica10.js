class EliminacionGaussiana {
    constructor(matriz) {
        this.matriz = matriz;
        this.filas = matriz.length;
        this.columnas = matriz[0].length;
    }

    imprimirMatriz() {
        return this.matriz.map(row => row.join(' ')).join('\n');
    }

    gauss() {
        for (let i = 0; i < this.filas; i++) {
            let maxRow = i;
            for (let j = i + 1; j < this.filas; j++) {
                if (Math.abs(this.matriz[j][i]) > Math.abs(this.matriz[maxRow][i])) {
                    maxRow = j;
                }
            }

            [this.matriz[i], this.matriz[maxRow]] = [this.matriz[maxRow], this.matriz[i]];

            for (let j = i + 1; j < this.filas; j++) {
                const factor = this.matriz[j][i] / this.matriz[i][i];
                for (let k = i; k < this.columnas; k++) {
                    this.matriz[j][k] -= factor * this.matriz[i][k];
                }
            }
        }
        
        for (let i = this.filas - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--) {
                const factor = this.matriz[j][i] / this.matriz[i][i];
                for (let k = i; k < this.columnas; k++) {
                    this.matriz[j][k] -= factor * this.matriz[i][k];
                }
            }
        }
        
        for (let i = 0; i < this.filas; i++) {
            const divisor = this.matriz[i][i];
            for (let j = i; j < this.columnas; j++) {
                this.matriz[i][j] /= divisor;
            }
        }
    }
}

document.getElementById('generarMatriz').addEventListener('click', function () {
    const tamaño = parseInt(document.getElementById('tamañoMatriz').value);
    const matrizValores = document.getElementById('matrizValores');
    matrizValores.innerHTML = '';

    for (let i = 0; i < tamaño; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < tamaño; j++) {
            const celda = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '0';
            celda.appendChild(input);
            fila.appendChild(celda);
        }
        matrizValores.appendChild(fila);
    }

    document.getElementById('matrizInput').style.display = 'block';
});

document.getElementById('resolverGauss').addEventListener('click', function () {
    const tamaño = parseInt(document.getElementById('tamañoMatriz').value);
    const matriz = [];

    for (let i = 0; i < tamaño; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamaño; j++) {
            const input = document.querySelector(`#matrizValores tr:nth-child(${i + 1}) td:nth-child(${j + 1}) input`);
            matriz[i][j] = parseFloat(input.value) || 0;
        }
    }

    const gaussSolver = new EliminacionGaussiana(matriz);
    gaussSolver.gauss();
    document.getElementById('matrizResultado').textContent = gaussSolver.imprimirMatriz();
});
