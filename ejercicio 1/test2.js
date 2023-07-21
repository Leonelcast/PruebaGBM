const assert = require('chai').assert;
const problemPalindrom = require('./problema.js');

describe('Prueba 2 - No Palíndromos', function() {
  it('debe retornar false debido a que no es un palíndromo', function() {
    assert.isFalse(problemPalindrom('hola'));
  });
});
