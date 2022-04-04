const mongoose = require("mongoose");

let mongoURL = 'mongodb+srv://cgaunt:Football@coffee.z2gtm.mongodb.net/Coffee-Shop'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

let db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error', ()=>{
    console.log('Mongo DB Connection Failed')
})

module.exports = mongoose