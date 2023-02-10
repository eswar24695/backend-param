const router = require("express").Router();
const Registerevent = require("../models/models");
const Counter=require("../models/count")
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.post("/register/:event1", async (req, res) => {
    console.log(req.body)
    console.log("hitting");
    try {
        const data = await Registerevent.insertMany({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            contactno: req.body.contactno,
            eventname:req.params.event1,
            regNo: `${Date.now()}${Math.random().toString(36).slice(2)}`,
            attend:"false"   
        });
        const findeventname=await Counter.find({eventname:req.params.event1})
        if(!findeventname.length){
            console.log("not equal")
            const createevent=await Counter.create({
                eventname:req.params.event1,
            })
            console.log(createevent);
        }else{
            const updatecount=await Counter.findOneAndUpdate({_id:findeventname[0]._id},{count:parseInt(findeventname[0].count)+1})
        }
        return res.json({
            success: true,
            result: data,
        });
    }
    catch (e) {
        return res.json({
            err: e.message
        });
    }
});
// router.get("/attend/:regno", async (req, res) => {
//     // console.log(req.body,req.file)
//     try {
//         const data = await Registerevent.find({email:req.body.email});
//         if(data[0].eventname===req.params.eventname){
//             const update=await Registerevent.findOneAndUpdate({_id:data[0]._id},{attend:true})
//             return res.json({
//                 success: true,
//                 result:update
//             });

//         }else{
//             console.log("not found")
//             return res.json({
//                 success: false
//             });
            
//         }
        
//     }
//     catch (e) {
//         return res.json({
//             err: e.message
//         });
//     }
// });
router.post("/attend/:regno",async(req,res)=>{
    try{
        const update=await Registerevent.findOneAndUpdate({regNo:req.params.regno},{attend:true})
        return res.json({
            success: true,
            result:update
        });
    } 
    catch(e){
        return res.json({
            err: e.message
        });
    }
})
module.exports = router