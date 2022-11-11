const path =require("path")
const multer =require("multer")

var storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,'uploads/')
    },
    filename:function(req,file,cd){
        let ext =path.extname(file.originalname)
        cd(null,Date.now()+ext)
    }
})

var upload =multer({
    storage:storage,
    filename:function(req,file,callback){
        if (
            file.mimetype =="mp3"
        ){callback(null,true)}
            else{
                console.log("only mp3 file")
                callback(null,false)
            }
    },
    limits:{
        fileSize:1024*1024*9
    }
})
module.exports=upload