const isIterable = require('../src/definition.js');
const assert = require('chai').assert;

describe("isIterable()",() => {
  it("Returns expected boolean values",() => {
    assert(isIterable([]));
    assert(!isIterable({}));
  });
});

