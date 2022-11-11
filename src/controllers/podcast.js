const mongoose =require("mongoose")

const userSchema= new mongoose.Schema({
    podcast_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    file:{
        type:String,
        default:""
    }
},
{timestamps:true}
) 


module.exports=mongoose.model("podcast",PodSchema)