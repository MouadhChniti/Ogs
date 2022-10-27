const mongoose=require("mongoose")


const product= new mongoose.Schema(
{
    description:{type:String},
    Price:{type:String},
    Size:{type:String},
},
{   
    timestamps:true
}
)
const model=mongoose.model("products",product)
module.exports=model