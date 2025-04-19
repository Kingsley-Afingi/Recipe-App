import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = ({className}) => {
    const resources =["Blogs","Use Cases","Testimonials","Insights","Activity"]
    const Company =["Home","Explore","Team","About Us","Activity"]
    const listStyle = `font-poppins font-medium text-[1rem] leading[1.25rem] ${className}`;


  return (
    <div className='w-full  bg-slate-40 pt-9'>
        
        <div className='container mx-auto space-y-3  '>
            <div className='md:flex justify-between items-center space-y-3  flex-col-1 md:p-0 p-2 '>
                <div className='w-[290px]'>
                    <span>
                    <img src="/images/logo.svg" alt="logo" />
                    </span>
                    <span className='font-poppins font-medium text-[1rem] leading[100%] '>
                    <p>Cookpal is a recipe website with a wide variety of delicious recipes, easy-to-use search function. Join our community and let's cook together!</p>
                   </span>
                </div>
                <div className='w-[102px]'>
                    <span className='text-[#253D4E] font-semibold text-[]'>
                        <h3 className='font-poppins font-semibold leading-[1.625rem] text-[1.25rem]'>Company</h3>
                    </span>

                    {Company.map ((resource, index )=>(
                    <ul key={index} className={listStyle}>
                        {resource}
                    </ul>
                ))}
                </div>
                <div className='w-[100px]'>
                    <span className='text-[#253D4E] font-semibold'>
                    <h3 className='font-poppins font-semibold leading-[1.625rem] text-[1.25rem]'>Resources</h3>
                    </span>
                    
                {resources.map ((resource, index )=>(
                    <ul key={index} className={listStyle}>
                        {resource}
                    </ul>
                ))}
                    
                </div>
                <div className='md:w-[400px] '>
                    <span>
                    <img src="/images/logo.svg" alt="logo" />
                    </span>
                    <span >
                    <p className='font-poppins font-[130px] text-[1rem] leading[100%]'>Ut risus mattis interdum faucibus facilisi. Facilisi purus accumsan aliquam.</p>
                    <span className='my-1 flex gap-0.5'>
                        <span className='w-[290px] p-3 bg-slate-200 flex justify-between rounded-sm'>
                        <input type="text" placeholder='Your Email' className='border-0 outline-0' />
                        <span>@</span>
                        </span>
                        <button className='bg-[#509E2F] text-white rounded-sm px-3'>Subscribe</button>
                    </span>
                  </span>
                </div>
            </div>
        </div>

       <div className='container mx-auto flex items-center justify-center my-5'>
       <div className='md:w-[195px] flex gap-2 space-y-2 '>
            <span><CiInstagram /></span>
            <span><CiTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><CiFacebook /></span>
        </div>

       </div>
      
    </div>
  );
};

export default Footer;
