const assert = require('assert');
const calculateJumps = require('./problema.js');

it('debe devolver 0 cuando la posición de destino es 0', () => {
  const destination = 0;
  const jumps = calculateJumps(destination);
  assert.strictEqual(jumps, 0);
});
