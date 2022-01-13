const express =require('express')
const router = express.Router()

const Order = require('../models/order')
const Cart = require('../models/cart')


router.post('/', async(req,res) => {

try {
    
    const userId = req.body.user; 
    const id = "61dadfeb0352e2a0ec03ed15";
        const cart = await Cart.findById(id);
    
        //const cart = await Cart.find({ user: userId });
      
       // console.log(cart.items)

       const qty = cart.totalQty
      

        //res.json(qty);
     
         const order = new Order({
              user: userId,
              cart: {
                totalQty: cart.totalQty,
                totalCost: cart.totalCost,
                items: cart.items,
              },
              address: req.body.address,
              paymentId: req.body.paymentId,
            });
            order.save(async (err, newOrder) => {
              if (err) {
                console.log(err);
                res.send(err)
               // return res.redirect("/checkout");
              }
             // await cart.save();
            //  await Cart.findByIdAndDelete(cart._id);
            //  req.flash("success", "Successfully purchased");
              res.json(order)
           //   req.session.cart = null;
             // res.redirect("/user/profile");
            });
} catch (error) {
    res.send('Error :' + error)
}

      
    
  });


  module.exports = router