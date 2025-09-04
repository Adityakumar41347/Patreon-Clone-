"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { initFlowbite } from 'flowbite';

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
    <div className="text-center text-xl font-semibold mt-10">
      HELLO GUYS 👋 Welcome to your dashboard!
    </div>
  );
};

export default Dashboard;
