function readMatrix() {
    const matrix = [];
    for (let i = 0; i < 2; i++) {
        matrix[i] = [];
        for (let j = 0; j < 2; j++) {
            const value = parseFloat(prompt(`Ingrese el valor en la posición (${i + 1}, ${j + 1}):`));
            if (isNaN(value)) {
                return null;
            }
            matrix[i][j] = value;
        }
    }
    return matrix;
}

function addMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < 2; i++) {
        result[i] = [];
        for (let j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

function subtractMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < 2; i++) {
        result[i] = [];
        for (let j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }
    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < 2; i++) {
        result[i] = [];
        for (let j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] * matrix2[i][j];
        }
    }
    return result;
}

function divideMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < 2; i++) {
        result[i] = [];
        for (let j = 0; j < 2; j++) {
            if (matrix2[i][j] === 0) {
                return null;
            }
            result[i][j] = matrix1[i][j] / matrix2[i][j];
        }
    }
    return result;
}

function printMatrix(matrix) {
    let output = "";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            output += `${matrix[i][j]}\t`;
        }
        output += "\n";
    }
    return output;
}

function calculate() {
    console.clear();
    console.log("Ingrese la primera matriz:");
    const matrix1 = readMatrix();

    if (matrix1) {
        console.log("Ingrese la segunda matriz:");
        const matrix2 = readMatrix();

        if (matrix2) {
            let output = "";
            output += "La suma es:\n";
            output += printMatrix(addMatrices(matrix1, matrix2));
            output += "\nLa resta es:\n";
            output += printMatrix(subtractMatrices(matrix1, matrix2));
            output += "\nEl producto es:\n";
            output += printMatrix(multiplyMatrices(matrix1, matrix2));
            output += "\nLa división es:\n";

            const divisionResult = divideMatrices(matrix1, matrix2);
            if (divisionResult) {
                output += printMatrix(divisionResult);
            } else {
                output += "No se puede dividir debido a la presencia de ceros en la segunda matriz.";
            }

            document.getElementById("output").textContent = output;
        }
    }
}
