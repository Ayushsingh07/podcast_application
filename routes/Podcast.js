const podcast_=require('../controllers/podcast')
const router =require("express").Router()
const multer =require("multer")

const Storage=multer.diskStorage({
    destination:"podcasts",
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    },
  
  })
  
  var podcast = multer({
    storage:Storage
  }).single('podcast')
  
  
router.post('/podcastupload',(req,res)=>{
    podcast(req,res,(err)=>{
      if(err){
        console.log(err)
      }
      else{
        var newpod=new podcast_({
          podcast_name: req.body.podcast_name,
          email:req.body.email,
          podfile:{
            data:req.file.filename,
            contentType:'audio/mp3'
          }
  
  
          
        })
        newpod.save().then(()=>res.send("uploaded ")).catch(err=>console.log(err))
      }
    })
  })

module.exports=router