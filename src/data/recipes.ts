/**
 * Comprehensive recipe database for the chatbot
 * Each recipe includes ingredients, instructions, prep time, and servings
 */

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  tags: string[];
}

export const RECIPE_DATABASE: Recipe[] = [
  {
    id: 'scrambled-eggs-onions',
    name: "Classic Scrambled Eggs with Onions",
    ingredients: ["eggs", "onions", "butter", "salt", "pepper", "milk"],
    instructions: [
      "Heat 2 tablespoons of butter in a non-stick pan over medium heat",
      "Add diced onions (1 medium onion) and cook until translucent (3-4 minutes)",
      "Beat 6 eggs with 2 tablespoons milk, salt, and pepper in a bowl",
      "Pour eggs into the pan with onions",
      "Gently stir and scramble until eggs are cooked to desired consistency",
      "Remove from heat and serve immediately while hot"
    ],
    prepTime: "5 minutes",
    cookTime: "8 minutes",
    servings: 3,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['breakfast', 'quick', 'protein']
  },
  {
    id: 'vegetable-fried-rice',
    name: "Vegetable Fried Rice",
    ingredients: ["rice", "vegetables", "soy sauce", "oil", "garlic", "ginger", "eggs"],
    instructions: [
      "Heat 2 tablespoons oil in a large pan or wok over high heat",
      "Add minced garlic (3 cloves) and ginger (1 inch piece) and stir-fry for 30 seconds",
      "Add mixed vegetables (carrots, peas, bell peppers) and cook for 3-4 minutes",
      "Push vegetables to one side, scramble 2 beaten eggs on the other side",
      "Add 3 cups of cooked rice and break up any clumps",
      "Pour 3 tablespoons soy sauce over rice and mix everything well",
      "Stir-fry for 2-3 minutes until heated through and serve hot"
    ],
    prepTime: "10 minutes",
    cookTime: "12 minutes",
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Asian',
    tags: ['lunch', 'dinner', 'vegetarian', 'one-pot']
  },
  {
    id: 'garlic-butter-pasta',
    name: "Garlic Butter Pasta",
    ingredients: ["pasta", "garlic", "butter", "parsley", "cheese", "olive oil", "lemon"],
    instructions: [
      "Cook 1 lb pasta according to package instructions until al dente",
      "Reserve 1 cup pasta water before draining",
      "In a large pan, melt 4 tablespoons butter with 2 tablespoons olive oil over medium heat",
      "Add 6 minced garlic cloves and cook until fragrant (1-2 minutes)",
      "Add cooked pasta to the pan with garlic butter",
      "Toss with fresh chopped parsley, lemon juice, and pasta water as needed",
      "Serve immediately with grated Parmesan cheese on top"
    ],
    prepTime: "5 minutes",
    cookTime: "15 minutes",
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    tags: ['dinner', 'quick', 'comfort food']
  },
  {
    id: 'chicken-curry',
    name: "Simple Chicken Curry",
    ingredients: ["chicken", "onions", "tomatoes", "spices", "oil", "ginger", "garlic", "coconut milk"],
    instructions: [
      "Heat 3 tablespoons oil in a heavy-bottom pot over medium heat",
      "Add 2 sliced onions and cook until golden brown (8-10 minutes)",
      "Add minced ginger-garlic paste (2 tablespoons) and cook for 1 minute",
      "Add 2 lbs chicken pieces and cook until lightly browned on all sides",
      "Add chopped tomatoes (3 medium) and spices (turmeric, cumin, coriander, garam masala)",
      "Add 1 cup coconut milk and simmer covered for 20-25 minutes until chicken is cooked through",
      "Garnish with fresh cilantro and serve with rice or naan"
    ],
    prepTime: "15 minutes",
    cookTime: "40 minutes",
    servings: 6,
    difficulty: 'Medium',
    cuisine: 'Indian',
    tags: ['dinner', 'spicy', 'comfort food', 'main course']
  },
  {
    id: 'mushroom-risotto',
    name: "Creamy Mushroom Risotto",
    ingredients: ["rice", "mushrooms", "broth", "cheese", "wine", "onions", "butter", "garlic"],
    instructions: [
      "Heat 6 cups chicken or vegetable broth in a separate pot and keep warm",
      "Sauté 1 lb mixed mushrooms in 2 tablespoons butter until golden, set aside",
      "In same pan, add 1 diced onion and 2 minced garlic cloves, cook until soft",
      "Add 1.5 cups Arborio rice and stir for 1-2 minutes until lightly toasted",
      "Add 1/2 cup white wine and stir until absorbed",
      "Gradually add warm broth one ladle at a time, stirring constantly until absorbed",
      "Continue for 18-20 minutes until rice is creamy, fold in mushrooms and Parmesan cheese"
    ],
    prepTime: "10 minutes",
    cookTime: "35 minutes",
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Italian',
    tags: ['dinner', 'creamy', 'comfort food', 'vegetarian']
  },
  {
    id: 'beef-stir-fry',
    name: "Beef and Vegetable Stir Fry",
    ingredients: ["beef", "vegetables", "soy sauce", "oil", "garlic", "ginger", "cornstarch", "sesame oil"],
    instructions: [
      "Slice 1 lb beef into thin strips and marinate with soy sauce and cornstarch for 15 minutes",
      "Heat 2 tablespoons oil in a wok over high heat",
      "Stir-fry beef until browned (3-4 minutes), remove and set aside",
      "Add more oil if needed, stir-fry mixed vegetables until crisp-tender",
      "Add minced garlic and ginger, stir-fry for 30 seconds",
      "Return beef to wok, add sauce mixture (soy sauce, oyster sauce, sesame oil)",
      "Stir-fry for 2 minutes until everything is well coated and heated through"
    ],
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Asian',
    tags: ['dinner', 'quick', 'high-protein', 'stir-fry']
  },
  {
    id: 'tomato-basil-soup',
    name: "Creamy Tomato Basil Soup",
    ingredients: ["tomatoes", "basil", "cream", "onions", "garlic", "butter", "broth", "sugar"],
    instructions: [
      "Heat 2 tablespoons butter in a large pot over medium heat",
      "Add 1 diced onion and 3 minced garlic cloves, cook until soft",
      "Add 2 cans crushed tomatoes and 2 cups vegetable broth",
      "Add fresh basil leaves, salt, pepper, and a pinch of sugar",
      "Simmer for 20 minutes, then blend until smooth using an immersion blender",
      "Stir in 1/2 cup heavy cream and heat through",
      "Serve hot with fresh basil leaves and crusty bread"
    ],
    prepTime: "10 minutes",
    cookTime: "25 minutes",
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['soup', 'comfort food', 'vegetarian', 'creamy']
  },
  {
    id: 'fish-tacos',
    name: "Grilled Fish Tacos",
    ingredients: ["fish", "tortillas", "cabbage", "lime", "cilantro", "avocado", "sour cream", "spices"],
    instructions: [
      "Season 1 lb white fish fillets with cumin, chili powder, salt, and pepper",
      "Grill fish for 3-4 minutes per side until cooked through",
      "Warm corn tortillas on the grill or in a dry pan",
      "Flake the fish into bite-sized pieces",
      "Assemble tacos with fish, shredded cabbage, diced avocado",
      "Top with cilantro, lime juice, and a dollop of sour cream",
      "Serve immediately with lime wedges"
    ],
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Mexican',
    tags: ['lunch', 'dinner', 'healthy', 'seafood']
  },
  {
    id: 'chocolate-chip-cookies',
    name: "Classic Chocolate Chip Cookies",
    ingredients: ["flour", "butter", "sugar", "eggs", "chocolate chips", "vanilla", "baking soda", "salt"],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Cream together 1 cup softened butter with 3/4 cup each brown and white sugar",
      "Beat in 2 eggs and 2 teaspoons vanilla extract",
      "In separate bowl, whisk together 2.25 cups flour, 1 tsp baking soda, and 1 tsp salt",
      "Gradually mix dry ingredients into wet ingredients",
      "Fold in 2 cups chocolate chips",
      "Drop rounded tablespoons of dough onto ungreased baking sheets",
      "Bake for 9-11 minutes until golden brown, cool on baking sheet for 5 minutes"
    ],
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 24,
    difficulty: 'Easy',
    cuisine: 'American',
    tags: ['dessert', 'baking', 'sweet', 'cookies']
  },
  {
    id: 'greek-salad',
    name: "Traditional Greek Salad",
    ingredients: ["tomatoes", "cucumber", "olives", "feta cheese", "onions", "olive oil", "lemon", "oregano"],
    instructions: [
      "Cut 4 large tomatoes into wedges",
      "Slice 1 cucumber into thick rounds",
      "Thinly slice 1/2 red onion",
      "Combine vegetables in a large bowl with 1/2 cup Kalamata olives",
      "Add 6 oz cubed feta cheese on top",
      "Whisk together 1/4 cup olive oil, 2 tablespoons lemon juice, and 1 tsp dried oregano",
      "Drizzle dressing over salad and toss gently",
      "Let sit for 10 minutes before serving to allow flavors to meld"
    ],
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Greek',
    tags: ['salad', 'healthy', 'vegetarian', 'fresh']
  }
];

// Helper function to find recipes by ingredients
export function findRecipesByIngredients(ingredients: string[]): Recipe[] {
  const normalizedInput = ingredients.map(ing => ing.toLowerCase().trim());
  
  return RECIPE_DATABASE
    .map(recipe => {
      const matchCount = recipe.ingredients.filter(ingredient =>
        normalizedInput.some(input => 
          ingredient.toLowerCase().includes(input) || 
          input.includes(ingredient.toLowerCase())
        )
      ).length;
      
      return { recipe, matchCount };
    })
    .filter(({ matchCount }) => matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(({ recipe }) => recipe);
}
