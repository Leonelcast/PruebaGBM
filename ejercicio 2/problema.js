const fs = require('fs');

function calculateChampion(data) {
    // Se debe de dividir el texto en lineas para obtener de manera correcta el input
    let lines = data.split('\n');
    let index = 0;

    // Ete while se debera de recorrer hasta que se encuentre la linea 0 0 en el archivo input, al encontrar 0 0 se detiene el recorrido
    while (true) {
        // Cantidad de Grand Prix y pilotos.
        let GPData = lines[index].split(' ');
        let grandPrix = parseInt(GPData[0]); 
        let pilots = parseInt(GPData[1]); 
        // Si encuentra 0 0 se sale del bucle
        if (grandPrix === 0 && pilots === 0) break;

        index++; // Continuamos a la siguiente linea

        // Se almacenan los resultados
        let results = [];
        for (let i = 0; i < grandPrix; i++) {
            let raceResult = lines[index].split(' ').map(num => parseInt(num));
            results.push(raceResult);
            index++;
        }
        console.log(results.join(' '));
    }
}


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    calculateChampion(data);
});
