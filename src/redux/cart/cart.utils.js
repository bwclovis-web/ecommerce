export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log('%c [cartItems]', 'color:purple',cartItems)
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}