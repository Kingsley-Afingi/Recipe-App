import React from 'react'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <header className='container mx-auto  p-2  py-3 flex justify-between items-center'>
            <div>
            <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className='bg-slate-300 md:flex hidden w-[377px] justify-between '>
                <select name="" id="" className='w-[122px] outline-0'>
                    <option value="">All Categories</option>
                </select>
                <input type="text"  className='border-none outline-none w-[142px]' placeholder='| Search for recipe'/>
                <button className='bg-[#509E2F] p-2'>
                <CiSearch />
                </button>
            </div>
            <menu className='flex gap-4 '>
                <li className='font-poppins text-[1rem] font-bold leading-[100%] text-[#253D4E]'><a href="Home">Home</a></li>
                <li className='font-poppins text-[1rem] font-bold leading-[100%] text-[#253D4E]'><a href="Explore">Explore</a></li>
                <li className='font-poppins text-[1rem] font-bold leading-[100%] text-[#253D4E]'><a href="Help">Help</a></li>
            </menu>
            
            <div>
                <img src="/images/user.png" alt="user" />
            </div>
    </header>
    </>
    
  );
};

export default Navbar;
