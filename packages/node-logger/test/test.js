// eslint-disable node/no-unpublished-require
// eslint-disable no-undef
const { safeStringify } = require('../dist/index')

describe('safeStringify', () => {
  it('dont fail with recursive', async () => {
    const recursive = {}

    recursive.recursive = recursive
    expect(safeStringify(recursive)).toEqual('cant stringify')
  })
})
