const apiKey = 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77'
const movieLists = ["most_pop_movies", "most_pop_series", "top_rated_series_250"]

function generate() {
  let movieSelect = document.getElementById("movie-select")
  let recipeSelect = document.getElementById("recipe-select")
  movieSelect.setAttribute("style", "background-color: rgb(169, 169, 169);")
  recipeSelect.setAttribute("style", "background-color: rgb(169, 169, 169);")

  let cuisine = document.getElementById("recipe-drp-dwn").value
  let listIndex = Math.floor(Math.random() * movieLists.length)
  let listType = movieLists[listIndex]
  let genre = document.getElementById("movie-drp-dwn").value

  if (genre === "none") {
    movieSelect.setAttribute("style", "background-color: rgb(255, 0, 0, .8);")
  }
  if (cuisine === "none") {
    recipeSelect.setAttribute("style", "background-color: rgb(255, 0, 0, .8);")
  } else {
    fetchRecipe(cuisine)
    fetchMovie()
  }
}
  
async function fetchRecipe(cuisine) {
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
    let recipeDetails = [selectedRecipe.label, selectedRecipe.calories, selectedRecipe.image, selectedRecipe.url, selectedRecipe.totalTime]

    let recipeImage = document.getElementById("recipe-image")
    recipeImage.setAttribute("src", recipeDetails[2])
    recipeImage.style.visibility = "visible";
  } catch (error) {
    console.error(error);
  }
}


async function fetchMovie() {
  let listIndex = Math.floor(Math.random() * movieLists.length)
  let listType = movieLists[listIndex]
  let genre = document.getElementById("movie-drp-dwn").value
  const url = `'https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/'`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);

    //let movies = result.results
    //let movieIndex = Math.floor(Math.random() * movies.length)
    //let selectedMovie = movies[movieIndex]
    //
    //let movieDetails = [selectedMovie.titleText.text, selectedMovie.primaryImage.url, selectedMovie.releaseYear.year]

   //let movieImage = document.getElementById("movie-image")
   //movieImage.setAttribute("src", movieDetails[2])
   //movieImage.style.visibility = "visible";
  } catch (error) {
	  console.error(error);
  }
}

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
