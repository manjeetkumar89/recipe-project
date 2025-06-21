import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipeContext);

  // Extracting the recipe ID from the URL parameters
  const param = useParams();

  //finding that recipe on which user has clicked to see the details of it
  const singleRecipeData = data.find((recipe) => param.id == recipe.id);

  // useEffect(() => {
  //   // Add a check if singleRecipeData is undefined
  //   if (!singleRecipeData) {
  //     // Handle the case where the recipe is not found
  //     // For example, navigate to a 404 page or the home page
  //     navigate("/recipies"); // Example: navigate to home
  //     // return null; // Or return a loading/error state
  //   }
  // },[])

  const { register, handleSubmit, reset } = useForm({
    //setting default values on the form (alrady filled form like effect)
    defaultValues: {
      // checking if data is availabe (singlerecipedata? will check if data is available ) then it can access the recipename if not then it will return an undefined value which will cause problem
      recipeName: singleRecipeData?.recipeName,
      image: singleRecipeData?.image,
      chefName: singleRecipeData?.chefName,
      desc: singleRecipeData?.desc,
      ingr: singleRecipeData?.ingr,
      inst: singleRecipeData?.inst,
      category: singleRecipeData?.category
    }
  });


  //creating an usestate variable for setting data in local storage as we cannot directly reflect changes in react
  const [favorite, setfavorite] = useState(
    //setting initial value of favorite to the data which is fetched from local storage if user has added favorite recipies 
    // if this is not the case then return an empty array
    JSON.parse(localStorage.getItem("fav")) || []
  );

  //this submithandler is acting as a update handler which will udpade the change in recipe data by the user
  const updateHandler = (recipe) => {
    //finding the index at which the created recipe is saved for which user is trying to update
    const index = data.findIndex((item) => param.id == item.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("recipe updated successfully");
  }

  const deleteHandler = () => {
    const filteredData = data.filter((r) => r.id != param.id);
    setdata(filteredData);
    localStorage.setItem("recipe", JSON.stringify(filteredData));

    const filterfav = favorite.filter((f) => f != param.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.success("recipe deleted successfully");

    navigate('/recipies');

  }

  // //useeffect is a React Hook that lets you perform side effects in function components. Side effects are operations like data fetching, subscriptions, manual DOM manipulations, or logging—anything that affects something outside the component.
  // // every component has a lifecycle (mount or create, unmount or destroy and update or delete+create) and during each lifecycle component rerenders on the page
  // useEffect(() => {
  //   //code written in this area will run when component mounts on the view
  //   console.log("recipedetails.jsx mounted");
  //   return () => {
  //     //code written in this area will run when component unmountes from the view
  //     console.log("recipedetails.jsx destroyed");
  //   }
  // }, []/* this is dependency array which controls the rerendering of the components, if dependency array is not provided whole component will rerender on every single update in the particular component, empty array represents only a change will be reflected on the component rather than rerendering the whole component again and again on every single change*/)


  const favoritehandler = () => {
    const copyfav = [...favorite];
    copyfav.push(singleRecipeData.id);
    setfavorite(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const unfavoriteHandler = () => {
    //filtering all data and saving in an array accept the data which is unfavorite
    const filterfav = favorite.filter((f) => f != singleRecipeData?.id);
    setfavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  }

  useEffect(() => {
    //code written in this area will run when component mounts on the view
    //console.log("recipedetails.jsx mounted");
    return () => {
      //code written in this area will run when component unmountes from the view
      //console.log("recipedetails.jsx destroyed");
    }
  }, [setfavorite]);

  return (
    singleRecipeData ? 
    (<div className='w-full h-fit flex gap-5 p-2 sm:py-5 sm:px-10 justify-between flex-col sm:flex-row '>
      <div className=' left sm:w-2/3 p-2 w-full flex flex-col gap-5'>

        <h1 className='text-4xl font-bold mb-5 flex items-center gap-10'>{singleRecipeData.recipeName}
          <span className='text-sm rounded-2xl overflow-hidden text-white active:scale-50'>
            {/* check if mathcing data is in the favorite or not */}
            {favorite.find((f) => f == singleRecipeData?.id) ? (<button className='p-2 bg-red-600 cursor-pointer' title='Mark unfavorite' onClick={unfavoriteHandler}>unfavorite</button>) : (<button className='p-2 bg-green-600 cursor-pointer' title='Mark favorite' onClick={favoritehandler}>favorite</button>)}
          </span>
        </h1>
        <img className='w-full h-100 rounded-xl object-cover' src={singleRecipeData.image} alt={singleRecipeData.recipeName} />
        <p className='text-gray-700 w-full text-wrap p-2'>{singleRecipeData.desc}</p>
        <p className='text-gray-700'>Chef: {singleRecipeData.chefName}</p>
        <h2 className='text-xl font-semibold'>Ingredients:</h2>
        <ul className='list-disc list-inside'>
          {singleRecipeData.ingr.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className='text-xl font-semibold'>Instructions:</h2>
        <ol className='list-decimal list-inside'>
          {singleRecipeData.inst.split(",").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div className='right sm:w-1/3 w-full p-5 '>
        <form onSubmit={handleSubmit(updateHandler)} className='w-full flex flex-col gap-2 p-5 rounded-xl mt-5 shadow-xl shadow-emerald-200' >
          <input
            className=' outline rounded-xl p-2 block'
            type="text"
            placeholder="Recipe Name"
            {...register("recipeName")}
          />
          {/* <small className='text-red-400'>this is an error</small> */}

          <input
            className=' outline rounded-xl p-2 block'
            type="url"
            {...register("image")}
            placeholder='enter image url'
          />

          <input
            className=' outline rounded-xl p-2 block'
            type="text"
            placeholder="Chef name"
            {...register("chefName")}
          />

          <textarea
            className=' block h-20 outline rounded-xl p-2'
            {...register("desc")}
            placeholder='Recipe Description'
          ></textarea>


          <textarea
            className=' block h-20 outline rounded-xl p-2'
            {...register("ingr")}
            placeholder='//write ingreadients seperated by commas'
          ></textarea>


          <textarea
            className=' block h-20 outline rounded-xl p-2'
            {...register("inst")}
            placeholder='//write instructions seperated by commas'
          ></textarea>


          <select
            className=' block  outline rounded-xl p-2 text-black'
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="appetizer">Appetizer</option>
            <option value="drink">Drink</option>
          </select>


          <button className='mt-5 block bg-emerald-600 px-4 py-2 rounded text-white font-bold'>update recipe</button>
          <button onClick={deleteHandler} className='mt-5 block bg-red-600 px-4 py-2 rounded text-white font-bold'>delete recipe</button>
        </form>
      </div>


    </div>) : ("loading")
  )
}

export default RecipeDetails