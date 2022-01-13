const mongoose = require('mongoose');
const slung = require("mongoose-slug-updater")

//mongoose.plugin(slung);

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
       
      },
  /*    slug: {
        type: String,
        unique: false,
        slug: "title",
      },*/
});

module.exports  = mongoose.model('Category', CategorySchema)