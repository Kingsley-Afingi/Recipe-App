import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Banner from './components/recipes/Banner'
import Buttons from './components/recipes/Buttons'
import RecipeCards from './components/recipes/RecipeCards'
import { recipes } from './constant/Recipes'
import Recomend from './components/recipes/Recomend'

const App = () => {
  return (
    <div className='container mx-auto space-y-6'>
      <Navbar/>
      <Banner/>
      <section className='md:grid md:grid-cols-5 grid grid-cols-2 gap-4'>
      <Buttons/>
      <Buttons/>
      <Buttons/>
      <Buttons/>
      <Buttons/>
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
  )
}

export default App
