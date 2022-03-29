const express = require("express");

const db = require("./db")
const Coffee = require("./models/coffeeModel")

const app = express();

app.use(express.json());
const coffeesRoute = require('./routes/coffeesRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/coffees/', coffeesRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/', ordersRoute)





app.get("/", (req, res) => {
    res.send("SERVER IS WORKING" + port);
});




const port = process.env.PORT || 8000;

app.listen(port, () => 'Server is running on port port');