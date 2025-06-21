import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipies = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipeContext);
    const { register, handleSubmit, reset } = useForm();
    const submitHandler = (recipe) => {
        recipe.id = nanoid();

        const copyrecipe = [...data];
        copyrecipe.push(recipe);
        setdata(copyrecipe);
        localStorage.setItem("recipe", JSON.stringify(copyrecipe));

        // setdata([...data, recipe]);
        toast.success("new recipe created");
        reset();
        navigate('/recipies');
    }
    return (
        <div className='w-full flex items-center justify-center '>
            <form onSubmit={handleSubmit(submitHandler)} className=' md:w-[50%] w-full h-full text-center flex flex-col  gap-2 p-5 shadow-xl shadow-gray-200 rounded-2xl' >
                <input
                    className=' inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2 block'
                    type="text"
                    placeholder="Recipe Name *"
                    {...register("recipeName", { required: true, minLength: 5, maxLength: 50 })}
                />
                {/* <small className='text-red-400'>this is an error</small> */}

                <input
                    className=' inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2 block'
                    type="url"
                    {...register("image", { required: true })}
                    placeholder='enter image url *'
                />

                <input
                    className=' inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2 block'
                    type="text"
                    placeholder="Chef name *"
                    {...register("chefName")}
                />

                <textarea
                    className=' block h-20 inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2'
                    {...register("desc", { required: true })}
                    placeholder='Recipe Description *'
                ></textarea>


                <textarea
                    className=' block h-20 inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2'
                    {...register("ingr", { required: true })}
                    placeholder='//write ingreadients seperated by commas *'
                ></textarea>


                <textarea
                    className=' block h-20 inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2'
                    {...register("inst", { required: true })}
                    placeholder='//write instructions seperated by commas *'
                ></textarea>


                <select
                    className=' block  inset-shadow-sm inset-shadow-gray-200 rounded-xl p-2 text-black'
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="drink">Drink</option>
                </select>

                <small className='text-red-500'> NOTE : fields marked with * are compulsory</small>
                <button className='mt-5 block bg-emerald-600 px-4 py-2 rounded-4xl text-white font-bold'>save recipe</button>
            </form>
        </div>
    )
}

export default CreateRecipies