import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const { data } = useContext(recipeContext);
  const favoriteRecipeIDs = JSON.parse(localStorage.getItem("fav")) || [];
  const favoriteRecipe = data.filter(item => favoriteRecipeIDs.includes(item.id));
  const renderFavoriteRecipies = favoriteRecipe.map( fav => (
    <RecipeCard key={fav.id} recipe={fav} />
  ))
  return (
    <div>
      <h1 className=' p-5 text-2xl font-bold text-emerald-500'>Your Favorites</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {favoriteRecipe.length > 0 ? renderFavoriteRecipies : <div className='text-center py-20 text-3xl ' >Opps! No favorites added....</div>}
      </div>
    </div>
  )
}

export default Favorites