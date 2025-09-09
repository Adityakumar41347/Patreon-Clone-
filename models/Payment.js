import mongoose from "mongoose";
const { Schema, models } = mongoose;
const PaymentSchema=new Schema({
      name:{type:String,required:true},
      to_user:{type:String,required:true},
      o_id:{type:String,required:true},
      message:{type:String},
      amount:{type:Number,required:true},
      created_at:{type:Date,defult:Date.now},
      updated_at:{type:Date,defult:Date.now},
      done:{type:Boolean,defult:false}
      
      
})
const Payment=models.Payment || mongoose.model("Payment",PaymentSchema)
export default Payment;