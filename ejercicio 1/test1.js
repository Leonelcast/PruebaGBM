const assert = require('chai').assert;
const problemPalindrom = require('./problema.js');

describe('Prueba 1 - Palíndromos', function() {
  it('debe retornar true debido a que es un palíndromo', function() {
    assert.isTrue(problemPalindrom('ana'));
  });
});

  