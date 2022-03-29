const express = require("express");
const router = express.Router();
const { v4 : uuidv4 } = require('uuid')
const stripe = require("stripe")("")

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
            IdempotencyKey: uuidv4()
        })

        if (payment) 
        {
            res.send('Payment Done')
        } 
        else {
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({message: 'Something Went Wrong' + error})
    }

})


module.exports = router