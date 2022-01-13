const express =require('express')
const router = express.Router()

const Product = require('../models/Product')

//post product
router.post('/', async(req,res) =>{

    const product = new Product({


        productCode:req.body.productCode ,
        title: req.body.title,
        imagePath: req.body.imagePath,
        description: req.body.description,
        price: req.body.price,
        category:req.body.category,
        manufacturer: req.body.manufacturer,
        available: req.body.available,
        
    })

    try {
      const a1 =  await product.save()
        res.json(a1)
    } catch (error) {
        res.send('Error ' + error)
    }

})

// get all products
router.get('/' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const product = await Product.find()
  
        res.json(product)
         
     } catch (error) {
         res.send('Error ' + error)
     }
  
  })

  router.get('/:id' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const product = await Product.findById(req.params.id)
  
        res.json(product)
         
     } catch (error) {
         res.send('Error ' + error)
     }   
  
  })


  

module.exports = router