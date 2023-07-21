const assert = require('assert');
const calculateJumps = require('./problema.js');

it('debe devolver 12 cuando la posición de destino es 78', () => {
  const destination = 78;
  const jumps = calculateJumps(destination);
  assert.strictEqual(jumps, 12);
});
