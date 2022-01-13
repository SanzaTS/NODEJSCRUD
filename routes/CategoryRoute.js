const express =require('express')
const router = express.Router()

const Category = require('../models/Category')

router.post('/', async(req,res) => {

    const category = new Category({
        title: req.body.title,
    })

    try {
        const a1 = await category.save()

        res.json(a1)
        
    } catch (error) {
        res.send('Error ' + error)
    }
    

});

router.get('/' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const category = await Category.find()
  
        res.json(category)
         
     } catch (error) {
         res.send('Error ' + error) 
     }
  
  })

module.exports = router

