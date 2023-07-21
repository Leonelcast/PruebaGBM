const assert = require('chai').assert;
const problemPalindrom = require('./problema.js');

describe('Prueba 3 - Ignorar Mayusculas', function() {
  it('debe de ignorar mayúsculas', function() {
    assert.isTrue(problemPalindrom('RaDaR'));
  });
});

  