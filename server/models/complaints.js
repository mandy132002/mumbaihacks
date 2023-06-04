import mongoose from "mongoose";
const complaintSchema = mongoose.Schema({
    title:{type: String,required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    image:{type:String, required:true},
    latitude:{type:String, required:true},
    longitude:{type:String, required:true},
    
});


export default mongoose.model('Complaint', complaintSchema);