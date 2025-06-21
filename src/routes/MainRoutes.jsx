import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import CreateRecipies from '../pages/CreateRecipies'
import RecipeDetails from '../pages/RecipeDetails'
import PageNotFound from '../pages/PageNotFound'
import Favorites from '../pages/Favorites'
import FeaturedRecipeDetails from '../pages/FeaturedRecipeDetails'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipies' element = {<Recipies />}/>
      <Route path='/recipies/details/:id' element={<RecipeDetails />}/>
      <Route path='/recipies/featured/:id' element={<FeaturedRecipeDetails/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/favorite' element={<Favorites />}/>
      <Route path='/create-recipie' element={<CreateRecipies />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
}

export default MainRoutes