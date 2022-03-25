export const addToCart=(coffee, quantity, size)=>(dispatch, getState)=>{

    let cartItem= {
        name : coffee.name,
        _id : coffee._id,
        image : coffee.image,
        size : size,
        quantity : Number(quantity),
        prices : coffee.prices,
        price : coffee.prices[0][size]* quantity

    }

    if(cartItem.quantity>10)
    {
        alert('You cannot add more than 10 items')
    }
    else{
        if(cartItem.quantity <0)
        {
            dispatch({type: 'DELETE_FROM_CART', payload:coffee})
        }
        else{
            dispatch({type:'ADD_TO_CART', payload : cartItem})
        }

       
    }


  

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))



}

export const deleteFromCart=(coffee)=>(dispatch, getState)=>{


    dispatch({type: 'DELETE_FROM_CART', payload:coffee})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))




}