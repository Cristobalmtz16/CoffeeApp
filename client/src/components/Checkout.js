import React from 'react'
import { useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'


export default function Checkout({subtotal}) {


     const dispatch = useDispatch
    function tokenHandler(token)
    {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return(
        <div>

           <StripeCheckout
           amount={subtotal *100}
           billingAddress
           token={tokenHandler}
           stripeKey='pk_test_51KeNO4FDQA1L4nD1cD4q4hRrBinxaugsIYhOwpdLUZSv874MAJuWpkCDynoMkgufQCprZoEp1xGtnQwJAMzKxaMR00Bf2TUM43'
           currency='USD'
           
           
           >

               <button className='btn'> Pay Now </button>

           </StripeCheckout>

        </div>
    )
}