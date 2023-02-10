const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./routes/routes")
const bodyParser = require("body-parser");
const app=express();
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://eventmanagement:paramevent@cluster0.rgh7xmp.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to db")
})
app.listen(9500, () => console.log("App listening on port 9500"))