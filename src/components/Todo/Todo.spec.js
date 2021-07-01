const { onClickDelete } = require('./Todo')

test(' should not return null', () => {
    expect(onClickDelete()).not.toBe(null)
})
