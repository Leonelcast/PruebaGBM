const assert = require('assert');
const calculateJumps = require('./problema.js');

it('debe devolver 10 cuando la posición de destino es 55', () => {
  const destination = 55;
  const jumps = calculateJumps(destination);
  assert.strictEqual(jumps, 10);
});
