import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {
  const { id, image, recipeName, desc, chefName } = props.recipe;

  

  return (
    <Link to={`/recipies/details/${id}`} className='group relative block rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition'>
        <img src={image} alt="" className='w-full h-48 object-cover' />
        <h1 className='text-2xl font-semibold px-5 pt-5'>{recipeName}</h1>
        <small className='text-sm text-gray-500 px-5'> by {chefName}</small>
        <p className='text-gray-700 px-5 py-5'>
            {desc.length > 100 ? desc.slice(0, 100) + '...' : desc}
            <small className='text-emerald-500'>more</small>
        </p>
    </Link>
  )
}

export default RecipeCard