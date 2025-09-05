import React from 'react'

const username = ({ params }) => {
    return (
        <div>

            <div className='cover w-full bg-red-50 h-[350] relative'>
                <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=2vOo9TQgrnL3x9ZV6_eh3p9Ulm8lMQmfZonf9gApV5Q%3D&token-time=1759536000" alt="" className='h-100 w-full ' />
                <div className="profilepic overflow-hidden absolute  -bottom-13 right-[45vw] border-2 rounded-2xl border-zinc-600">
                    <img className='w-30  object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=xeAiyUcjBN2mLnSL_1tZkiahefbn1fgL4o0tqhXF3S8%3D&token-time=1758240000" alt="" />
                </div>
            </div>
            <div className='info flex justify-center items-center my-15 flex-col gap-2'>
                <h1 className='font-bold text-2xl'>@{params.username}</h1>
                <div className='text-slate-500'>
                    Creating Animated art for VTT's
                </div>
                <div className='text-slate-500'>
                    <ul className='flex disk'>
                        <li>19,886.</li>
                        <li>members102.</li>
                        <li>posts$18.</li>
                        <li>090/release</li>
                    </ul>

                </div>
                <div className=" flex gap-3 w-[80%] mt-15 ">
                    <div className="supporters w-1/2 bg-slate-900 p-5 ">
                        {/* list of suppoters */}
                        <h2 className="supporters font-bold text-xl "> Supporters</h2>
                        <ul className='mx-4'>
                            <li className='my-2 font-medium'>Vishal donated $30 with a massage "lots of love from heart"</li>
                            
                        </ul>
                    </div>
                    <div className="payment w-1/2 bg bg-slate-900 p-5 ">
                        <h2 className="supporters font-bold text-xl mb-3">Make payment</h2>
                        <div className='flex flex-col gap-1 w-full'>
                            
                                <input type="text" placeholder='Enter Ammount' className='bg-slate-950   justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                                <input type="text" placeholder='Enter Your Name' className='bg-slate-950  justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                                <input type="text" placeholder='Enter Massage' className='bg-slate-950  justify-center  p-3 rounded-lg items-center  me-2 mb-2' />
                           
                            <button type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>
                        </div>
                        <div className='flex justify-start gap-9  '>
                            <button className='bg-slate-600 p-2 rounded-lg'>$20</button>
                            <button className='bg-slate-600 p-2 rounded-lg'>$40</button>
                            <button className='bg-slate-600 p-2 rounded-lg '>$60</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default username
