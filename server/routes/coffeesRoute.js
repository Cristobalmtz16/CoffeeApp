const express = require("express");
const router = express.Router();
const Coffee = require('../models/coffeeModel')

router.get("/getallcoffees", async(req,res) => {

    try {
        const coffees = await Coffee.find({})
        res.send(coffees)

    } catch (error) {
        return res.status(400).json({message: error})

    }
    

})

router.post("/addcoffee", async(req, res) => {

    const coffee = req.body.coffee

   try {
    const newcoffee = new Coffee({
        name : coffee.name,
        image :coffee.image,
        size : ['small','medium','large'],
        description : coffee.description,
        category : coffee.category,
        prices : [coffee.prices]
    })
    await newcoffee.save()
    res.send('New Coffee Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.post("/editcoffee", async(req, res) => {

    const editedcoffee = req.body.editedcoffee

    try {
        const coffee = await Coffee.findOne({_id : editedcoffee._id})
        
        coffee.name= editedcoffee.name,
        coffee.description= editedcoffee.description,
        coffee.image= editedcoffee.image,
        coffee.category=editedcoffee.category,
        coffee.prices = [editedcoffee.prices]

        await coffee.save()

        res.send('Coffee Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletecoffee", async(req, res) => {

    const coffeeid = req.body.coffeeid

  try {
    await Coffee.findOneAndDelete({_id : coffeeid})
    res.send('Coffee Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});

module.exports = router;