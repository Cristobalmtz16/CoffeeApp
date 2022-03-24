const express = require("express");

const Coffee = require('./models/coffeeModel')

const app = express();
const db = require("./db.js")
app.use(express.json());
const path = require('path')
const coffeeRoute = require('./routes/coffeeRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')





app.use('/api/coffee/', coffeeRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}






const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`)