import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Banner from './components/recipes/Banner'
import Recomend from './components/recipes/Recomend'
import RecipeLists from './components/recipes/RecipeLists'
import ButtonLists from './components/recipes/ButtonLists'

const App = () => {

  return (
    <div className='container mx-auto space-y-6'>
      <Navbar/>
      <Banner/>
      <ButtonLists/>

      <RecipeLists/>
      <Recomend/>
      <RecipeLists/>
     
      <Footer/>
    </div>
  );
};

export default App;
