"use server"
import Razorpay from 'razorpay';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';
import User from '@/models/User';
import Username from '@/app/[username]/page';
import { NextResponse } from 'next/server';


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
  let a=await User.findOne({username:to_username})
    const secret=a.razorpay_secret
    const id=a.razorpay_id
   try{  await connectDB()
    
    var instance = new Razorpay({ key_id:id, key_secret: secret})
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
  let Payments=await Payment.find({to_user:username }).sort({amount:-1}).limit(10).lean()
  return Payments.map((p) => ({
      ...p,
      _id: p._id.toString(),
      to_user: p.to_user?.toString(),
      o_id: p.o_id?.toString(),
      amount:p.amount?.toString()
    }));

}
export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{

        
        await User.updateOne({email: ndata.email}, ndata)
  }


}