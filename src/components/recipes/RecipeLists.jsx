import React from 'react'
import RecipeCards from './RecipeCards'
import { recipes } from '../../constant/Recipes'

const RecipeLists = ({tittle}) => {
  return (
    <section className='grid md:grid-cols-4 grid-cols-2 md:p-0 p-2 md:gap-2 gap-3'>
      {tittle && <h2 className='font-bold text-2xl text-gray-800'>{tittle}</h2>}
         {recipes.map((recipe)=>{
           return <RecipeCards key={recipe.id} recipe={recipe}/>
          })}
         </section>
  )
}

export default RecipeLists
