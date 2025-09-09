"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import 'flowbite';




const Navbar = () => {
  const { data: session } = useSession();
  useEffect(() => {
  import('flowbite');
  }, []);


  return (
    <div>
      <nav className='bg-gray-900 text-white h-16 flex items-center justify-between px-4'>
        <div className="logo font-bold text-lg">GetMeAchai</div>
        <div>
          {session ? (
            <>

              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Profile <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
              </button>


              <div id="dropdown" className="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  
                   </li>
                  <li>
                    <a href={session.user.name} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button
                      type="button"
                      onClick={() => signOut()}
                      
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>


            </>
          ) : (
            <Link href={"/login"}>
            <button
              type="button"
              
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login with GitHub
            </button></Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar