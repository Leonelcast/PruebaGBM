module.exports = problemPalindrom;

function problemPalindrom(text) {
    //Se pasa el texto recibido a minusculas
    text = text.toLowerCase();
    //Se llega a obtener la longitud del texto
    let countText = text.length;
    //se realiza una busqueda hasta la mitad de la cadena por lo que se divide por /2
    for (let i = 0; i < countText / 2; i++) {
        //se hace una comparacion de los textos que son iguales en la cadena
        if (text[i] !== text[countText - 1 - i]) {
            //si no son iguales retorna falso.
            return false;
        }
    }
    //si se cumple es verdadero
    return true;
}

console.log(problemPalindrom('radar'));
console.log(problemPalindrom('hola')); 