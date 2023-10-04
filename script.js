var MovieAPI = "c2892f35b3b0accbbc6178b362b1a1f5"
var recipeAPI = "cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77"

//getting data from movie api
function getMovie() {
    fetch("'https://api.themoviedb.org/3/movie/11?q=" + MovieAPI)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}

