// Hardcoded recipe data for demonstration purposes
const recipes = [
    // ... (your recipes with corrected commas)
    { name: "Caprese Salad", url: "https://www.thepioneerwoman.com/food-cooking/recipes/a10208/caprese-salad/" },
    { name: "Waffles", url: "https://www.spendwithpennies.com/fluffy-homemade-waffle-recipe/" },
    { name: "Breakfast Burrito", url: "https://www.onceuponachef.com/recipes/breakfast-burritos.html" }
    // Add more recipes as needed
];

function generateRandomRecipe() {
    const recipeText = document.getElementById("recipe-text");
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    recipeText.innerHTML = `<a href="${randomRecipe.url}" target="_blank">${randomRecipe.name}</a>`;
}