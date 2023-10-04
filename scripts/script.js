const movieAPI = "c2892f35b3b0accbbc6178b362b1a1f5"
const recipeAPI = "cca843b0a3msh3bae8af4ca13636p1832e0jsnf296ec4e2a77"

async function fetchRecipeAPI() {
    const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies';
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
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}