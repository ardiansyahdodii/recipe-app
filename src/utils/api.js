import axios from "axios"

const apiUrl = "https://api.spoonacular.com/recipes/"
const apiKey = "6064c226597547909405ef1cc71625ee"

export const getPopularRecipe = async () => {
    const popularRecipe = await axios.get(`${apiUrl}random?number=10&apiKey=${apiKey}`)
    // console.log(popularRecipe.data);
    return popularRecipe.data.recipes
}

export const getRecipesByType = async (type) => {
    const recipesByType = await axios.get(`${apiUrl}complexSearch?number=20&type=${type}&apiKey=${apiKey}`)
    // console.log(recipesByType.data.results);
    return recipesByType.data.results
}

export const getRecipeByName = async (type) => {
    const recipesByType = await axios.get(`${apiUrl}complexSearch?number=20&query=${type}&apiKey=${apiKey}`)
    // console.log(recipesByType.data.results);
    return recipesByType.data.results
}

export const getDetailRecipe = async (id) => {
    const detailRecipe = await axios.get(`${apiUrl}${id}/information?apiKey=${apiKey}`)
    // console.log(detailRecipe.data);
    return detailRecipe.data
}