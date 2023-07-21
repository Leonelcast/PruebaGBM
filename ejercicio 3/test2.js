const assert = require('assert');
const calculateJumps = require('./problema.js');

it('debe devolver 1 cuando la posición de destino es 1', () => {
  const destination = 1;
  const jumps = calculateJumps(destination);
  assert.strictEqual(jumps, 1);
});
