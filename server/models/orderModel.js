const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {type:String, require},
    email: {type:String, require},
    userid: {type:String, require},
    orderItems: [],
    orderAmoutnt:{type:Number, require},
    pickedUp: {type:Boolean, require, default:false},
    transactionId:{type:String, require}
}, {
    timestamps: true
})

module.exports = mongoose.model('orders', orderSchema)