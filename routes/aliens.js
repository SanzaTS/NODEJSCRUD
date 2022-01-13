const express =require('express')
const router = express.Router()

const Alien = require('../models/alien')

router.get('/' , async(req,res) => {
  // res.send('get request')

   try {

      const alliens = await Alien.find()

      res.json(alliens)
       
   } catch (error) {
       res.send('Error ' + error)
   }

})

router.get('/:id' , async(req,res) => {
    // res.send('get request')
  
     try {
  
        const allien = await Alien.findById(req.params.id)
  
        res.json(allien)
         
     } catch (error) {
         res.send('Error ' + error)
     }   
  
  })


router.post('/', async(req,res) =>{

    const alien = new Alien({
       name: req.body.name,
       tech: req.body.tech,
       sub: req.body.sub
        
    })

    try {
      const a1 =  await alien.save()
        res.json(a1)
    } catch (error) {
        res.send('Error ' + error)
    }

})

router.patch('/:id', async (req,res) => {
    try {
        
          const alien =  await Alien.findById(req.params.id)
          alien.sub = req.body.sub;

          const a1 = await alien.save()  
          res.json(a1)


    } catch (error) {
        res.send('Error ' + error)
    }
})

router.put('/:id', async (req, res) => {
  /*  if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);*/

    var alien = {
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
        
    };
    Alien.findByIdAndUpdate(req.params.id, { $set: alien }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete("/:id", async(req,res) =>{

  /*  try {
        
        const alien =  await Alien.remove(req.params.id)
       // alien.sub = req.body.sub;

       // const a1 = await alien.save()
        res.json(alien)
		


  } catch (error) {
      res.send('Error ' + error)
  }*/
      Alien.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });

})

//delete  change findbyid remove
module.exports = router