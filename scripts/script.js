const apiKey = 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77'

localStorage.setItem("recipeName", "")
localStorage.setItem("recipeUrl", "")
localStorage.setItem("movieName", "")
localStorage.setItem("movieUrl", "")

function generate() {
  let movieSelect = document.getElementById("movie-select")
  let recipeSelect = document.getElementById("recipe-select")
  movieSelect.setAttribute("style", "background-color: rgb(169, 169, 169);")
  recipeSelect.setAttribute("style", "background-color: rgb(169, 169, 169);")

  let cuisine = document.getElementById("recipe-drp-dwn").value
  let genre = document.getElementById("movie-drp-dwn").value

  if (genre === "none") {
    movieSelect.setAttribute("style", "background-color: rgb(255, 0, 0, .3);")
  }
  if (cuisine === "none") {
    recipeSelect.setAttribute("style", "background-color: rgb(255, 0, 0, .3);")
  } else {
    fetchRecipe(cuisine)
    fetchMovie()

    let preHeader = document.getElementById("pre-header")
    preHeader.style.display = "none"
    
    let cards = document.getElementsByClassName("results-cards")
    for (let i=0; i<cards.length; i++) {
      cards[i].style.display = "flex"    
    }

    let images = document.getElementsByClassName("result-image")
    for (let i=0; i<images.length; i++) {
      images[i].style.visibility = "visible"    
    }
    let preMovie = document.getElementById("pre-movie")
    let preRecipe = document.getElementById("pre-recipe")

    preMovie.innerHTML = localStorage.getItem("movieName")
    preMovie.setAttribute("href", localStorage.getItem("movieUrl"))

    preRecipe.innerHTML = localStorage.getItem("recipeName")
    preRecipe.setAttribute("href", localStorage.getItem("recipeUrl"))
  }
}
  
async function fetchRecipe(cuisine) {
  let url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&cuisineType=${cuisine}&random=true`
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

    let recipeImage = document.getElementById("recipe-image")
    let recipeLabel = document.getElementById("label")
    let recipeCalories = document.getElementById("calories")
    let recipeTime = document.getElementById("time")
    let recipeLink = document.getElementById("recipe-link")

    recipeImage.setAttribute("src", selectedRecipe.image)
    recipeLabel.innerHTML = selectedRecipe.label
    recipeCalories.innerHTML = `Calories: ${parseInt(selectedRecipe.calories)}`
    recipeTime.innerHTML = `Prep time: ${selectedRecipe.totalTime} minutes`
    recipeLink.setAttribute("href", selectedRecipe.url)

    localStorage.setItem("recipeName", selectedRecipe.label)
    localStorage.setItem("recipeUrl", selectedRecipe.url)
  } catch (error) {
    console.error(error);
  }
}


async function fetchMovie() {
  //let listIndex = Math.floor(Math.random() * movieLists.length)
  //let listType = movieLists[listIndex]
  let genre = document.getElementById("movie-drp-dwn").value
  const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre}/`;
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

    let movies = result.results
    let movieIndex = Math.floor(Math.random() * movies.length)
    let selectedMovie = movies[movieIndex]
    let imdbID = selectedMovie.imdb_id
    
    const imdbURL = `https://moviesminidatabase.p.rapidapi.com/movie/id/${imdbID}/`
    const imdbOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {
      const imdbResponse = await fetch(imdbURL, imdbOptions);
      const imdbResult = await imdbResponse.json();

      let movieResult = imdbResult.results
      let movieImage = document.getElementById("movie-image")
      let movieTitle = document.getElementById("title")
      let movieYear = document.getElementById("year")
      let movieRating = document.getElementById("rating")
      let movieTrailer = document.getElementById("movie-trailer")

      movieImage.setAttribute("src", movieResult.image_url)
      movieTitle.innerHTML = movieResult.title
      movieYear.innerHTML = movieResult.year
      movieRating.innerHTML = movieResult.content_rating
      movieTrailer.setAttribute("href", movieResult.trailer)

      localStorage.setItem("movieName", movieResult.title)
      localStorage.setItem("movieUrl", movieResult.trailer)
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
	  console.error(error);
  }
}

function toggleVisible() {
  let previous = document.getElementById("previous")
  previous.classList.toggle("previous-visible")
  previous.classList.toggle("previous-hidden")
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
