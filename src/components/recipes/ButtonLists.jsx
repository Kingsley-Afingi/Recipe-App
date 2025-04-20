import React from 'react'
import Buttons from '../recipes/Buttons'

const ButtonLists = () => {

    const btnDatas= [
        {label: "Recipes & Menue", bgColor: "#F6784C"},
        {label: "Share your recipe", bgColor: "#C4D600"},
        {label: "Custom meal Plan", bgColor: "#EAAA00"},
        {label: "Create a gracery list", bgColor: "#ED8B00"},
        {label: "Cooking tips & tricks", bgColor: "#84BD00"}

        ];

  return (
    <section className='md:grid md:grid-cols-5 grid grid-cols-2 gap-4'>
              {btnDatas.map((btns, index)=>(
                <Buttons key={index} label={btns.label} bgColor={btns.bgColor}>
                  {btns}
                </Buttons>
              ))}
          </section>
  );
};

export default ButtonLists;
