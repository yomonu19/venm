const assert = require('power-assert')

describe('venm', () => {
  it('is a function', () => {
    const venm = require('../index')
    assert(typeof venm === 'function')
  })
})
