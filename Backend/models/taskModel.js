const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    text:{
        type:String,
        required:[true, "please add a text value"]
    }
    },
    {
    timestamp:true,
    }
)
module.exports = mongoose.model("task", taskSchema);