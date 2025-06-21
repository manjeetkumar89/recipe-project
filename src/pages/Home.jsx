import React, { useContext, useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { recipeContext } from '../context/RecipeContext';
import axiosInstance from '../utils/axios';
import FeaturedRecipeCard from '../components/FeaturedRecipeCard';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const Home = () => {
  const { featuredRecipies } = useContext(recipeContext);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const  fetchedData  = await axiosInstance.get('/products');
      //console.log(fetchedData.data);
    } catch (error) {
      //console.error("error fetching products: ", error)
    }
  }

  useEffect(()=>{
    //console.log("home.jsx mounted");
    //this will automatically call the api when component is mounted on the view
    //getProducts();
    return () =>{
      //console.log("home.jsx destroyed");
    }
  })

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 md:px-6 px-2 relative overflow-hidden bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          {/* Text Block */}
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
              🧄 Fresh & Tasty Weekly Picks
            </div>

            <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight mb-5 leading-tight text-emerald-800">
              Cook with Love, Serve with Joy
            </h1>

            <p className="sm:text-lg text-sm text-gray-500 mb-8 leading-relaxed max-w-md">
              Elevate your kitchen game with chef-curated recipes, mouthwatering ideas, and seasonal inspiration — all in one place.
            </p>

            <button onClick={()=> navigate('/recipies') } className="cursor-pointer active:scale-75 inline-flex items-center sm:px-6 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white sm:text-lg text-sm font-medium rounded-full transition">
              Explore Recipes <ChevronRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Image Section with Decorative Circle */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="./../public/homerecipe.avif"
                alt="Delicious Dish"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative Dotted Circle */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-4 border-dotted border-emerald-500 opacity-50" />
          </div>
        </div>

        {/* Decorative Background Radial Blur */}
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 opacity-20 rounded-full top-[50%] left-[-200px] blur-[120px] -z-10" />
        <div className="absolute top-0 right-4 opacity-40 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#10B981" strokeWidth="6" strokeDasharray="6 6" />
          </svg>
        </div>
      </section>


      {/* Decorative Element
      
    </section> */}


      {/* Featured Recipes */}
      <section className="md:px-6 px-2 py-16 max-w-7xl mx-auto">
        <div className=" flex flex-col gap-3 items-center justify-center sm:text-3xl text-2xl font-semibold text-center mb-12 tracking-tight text-emerald-700  ">
          <h2 className='sm:w-[70%] w-full'>Delicious Discoveries That Deserve a Spot on Your Table</h2>
          <p className='sm:text-xl text-sm text-gray-400 font-thin'>Hidden gems and instant classics—explore recipes that surprise and satisfy....</p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredRecipies.map((featureRecipe) => (
            <FeaturedRecipeCard key={featureRecipe.f_id} featureRecipiedata={featureRecipe} />
          ))}
        </div>

        {/* <button onClick={getProducts}>click to get fake products</button> */}
      </section>

      <Footer/>
    </main >
  );
};

export default Home;
