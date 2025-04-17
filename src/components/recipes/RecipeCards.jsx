import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";


const RecipeCards = ({recipe}) => {
  return (
    <div className='md:w-[304px] w-[190px] p-2 shadow-[#3232470D] border border-slate-300   rounded-lg shadow hover:shadow-blue-900 transition-all ease-out'>
        <img src={recipe.image} alt={recipe.name} />
        <small className='text-[#ADADAD]'
        >Dairy Free</small>
        <div className='flex justify-between'>
            <h3>Russian Salad</h3>
            <p className='flex gap-3 items-center'>
                <span className='text-[#FDC040]'><FaRegStar /></span>
                <span className='text-[#ADADAD]'>4.5</span>
            </p>
        </div>
        <div className='flex justify-between'>
            <h3 className='text-red-500'>40 min</h3>
            <p className='flex gap-3 items-center'>
                <span className='text-[#252525]'><FaRegHeart /></span>
                <span className='text-[#252525]'><FaRegComment /></span>
            </p>
        </div>
    </div>
  );
};

export default RecipeCards;
