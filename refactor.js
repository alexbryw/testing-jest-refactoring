const cartList = [
    {id:1, nrItems:1, product:{name:"ProductName1", id:1 , price:2, description:"",imgURL:""}},
    {id:2, nrItems:1, product:{name:"ProductName2", id:2 , price:3, description:"",imgURL:""}},
    {id:3, nrItems:1, product:{name:"ProductName3", id:3 , price:4, description:"",imgURL:""}}
]

// Original findItem by id before refactoring using a for loop.
const findItemInCart = (InItemId) => {
    let itemFound = false
    let cartListPosition = 0
    for (let i = 0; i < cartList.length; i++) {
        const item = cartList[i];
        if(item.id === InItemId){
            itemFound = true
            cartListPosition = i
        }
    }

    if(itemFound){
        return cartListPosition
    } else {
        return false
    }
}

// New findItem after refactoring using standard "findIndex" function.
const newFindItem = (inItemId) => {
    const itemFound = cartList.findIndex(item => item.id === inItemId)
    if (itemFound !== -1) {
        return itemFound
    } else {
        return false
    }
}

// Original calcTotal calculating cart price whit a for loop.
const calcTotalCartPrice = (cartList) => {
    let TotalPrice = 0
    for (const item of cartList) {
        TotalPrice += item.nrItems * item.product.price
    }
    return TotalPrice
}

// New calcTotal using "reduce" function to accumulate total cart price.
const newCalcTotalCartPrice = (cartList) => {
    return cartList.reduce((total, item) => total + (item.nrItems * item.product.price), 0)
}

// Original removeItem and return copied updatedList
const removeItemFromCart = (InItemId) => {
    const cartListPosition = findItemInCart(InItemId)
    let updatedCartList = [...cartList]
    if(cartListPosition !== false){
        updatedCartList.splice(cartListPosition,1)
        return updatedCartList
    }
}

// New removeItem and return copied updated list using "filter" function.
const newRemoveItemFromCart = (inItemId) => {
    if(findItemInCart(inItemId) !== false) {
        return cartList.filter(item => item.id !== inItemId)
    }
}


console.log(findItemInCart(1))
console.log(newFindItem(1))

console.log("next ---")

console.log(calcTotalCartPrice(cartList))
console.log(newCalcTotalCartPrice(cartList))

console.log(removeItemFromCart(1))
console.log("next ---")
console.log(newRemoveItemFromCart(1))
