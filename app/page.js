import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (

    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-2">
        <div className=" flex justify-center items-center gap-2 font-bold text-4xl">Buy me a chai <div><img className="bg-slate-900 invertimg w-8" src="icons8-cup.gif" alt="" /></div></div>
        <p>A croud funding platform for creators </p>
        <div>
          <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button></Link>
          <Link href={"/about"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button></Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white  container mx-auto pb-32 pt-14">
        <h2 className="font-bold text-2xl text-center mb-14">Fans can buy a chai</h2>
        <div className=" flex  items-center justify-around space-y-3 flex-col md:flex-row gap-2">
          <div className=" flex flex-col items-center justify-center space-y-3 ">
            <img className="w-15 p-3  bg-slate-400 rounded-full text to-black" src="man.webp" alt="" />
            <p className="font-bold text-lg">Fans want to help</p>
            <p className="text-center">your fans are available for you to help</p>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-3 ">
            <img className="w-15 p-3  bg-slate-400 rounded-full text to-black" src="coin.png" alt="" />
            <p className="font-bold text-lg">Fans want to help</p>
            <p className="text-center">your fans are available for you to help</p>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-3 ">
            <img className="w-15 p-3  bg-slate-400 rounded-full text to-black" src="people.png" alt="" />
            <p className="font-bold text-lg">Fans want to help</p>
            <p className="text-center">your fans are available for you to help</p>
          </div>
        </div>

      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white flex flex-col justify-center items-center  container mx-auto pb-32 pt-14">
        <h2 className="font-bold text-2xl text-center mb-14">Fans can buy a chai</h2>

        <a
          href="https://youtube.com/shorts/OCuItHbJkGA?si=yZ1CusRPh2AAJoTb" // replace with your actual source URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          More Info
        </a>


      </div>
    </>
  );
}
