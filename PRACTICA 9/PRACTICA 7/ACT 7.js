
const matriz = [
    [0, 2, 5, 7, 6],
    [0, 0, 0, 3, 8],
    [2, 9, 6, 3, 4],
    [1, 5, 6, 1, 4],
    [0, 9, 2, 5, 0]
  ];
  

  function contarCerosEnFila(fila) 
  {
    let contador = 0;
    for (let i = 0; i < fila.length; i++) {
      if (fila[i] === 0) {
        contador++;
      }
    }
    return contador;
  }
  

  for (let i = 0; i < matriz.length; i++) 
  {
    const fila = matriz[i];
    const cantidadDeCeros = contarCerosEnFila(fila);
    console.log(`Fila ${i + 1}: ${cantidadDeCeros} ceros`);
  }