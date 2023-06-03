import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type: String,required:true},
    email:{type:String, required:true},
    role:{type:String,default:'citizen'},
    password:{type:String,required:true}
})

export default mongoose.model('User',userSchema);
