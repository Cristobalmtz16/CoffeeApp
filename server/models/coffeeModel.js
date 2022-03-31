const mongoose = require("mongoose");
const { stringify } = require("querystring");

const coffeeSchema = mongoose.Schema({

    name: {type: String, require},
    size: [],
    prices: [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require}

}, {
    timestamps: true,
})

const coffeeModel = mongoose.model('coffees', coffeeSchema)

module.exports = coffeeModel