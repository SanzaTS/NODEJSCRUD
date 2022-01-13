const express =require('express')
const router = express.Router()

const Cart = require('../models/cart')
const Product = require('../models/Product')


router.post('/', async(req,res) => {


  
    try {
        const productID = req.body.productId;

        const product = await Product.findById(productID);
      
    
        const productId= productID;
        const qty  = req.body.qty;
        const price = product.price;
        const  title = product.title;
        const productCode = product.productCode;
        const imagePath = product.imagePath;

        
      
        const Cost = product.price *  product.qty;
        const userId = req.body.user; 
        console.log(userId)
      let cart = await Cart.findOne({ userId });
  
      if (cart) {
        //cart exists for user
        let itemIndex = cart.items.findIndex(p => p.productId == productId);
  
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let items = cart.items[itemIndex];
          items.qty = qty;
          cart.items[itemIndex] = items;
        } else {
          //product does not exists in cart, add new item
          cart.items.push({ productId, qty, price, title,productCode,imagePath });
        }
        cart = await cart.save();

        return res.status(201).send(cart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          
          items: [{productId, qty, price, title,productCode,imagePath}],
          totalQty: qty,
          totalCost: price,
          user: userId,




        });
  
        return res.status(201).send(newCart);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  });

  
router.get('/' , async(req,res) => {
  // res.send('get request')

   try {

     const user =  req.body.user
      //const cart = await Cart.find( {user: user} )
      const cart = await Cart.find({},{ user: 1, _id: 0 }).sort({ createdAt: 1 }).limit(1);
      //findOne({}).sort({ createdAt: -1 }).exec(callback);

    //  models.user.findOne({}, null, { sort: { date_register: -1 } }, callback);

      res.json(cart)
       
   } catch (error) {
       res.send('Error ' + error) 
   }

})

router.get('/:id' , async(req,res) => {
  // res.send('get request')

   try {

      const cart = await Cart.findById(req.params.id)

      res.json(cart)
       
   } catch (error) {
       res.send('Error ' + error)
   }   

})

/*router.post('/', async(req,res) => {

    const productId = req.body.productId;

    const product = await Product.findById(productId);

  /*  let cart;
    try {
    cart.items.push({
        productId: productId,
        qty: 2,
        price: product.price,
        title: product.title,
        productCode: product.productCode,
      });

      cart.totalQty++;
      cart.totalCost += product.price;



      cart.user = req.body.user;
      
    res.json(cart)

    }catch(error){
        res.send('Error ' + error)
    }*/
   //   const carts = new Cart(cart);
   


   // try {
     //   const a1 = await cart.save()
    /*let totalQty = totalQty + totalQty;//
     let totalCost = product.price +  product.price;
     
  
      const cart = new Cart({
          $push: {
              items: {
                  productId: productId,
                  qty: 2,
                  price: product.price,
                  title: product.title,
                  productCode: product.productCode,
  
              }
           }
           ,totalQty: items.qty,
           totalCost : totalCost,
           user : req.body.user
  
      })

        res.json(cart)
        
    } catch (error) {
        res.send('Error ' + error)
    }
    

});*/


module.exports = router