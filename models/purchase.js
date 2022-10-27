const mongoose=require("mongoose")


const purchase= new mongoose.Schema(
{
    // userId:{type:mongoose.Types.ObjectId,refs:"user"} ,
    date:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    phoneNumber:{type:String},
},
{   
    timestamps:true
}
)
const model=mongoose.model("purchases",purchase)
module.exports=model