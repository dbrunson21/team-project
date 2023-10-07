const movieAPI = "c2892f35b3b0accbbc6178b362b1a1f5"
const recipeAPI = "cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77"

// authentication
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjg5MmYzNWIzYjBhY2NiYmM2MTc4YjM2MmIxYTFmNSIsInN1YiI6IjY1MWI1MjMzOTNiZDY5MDBjNGUwMTM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hY-js6qGCZRuB4lD__sHTf8hkDXToeHLRxyye_fvc-4'
  }
};

fetch('https://api.themoviedb.org/3/account/20523146', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//data for movie API
// async function fetchMovieApi() {
//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=${movieAPI}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok.");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

fetchMovieApi(); //display in the console

//event listener for recipe btn
