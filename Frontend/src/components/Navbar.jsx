import React from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-[#1E2836] z-10'>
      <nav className='flex justify-between items-center p-4 mx-10'>
        <h1 className='text-3xl text-[#EC3F3F] font-bold'><a href="">TazaBite.Pk</a></h1>
        <ul className='flex relative gap-4 text-center items-center'>
            <li className='w-[30px] h-[30px] flex text-center justify-center items-center border border-white/50 rounded text-[#ffff00] text-xl'><a href=""><FaSun className='absolute'/><FaMoon/></a></li>
            <li className='w-[100px] border border-white/50  text-white text-lg font-semibold rounded px-3 py-1.5 cursor-pointer duration-75'><a href="">Sign In</a></li>
            <li className='w-[100px] border border-[#ec3f3f] bg-[#EC3F3F] text-white text-lg font-semibold rounded px-3 py-1.5 cursor-pointer hover:bg-[#f13232] duration-75'><a href="">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
