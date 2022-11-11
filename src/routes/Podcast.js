const router =require("express").Router()
const Podcast=require("../controllers/podcast")
const upload=require("../pod/uploads")

router.post("/podcast", async (res,req)=>{
    try{
       
        const newpod=new Podcast({
            podcast_name: req.body.podcast_name,
            email: req.body.email,
            file:req.body.file
        })
        

        const user = await newpod.save()
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})





module.exports=router
