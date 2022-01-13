const mongoose = require('mongoose')

/*c/*onst {
   ObjectId
} = mongoose.Schema;*/

const productSchema = new mongoose.Schema({
    productCode: {
        type: String,
       
        unique: true,
      },
      title: {
        type: String,
        
      },
      imagePath: {
        type: String,
        
      },
      description: {
        type: String,
       
      },
      price: {
        type: Number,
       
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
      manufacturer: {
        type: String,
      },
      available: {
        type: Boolean,
       
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Product", productSchema)