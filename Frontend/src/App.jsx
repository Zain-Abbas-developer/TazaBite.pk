import React from 'react'
import Navbar from './components/Navbar'
import { GrCafeteria } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const App = () => {
  return (
    
    <>
      <Navbar/>
      <header className='relative w-full bg-[#121928]'>
        <div className='w-full h-[400px] text-center items-center pt-[100px]'>
          <h1 className='text-[4.5em] font-bold text-[#D82525] px-[280px]  leading-[65px] mb-[30px]'>Delicious Food Deliver to Your Door</h1>
          <p className='text-lg text-white/80 tracking-wide'>Order from your favorite Restaurants. Fast, Fresh and Delivered with care.</p>
        </div>
        <div className='flex justify-center gap-5 mt-[-70px]'>
          <button className='w-[170px] px-1 py-3 text-lg font-semibold text-white bg-[#D82525] rounded-lg cursor-pointer hover:bg-[#eb1f1f] duration-75'><a href="">Get Started</a></button>
          <button className='w-[120px] px-1 py-3 text-lg font-semibold text-white/90 border border-white/50 rounded-lg cursor-pointer'><a href="">Sign In</a></button>
        </div>
        <section className='flex justify-center text-center gap-5 mt-[100px]'>
          <div className=' w-[370px] h-[200px] border rounded-md bg-[#17202c]'>
            <div className='flex rounded-full bg-[#EF5959] w-20 h-20 justify-center mt-5 mb-2 items-center mx-auto'>
              <GrCafeteria className='text-2xl text-white'/>
            </div>
            <div className="text-white text-center">
              <h1 className='text-2xl font-bold mb-2'>Restaurants Owners</h1>
              <p className='text-md text-white/80'>Manage your Menu, Track orders and Grow your Business with our platforms.</p>
            </div>
          </div>
          <div className='w-[370px] h-[200px] border rounded-md bg-[#17202c]'>
            <div className='flex rounded-full bg-[#EF5959] w-20 h-20 justify-center items-center mt-5 mb-2 mx-auto'>
              <MdDeliveryDining className='text-3xl text-white'/>
            </div>
            <div className="text-white text-center">
              <h1 className='text-2xl font-bold mb-2'>Riders</h1>
              <p className='text-md text-white/80'>Earn money by delivering orders. Flexible schedule and competative rates.</p>
            </div>
          </div>
          <div className='w-[370px] h-[200px] border rounded-md bg-[#17202c]'>
            <div className='flex rounded-full bg-[#EF5959] w-20 h-20 justify-center items-center mt-5 mb-2 mx-auto'>
              <FaLocationDot className='text-2xl text-white'/>
            </div>
            <div className="text-white text-center">
              <h1 className='text-2xl font-bold mb-2'>Live Tracking</h1>
              <p className='text-md text-white/80'>Track you real order from restaurant to your doorsteps.</p>
            </div>
          </div>
        </section>
        <section>
          <h1>Famous Pakistani Food</h1>
          <div>box 1</div>
          <div>box 2</div>
          <div>box 3</div>
          <div>box 4</div>
        </section>
      </header>
    </>
  )
}

export default App
