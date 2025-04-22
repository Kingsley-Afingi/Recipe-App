import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Banner from './components/recipes/Banner'
import RecipeLists from './components/recipes/RecipeLists'
import ButtonLists from './components/recipes/ButtonLists'
import { recipes } from './constant/Recipes'

const App = () => {

  return (
    <div className='container mx-auto space-y-6'>
      <Navbar/>
      <Banner/>
      <ButtonLists/>

      <section className='grid gap-20'>
      <RecipeLists recipes={recipes}/>
      <RecipeLists tittle="Recomended Recipes"  recipes={recipes}/>
      </section>
     
      <Footer/>
    </div>
  );
};

export default App;
