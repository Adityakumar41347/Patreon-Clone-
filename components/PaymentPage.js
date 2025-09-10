"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchuser } from '@/actions/useractions'
import { fetchpayment, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';


const PaymentPage = ({ username }) => {
    const searchparams = useSearchParams()
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({
        amount: 0,
        name: "",
        message: ""
    })
    useEffect(() => {
        getData()

    }, [])
    useEffect(() => {
        if (searchparams.get("paymentdone") === "true" && session) {
            toast('🦄 Payment done!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }


    }, [session])


    const getData = async (params) => {
        let u = await fetchuser(username);
        setcurrentuser(u)
        let dbpayments = await fetchpayment(username)
        setpayments(dbpayments)

    }
    const isFormValid = paymentform.name && paymentform.message && paymentform.amount > 0;
    const handlechange = (e) => {

        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const pay = async (amount) => {
        //Get the order id 

        let a = await initiate(amount, username, paymentform)

        let orderId = a.id;
        var options = {
            "key": currentuser.razorpay_id, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits.
            "currency": "INR",
            "name": "Get me a chai", //your business name
            "deScription": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the  obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/razorpay`,

            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();





    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />



            <div>

                
                <div className='cover w-full bg-red-50 relative'>
                    <img className='object-cover w-full h-48 md:h-[350px] shadow-blue-700 shadow-sm' src={currentuser.cover_image} alt="" />
                    <div className='absolute -bottom-20 right-[33%] md:right-[46%] border-white overflow-hidden border-2 rounded-full size-36'>
                        <img className='rounded-full object-cover size-36' width={128} height={128} src={currentuser.profile_image} alt="" />
                    </div>
                </div>
                <div className='info flex justify-center items-center my-20 flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>@{username}</h1>
                    <div className='text-slate-500'>
                        Let's help {username} to get a chai
                    </div>
                    <div className='text-slate-500'>
                        {payments.length} Payments .{username} has raised {payments.reduce((a, b) => Number(a) + Number(b.amount), 0)}

                    </div>
                    <div className=" flex gap-3 w-[95%] md:w-[80%] mt-15 flex-col md:flex-row">
                        <div className="supporters w-full md:w-1/2 bg-slate-900 p-5  ">
                            {/* list of suppoters */}
                            <h2 className="supporters font-bold text-xl "> Top 10 Supporters</h2>
                            <ul className='md:mx-4'>
                                {payments.length == 0 && <li>No payments yet</li>}
                                {payments.map((element, index) => (
                                    <li key={index} className="my-2 font-medium">
                                        {element.name} donated {element.amount} with a message "{element.message}"
                                    </li>
                                ))}



                            </ul>
                        </div>
                        <div className="payment w-[95%] md:w-1/2 bg bg-slate-900 p-5 ">
                            <h2 className="supporters font-bold text-xl mb-3">Make payment</h2>
                            <div className='flex flex-col gap-1 w-full'>

                                <input onChange={handlechange} value={paymentform.amount} name='amount' type="text" placeholder='Enter Ammount' className='bg-slate-950   justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                                <input onChange={handlechange} value={paymentform.name} type="text" name='name' placeholder='Enter Your Name' className='bg-slate-950  justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                                <input onChange={handlechange} value={paymentform.message} type="text" name='message' placeholder='Enter Message' className='bg-slate-950  justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                                <button disabled={!isFormValid || paymentform.amount < 0 || paymentform.amount > 100000 || paymentform.name.length <= 3} onClick={() => pay(paymentform.amount)} id='rzp-button1' type="button" className="text-white disabled:bg-slate-600 disabled:hover:bg-slate-600  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>

                            </div>






                            <div className='flex justify-start gap-9  '>
                                <button className='bg-slate-600 p-2 rounded-lg' onClick={() => pay(2000)}> INR 20</button>
                                <button className='bg-slate-600 p-2 rounded-lg' onClick={() => pay(4000)}>INR 40</button>
                                <button className='bg-slate-600 p-2 rounded-lg ' onClick={() => pay(6000)}>INR 60</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
