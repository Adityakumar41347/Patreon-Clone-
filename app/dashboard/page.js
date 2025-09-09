"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { initFlowbite } from 'flowbite';
import mongoose from "mongoose";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
 
  

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      // Re-initialize Flowbite dropdowns after redirect
      initFlowbite();
    }
  }, [session, status]);


  return (
    <div className="min-h-screen  flex items-centerbg-slate-900 justify-center p-6">
      <div className="w-full max-w-3xl  rounded-lg shadow-lg p-8 bg-slate-900">
        <h2 className="text-2xl font-bold mb-6 text-slate-400">User Dashboard</h2>

        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Enter your name" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" placeholder="Choose a username" className="mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Picture</label>
            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Razorpay ID</label>
            <input type="text" placeholder="Enter your Razorpay ID" className="razorpayid mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Razorpay Secret</label>
            <input type="text" placeholder="Enter your Razorpay SECRET" className=" razorpaysecret mt-1 block w-full px-4 py-2 border border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
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
