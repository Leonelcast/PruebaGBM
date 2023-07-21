const assert = require('assert');
const calculateJumps = require('./problema.js');

it('debe devolver 17 cuando la posición de destino es 153', () => {
  const destination = 153;
  const jumps = calculateJumps(destination);
  assert.strictEqual(jumps, 17);
});
