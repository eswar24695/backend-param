const mongoose = require("mongoose");
const countSchema = new mongoose.Schema({
    eventname:{type:String,required: true},
    count:{type:Number,default:1}
}   
);

const Counter = mongoose.model("Count", countSchema);
module.exports=Counter;