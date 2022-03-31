const express = require("express");
const router = express.Router();
const { v4 : uuidv4 } = require('uuid')
const stripe = require("stripe")("sk_test_51KeNO4FDQA1L4nD1qYftghuo3zFwNzkj1R6g9phw184tuVzSIHK42KGX5lcXMzfIUJIaNumm1tE10Td1zHeTauqm00IKK7kQNC")
const Order = require('../models/orderModel')
const { application } = require("express");

router.post("/placeorder", async (req, res) =>{
   




    const {token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })

        const payment = await stripe.charges.create({
            amount: subtotal *100,
            currency: 'USD',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) 
        {
          
            const neworder = new Order({

               name:currentUser.name,
               email:currentUser.email,
               userid:currentUser.id,
               orderItems:cartItems,
               orderAmount:subtotal,        
               transactionId:payment.source.id      
            })

            neworder.save()

            res.send('Order Placed Successfully')
        } 
        else {
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({message: 'Something Went Wrong' + error})
    }

})


module.exports = router