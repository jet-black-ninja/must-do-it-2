const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "please add a name value"]
    },
    email:{
        type:String,
        required:[true, "please add a email value"],
        unique: true
    },
    password:{
        type:String,
        required:[true, "please add a password "]
    },
},{
    timestamps:true,
})
module.exports =mongoose.model("user",userSchema);