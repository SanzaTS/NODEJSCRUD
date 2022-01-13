const  mongoose = require('mongoose')


const UserSchema = new  mongoose.Schema({

    username:{
        type:String,
    },
    eamil:{
        type:String,
    },
    password:{
        type: String,
    }

});

// encrypt the password before storing


module.exports = mongoose.model('User',UserSchema)