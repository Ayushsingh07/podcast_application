const mongoose =require("mongoose")

const PodSchema= new mongoose.Schema({
    podcast_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    podfile:{
        data:Buffer,
        type:String,
        default:""
    }
},
{timestamps:true}
) 


module.exports=mongoose.model("podcast",PodSchema)