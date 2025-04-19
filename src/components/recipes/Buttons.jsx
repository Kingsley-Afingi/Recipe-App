import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";


const Buttons = ({label, bgColor}) => {
  return (
    <div className='md:px-0 px-1'>
        <button 
        className={`md:w-[236px] w-[180px]  flex  items-center justify-center rounded-lg py-5`}
        style={{backgroundColor: bgColor}}
        >
          <style></style>
            <span className='md:w-[183px] w-[170px] md:px-0 px-2 flex items-center justify-between '>
            <span>{label}</span>
            <span className='text-white'><FaGreaterThan /></span>
            </span>
        </button>
      
    </div>
  );
};

export default Buttons;
