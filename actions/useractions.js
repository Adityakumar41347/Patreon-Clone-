"use server"
import Razorpay from 'razorpay';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';
import User from '@/models/User';
import Username from '@/app/[username]/page';


export const initiate = async (amount, to_username, paymentform) => {
    
  
   try{  await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})
    var options = {
      

      amount: Number.parseInt(amount)*100, // Amount in paise (₹500.00)
      currency: "INR" 
      

    };
    let x=await instance.orders.create(options)


   //create a payment object which shows a pending payment in the database
    await Payment.create({
        o_id:x.id,
        amount:amount,
        to_user:to_username,
        name:paymentform.name,
        message: paymentform.message,
        done:false
       
    })
   

    return x;
  }
  catch (err) {
   
  console.error("Error in initiate():", err);
  throw new Error("Payment initiation failed");
}

}
export const fetchuser=async (username)=>{
  await connectDB()
  let a=await User.findOne({username:username})
  let userDoc=a.toObject({flattenObjectIds:true})
  return {
      ...userDoc,
      _id: userDoc._id.toString(),
      o_id: userDoc.o_id?.toString(), // if applicable
    };

}
export const fetchpayment=async (username)=>{
  await connectDB()
  let Payments=await Payment.find({to_user:username }).sort({amount:-1}).lean()
  return Payments.map((p) => ({
      ...p,
      _id: p._id.toString(),
      to_user: p.to_user?.toString(),
      o_id: p.o_id?.toString(),
      amount:p.amount?.toString()
    }));

}
