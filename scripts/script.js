const movieAPI = "c2892f35b3b0accbbc6178b362b1a1f5"
const recipeAPI = "cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77"

async function fetchRecipe() {
  let cuisine = document.getElementById("recipe-drp-dwn").value
  let url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&cuisineType=${cuisine}`
  const options = {
    method: 'GET',
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': recipeAPI,
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    let recipes = result.hits
    let recipeIndex = Math.floor(Math.random() * recipes.length)
    let selectedRecipe = recipes[recipeIndex].recipe

    ///Object for recipe details
    ///Name = recipeDetails.name
    ///calories = recipeDetails.calories
    ///image = recipeDetails.image
    ///link = recipeDetails.link
    ///cook time = recipeDetails.time
    let recipeDetails = {name:selectedRecipe.label, calories:selectedRecipe.calories, image:selectedRecipe.image, link:selectedRecipe.url, time:selectedRecipe.totalTime}

    console.log(selectedRecipe, recipeDetails)
  } catch (error) {
    console.error(error);
  }
}

const recipeButton = document.getElementById("recipe-btn");
recipeButton.addEventListener("click", fetchRecipe);


$(document).ready(function () {
  $(".carousel").carousel({
    indicators: true,
  });
});
$(document).ready(function () {
  $(".modal").modal();
});

$(document).ready(function () {
  $("select").formSelect();
});
