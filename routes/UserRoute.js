const express =require('express')
const router = express.Router()


const User = require('../models/User')

//post product
router.post('/', async(req,res) =>{

    const user = new User({
       
        username: req.body.username,
        eamil: req.body.eamil,
        password: req.body.password,


        
    })

    try {
      const a1 =  await user.save()
        res.json(a1)
    } catch (error) {
        res.send('Error ' + error)
    }

})

router.get('/' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const user = await User.find()
  
        res.json(user)
         
     } catch (error) {
         res.send('Error ' + error) 
     }
  
  })

  router.get('/:id' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const user = await User.findById(req.params.id)
  
        res.json(user)
         
     } catch (error) {
         res.send('Error ' + error)
     }
  
  })


module.exports = router