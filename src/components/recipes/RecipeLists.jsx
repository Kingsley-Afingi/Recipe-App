import React from 'react'
import RecipeCards from './RecipeCards'


const RecipeLists = ({tittle, recipes}) => {
  return (
    <section className='space-y-5'>
      {tittle && <h2 className='md:py-1  font-semibold md:text-[2rem] text-gray-600  text-[1.3rem] md:px-0 px-2 leading-[1.5rem] font-inter '>{tittle}</h2>}
      <section className='grid md:grid-cols-4 grid-cols-2 md:p-0 p-2 md:gap-2 gap-3'>
      
      {recipes.map((recipe)=>{
        return <RecipeCards key={recipe.id} recipe={recipe}/>
       })}
      </section>
    </section>
   
  )
}

export default RecipeLists
