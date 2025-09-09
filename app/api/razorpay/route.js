import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";

export const POST = async (req) => {
    await connectDB()
    
    let body = await req.formData()
    body = Object.fromEntries(body)
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    //check if razorpayOrderId is present on the server
    let p = await Payment.findOne({ o_id: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({success:false, message:"order id not found"})
    }
    //verify the payment
    let xx = validatePaymentVerification(
        {
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id
        },
        razorpay_signature,
        process.env.KEY_SECRET
    );
    if(xx){
        //update
        const updatepayment=await Payment.findOneAndUpdate({ o_id: razorpay_order_id }, { done: true }, { new: true });

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/${updatepayment.to_user}?paymentdone=true`)
        }
        else{
            return NextResponse.json({success:false,message:"payment varification failed "})
        }
   
}