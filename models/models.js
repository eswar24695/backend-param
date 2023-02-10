const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    location:{type:String},
    contactno:{type:Number},
    regNo:{type:String},
    eventname:{type:String},
    attend:{type:String}
}   
);

const Registerevent = mongoose.model("Registerevent", registerSchema);
module.exports=Registerevent;