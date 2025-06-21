import React, { use, useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';
import FeaturedRecipeCard from '../components/FeaturedRecipeCard';
import { useNavigate } from 'react-router-dom';

const Recipies = () => {
  const navigate = useNavigate();
  const { data } = useContext(recipeContext);
  const {featuredRecipies} = useContext(recipeContext);
  const renderRecipies = data.map(recipe => (
    // <div key={recipe.id}>
    //     <h1>{recipe.recipeName}</h1>
    // </div>

    <RecipeCard key={recipe.id} recipe={recipe} />
  ))

  const renderFeaturedRecipies = featuredRecipies.map(featureRecipie => (
    <FeaturedRecipeCard key={featureRecipie.f_id} featureRecipiedata={featureRecipie} />
  ))
  return (
    <div>
      <h1 className=' p-5 text-2xl font-bold text-emerald-500'>featured for you</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {featuredRecipies.length > 0 ? renderFeaturedRecipies : "no featured recipe found"}
      </div>
      <h1 className=' p-2 mt-20 text-2xl font-bold text-emerald-500'>Your Recipes  </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {data.length>0? renderRecipies : <span>you dont have any recipes <button className='text-emerald-500 underline cursor-pointer' onClick={() => navigate('/create-recipie')}>create one!</button></span>}
      </div>
    </div>
  )
}

export default Recipies