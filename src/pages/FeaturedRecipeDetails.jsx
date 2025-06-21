import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { useParams } from 'react-router-dom';

const FeaturedRecipeDetails = () => {

    const {featuredRecipies} = useContext(recipeContext); 

    const {id} = useParams();

    const singleFeaturedRecipe = featuredRecipies.find((recipe) => recipe.f_id == id)

  return (
    singleFeaturedRecipe ? 
    (
      <div className=' sm:px-20 px-2 py-10 w-full  flex flex-col gap-5 '>

        <h1 className='text-4xl font-bold mb-5 flex items-center gap-10'>{singleFeaturedRecipe.f_title}</h1>
        <img className='w-full h-120 rounded-xl object-cover transition-transform' src={singleFeaturedRecipe.f_image} alt={singleFeaturedRecipe.f_title} />
        <p className='text-gray-700 w-full text-wrap p-2'>{singleFeaturedRecipe.f_description}</p>
        {/* <p className='text-gray-700'>Chef: {singleRecipeData.chefName}</p> */}
        <h2 className='text-xl font-semibold'>Ingredients:</h2>
        <ul className='list-disc list-inside'>
          {singleFeaturedRecipe.f_ingredients.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className='text-xl font-semibold'>Instructions:</h2>
        <ol className='list-decimal list-inside'>
          {singleFeaturedRecipe.f_instructions.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>) : ("loading....")
  )
}

export default FeaturedRecipeDetails