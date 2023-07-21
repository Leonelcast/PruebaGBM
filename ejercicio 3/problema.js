const readline = require('readline');
//Interfaz de lectura
const inputs = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCaseCount = 0;
let testCases = [];

inputs.question('Ingrese el número de casos de prueba: ', (t) => {
  //Convierte el input a un numero entero y se guarda en testCaseCount
  testCaseCount = parseInt(t);
  //Se obtienen los casos de prueba
  processTestCases(testCaseCount);
});

function processTestCases(testCases) {
  if (testCases <= 0) {
    console.log("Finalizando las pruebas...");
    inputs.close();
    return;
  }

  inputs.question('Ingrese el punto de destino para el caso actual: ', (x) => {
    //Convierte el input a un numero entero y se guarda en destination
    const destination = parseInt(x);
    //se calcula el numero minimo de saltos
    const jumps = calculateJumps(destination);
    console.log('El número mínimo de saltos para el caso actual es: ' + jumps);
    console.log('--------------------------');
    //procesa el sigueinte caso de prueba
    processTestCases(testCases - 1);
  });
}

function calculateJumps(destination) {
    let jumps = 0;
    let position = 0;
  // Mientras la posición actual sea menor que el destino, realiza un salto y actualiza la posicion.
    while (position < destination) {
      jumps++;
      position += jumps;
    }
  
    return jumps;
}

module.exports = calculateJumps;
