import mongoose from "mongoose";
const complaintSchema = mongoose.Schema({
    title:{type: String,required:true},
    discription:{type:String, required:true},
    category:{type:String,default:'hehe'},
    image:{type:String}
});


export default mongoose.model('Complaint', complaintSchema);