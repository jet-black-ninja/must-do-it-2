const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    text:{
        type:String,
        required:[true, "please add a text value"]
    },
    },
    {
    timestamps:true,
    }
)
module.exports = mongoose.model("task", taskSchema);