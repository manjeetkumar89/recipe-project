import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  const [featuredRecipies, setfeaturedRecipies] = useState([
    {
      f_id: 1,
      f_title: 'Creamy Tuscan Chicken',
      f_image: 'https://images.unsplash.com/photo-1645060809936-55fc70d03e92?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      f_rating: 4.8,
      f_time: '30 mins',
      f_description : 'Creamy Tuscan Chicken is a rich, flavorful dish made with tender seared chicken breasts simmered in a luscious garlic parmesan cream sauce, enriched with sun-dried tomatoes and spinach. It’s the perfect combination of comfort and elegance, ready in under 30 minutes, and best served over pasta, mashed potatoes, or with crusty bread to soak up the sauce.',
      f_ingredients : 'boneless skinless chicken breasts (2 large or 4 small), salt, black pepper, olive oil (2 tbsp), garlic cloves (4, minced), sun-dried tomatoes (1/2 cup, chopped), baby spinach (2 cups), heavy cream (1 cup), chicken broth (1/2 cup), grated parmesan cheese (1/2 cup), Italian seasoning (1 tsp), red chili flakes (optional, 1/4 tsp), butter (1 tbsp)',
      f_instructions : 'season the chicken breasts with salt and pepper, heat olive oil in a large skillet over medium heat, sear chicken on both sides until golden and cooked through (about 5–6 minutes per side), remove chicken and set aside, in the same pan add butter and sauté minced garlic for 1 minute, add chopped sun-dried tomatoes and cook for another minute, pour in chicken broth and scrape up any brown bits, stir in heavy cream, parmesan cheese, Italian seasoning, and red chili flakes if using, simmer the sauce for 3–5 minutes until slightly thickened, add spinach and cook until wilted, return chicken to the skillet and spoon sauce over the top, simmer for 2–3 minutes to warm through, serve hot with your choice of side'
    },
    {
      f_id: 2,
      f_title: 'Classic Margherita Pizza',
      f_image: 'https://images.unsplash.com/photo-1650947809364-a4e4f88d2e56?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      f_rating: 4.6,
      f_time: '45 mins',
      f_description : 'The Classic Margherita Pizza is a simple yet iconic Italian favorite that celebrates the freshness of ripe tomatoes, creamy mozzarella, fragrant basil, and a perfectly crisp, chewy crust. With minimal ingredients and maximum flavor, this pizza is a timeless example of how basic elements can create a truly delicious and satisfying dish.',
      f_ingredients : 'pizza dough (1 ball, homemade or store-bought), olive oil (1 tbsp), garlic (1 clove, minced), crushed San Marzano tomatoes (1/2 cup), salt (to taste), fresh mozzarella cheese (200g, sliced), fresh basil leaves (a handful), grated parmesan cheese (optional, 2 tbsp), all-purpose flour (for dusting)',
      f_instructions : 'preheat oven to 475°F (245°C) and place a pizza stone or baking sheet inside to heat, dust a clean surface with flour and stretch the pizza dough into a 10–12 inch circle, place dough on parchment paper, brush with olive oil and spread minced garlic evenly, spoon crushed tomatoes over the dough and season with salt, arrange fresh mozzarella slices evenly over the top, bake pizza on the hot stone or baking sheet for 10–12 minutes until crust is golden and cheese is bubbling, remove from oven and immediately add fresh basil leaves, sprinkle with grated parmesan if using, slice and serve hot'
    },
    {
      f_id: 3,
      f_title: 'Avocado Toast Deluxe',
      f_image: 'https://images.unsplash.com/photo-1659778059522-d280d965fde8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      f_rating: 4.7,
      f_time: '15 mins',
      f_description : 'Avocado Toast Deluxe is a gourmet twist on the classic, combining creamy mashed avocado with toppings like runny eggs, cherry tomatoes, feta, and microgreens. It’s the perfect nutritious breakfast or brunch option that’s rich in healthy fats, full of texture, and bursting with fresh, savory flavors.',
      f_ingredients : 'ripe avocado (1 large), sourdough or multigrain bread slices (2), cherry tomatoes (1/2 cup, halved), feta cheese (2 tbsp, crumbled), lemon juice (1 tsp), salt (to taste), black pepper (to taste), red chili flakes (optional, a pinch), eggs (2, cooked to preference—fried or poached), olive oil (1 tsp), microgreens or arugula (a handful), garlic (1 small clove, optional, for rubbing toast)',
      f_instructions : 'toast the bread slices until golden and crisp, optionally rub one side of each slice with a cut garlic clove, scoop avocado into a bowl and mash with lemon juice, salt, black pepper, and chili flakes if using, spread mashed avocado evenly over toasted bread, top with halved cherry tomatoes and crumbled feta, place a fried or poached egg on each toast, drizzle lightly with olive oil, garnish with microgreens or arugula, serve immediately while warm'
    },
  ])


  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem("recipe")) || [])
  },[]);

  return (
    <recipeContext.Provider value={{ data, setdata, featuredRecipies }}>
      {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext