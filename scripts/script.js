const movieAPI = "c2892f35b3b0accbbc6178b362b1a1f5"
const recipeAPI = "cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77"


async function fetchMovieApi() {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&append_to_response=images`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjg5MmYzNWIzYjBhY2NiYmM2MTc4YjM2MmIxYTFmNSIsInN1YiI6IjY1MWI1MjMzOTNiZDY5MDBjNGUwMTM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hY-js6qGCZRuB4lD__sHTf8hkDXToeHLRxyye_fvc-4'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// authentication for movie api
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjg5MmYzNWIzYjBhY2NiYmM2MTc4YjM2MmIxYTFmNSIsInN1YiI6IjY1MWI1MjMzOTNiZDY5MDBjNGUwMTM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hY-js6qGCZRuB4lD__sHTf8hkDXToeHLRxyye_fvc-4'
//   }
// };
// test for working url
// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

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

// fetchMovieApi(); //display in the console
