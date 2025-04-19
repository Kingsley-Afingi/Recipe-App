import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Banner from './components/recipes/Banner'
import Buttons from './components/recipes/Buttons'
import RecipeCards from './components/recipes/RecipeCards'
import { recipes } from './constant/Recipes'
import Recomend from './components/recipes/Recomend'

const App = () => {
  const btnDatas= [
          {label: "Recipes & Menue", bgColor: "#F6784C"},
          {label: "Share your recipe", bgColor: "#C4D600"},
          {label: "Custom meal Plan", bgColor: "#EAAA00"},
          {label: "Create a gracery list", bgColor: "#ED8B00"},
          {label: "Cooking tips & tricks", bgColor: "#84BD00"}
          ];

  return (
    <div className='container mx-auto space-y-6'>
      <Navbar/>
      <Banner/>
      <section className='md:grid md:grid-cols-5 grid grid-cols-2 gap-4'>
        
          {btnDatas.map((btns, index)=>(
            <Buttons key={index} label={btns.label} bgColor={btns.bgColor}>
              {btns}
            </Buttons>
          ))}

      </section>
     <section className='grid md:grid-cols-4 grid-cols-2 md:p-0 p-2 md:gap-2 gap-3'>
     {recipes.map((recipe)=>{
       return <RecipeCards key={recipe.id} recipe={recipe}/>
      })}
     </section>
     <Recomend/>
     <section className='grid md:grid-cols-4 grid-cols-2 md:p-0 p-2 md:gap-2 gap-3'>
     {recipes.map((recipe)=>{
       return <RecipeCards key={recipe.id} recipe={recipe}/>
      })}
     </section>
      <Footer/>
    </div>
  );
};

export default App;
