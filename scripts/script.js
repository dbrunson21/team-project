const apiKey = 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77'
const movieLists = ["most_pop_movies", "most_pop_series", "top_rated_series_250"]

async function fetchRecipe() {
  let cuisine = document.getElementById("recipe-drp-dwn").value
  let url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&cuisineType=${cuisine}`
  const options = {
    method: 'GET',
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': apiKey,
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

async function fetchMovie() {
  let listIndex = Math.floor(Math.random() * movieLists.length)
  let listType = movieLists[listIndex]
  let genre = document.getElementById("movie-drp-dwn").value
  const url = `https://moviesdatabase.p.rapidapi.com/titles/random?genre=${genre}&list=${listType}`;
  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77',
		  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	  }
  };

  try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);

    let movies = result.results
    let movieIndex = Math.floor(Math.random() * movies.length)
    let selectedMovie = movies[movieIndex]
    
    let movieDetails = {title:selectedMovie.titleText.text, image:selectedMovie.primaryImage.url, year:selectedMovie.releaseYear.year}
    console.log(movieDetails)
  } catch (error) {
	  console.error(error);
  }
}

const recipeButton = document.getElementById("recipe-btn");
const movieButton = document.getElementById("movie-btn");

recipeButton.addEventListener("click", fetchRecipe);
movieButton.addEventListener("click", fetchMovie);

async function fetchImages() {
  let url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public`
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
    let indexes = []
    
    while (indexes.length < 5) {
      let index = Math.floor(Math.random() * recipes.length)
      if (indexes.includes(index)) {
        null
      } else {
        indexes.push(index)
      }
    }  
    console.log(indexes)
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("load", fetchImages)

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
