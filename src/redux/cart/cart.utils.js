export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const thisCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(thisCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== thisCartItem.id)
    }

    return cartItems.map(item => 
        item.id === thisCartItem.id ? {...item, quantity: item.quantity - 1} : item
    )
}