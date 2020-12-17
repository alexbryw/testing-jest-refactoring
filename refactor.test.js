const {
    findItemInCart,
    newFindItemInCart,
    calcTotalCartPrice,
    newCalcTotalCartPrice,
    removeItemFromCart,
    newRemoveItemFromCart,
    cartList,
} = require('./refactor')

test('Original Find array index of item whit existing input id', () => {
    expect(findItemInCart(1)).toBe(0)
})

test('Original Find array index of item whit non-existent input id', () => {
    expect(findItemInCart(9)).toBe(false)
})

test('New find array index of item whit existing input id', () => {
    expect(newFindItemInCart(1)).toBe(0)
})

test('New find array index of item whit non-existent input id', () => {
    expect(newFindItemInCart(9)).toBe(false)
})

test('Original calc whit correct expected value', () => {
    expect(calcTotalCartPrice(cartList)).toBe(9)
})

test('New calc whit correct expected value', () => {
    expect(newCalcTotalCartPrice(cartList)).toBe(9)
})

test('Original remove item and expect returned array to be shorter', () => {
    expect(removeItemFromCart(1)).toHaveLength(cartList.length-1)
})

test('Original remove item whit wrong input, expect null', () => {
    expect(removeItemFromCart(9)).toBe(undefined)
})

test('New remove item and expect returned array to be shorter', () => {
    expect(newRemoveItemFromCart(1)).toHaveLength(cartList.length-1)
})

test('New remove item whit wrong input, expect null', () => {
    expect(newRemoveItemFromCart(9)).toBe(undefined)
})