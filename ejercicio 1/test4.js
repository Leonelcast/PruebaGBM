const assert = require('chai').assert;
const problemPalindrom = require('./problema.js');

describe('Prueba 4 - Palíndromos', function() {
  it('debe retornar true debido a que es un palindromo', function() {
    assert.isTrue(problemPalindrom('radar'));
  });
});

  
  