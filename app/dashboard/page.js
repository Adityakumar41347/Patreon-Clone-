"use client";
import React, { useEffect,useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { initFlowbite } from 'flowbite';
import mongoose from "mongoose";
import { updateProfile,fetchuser } from "@/actions/useractions";

const Dashboard = () => {
  const { data: session, status,update } = useSession();
  const router = useRouter();
 const [form, setform] = useState({})
  

  useEffect(() => {
    
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      // Re-initialize Flowbite dropdowns after redirect
      getuser()
      initFlowbite();
    }
  }, [session, status]);
  const getuser=async ()=>{
    let u=await fetchuser(session.user.name)
    setform(u)
  }
 const handleChange=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
 }
  const handleSubmit=async (e)=>{
  
   let a = await updateProfile(e, session.user.name)
   alert("Profile Updated")
   
  }

  return (
    <div className="min-h-screen  flex items-centerbg-slate-900 justify-center p-6">
      <div className="w-full max-w-3xl  rounded-lg shadow-lg p-8 bg-slate-900">
        <h2 className="text-2xl font-bold mb-6 text-slate-400">User Dashboard</h2>

        <form className="space-y-6 " action={handleSubmit}>

          <div>
            <label  className="block text-sm font-medium text-gray-700">Name</label> 
            <input value={form.name?form.name:""} onChange={handleChange} placeholder="Enter your name" name='name' type="text" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={form.email?form.email:""} onChange={handleChange} name='email' type="email" placeholder="Enter your email" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input value={form.username?form.username:""} onChange={handleChange} name='username' type="text" placeholder="Choose a username" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input value={form.profile_image?form.profile_image:""} onChange={handleChange} placeholder="Enter your cover image url" name='profile_image' type="text" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Picture</label>
            <input value={form.cover_image?form.cover_image:""} placeholder="Enter your cover image url" onChange={handleChange} name='cover_image' type="text" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label  className="block text-sm font-medium text-gray-700">Razorpay ID</label>
            <input  value={form.razorpay_id?form.razorpay_id:""} onChange={handleChange} name='razorpay_id' type="text" placeholder="Enter your Razorpay ID"  className="razorpayid mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Razorpay Secret</label>
            <input value={form.razorpay_secret?form.razorpay_secret:""} onChange={handleChange} name='razorpay_secret' type="text" placeholder="Enter your Razorpay SECRET" className=" razorpaysecret mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          

          <div className="pt-4">
            <button  type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Dashboard;
