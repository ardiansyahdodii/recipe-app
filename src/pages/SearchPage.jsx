import { useContext, useEffect, useState } from "react"
import CardRecipe from "../components/CardRecipe"
import { searchContext } from "../Context/SearchContext"
import { getRecipeByName } from "../utils/api"

const SearchPage = () => {
    const [recipes, setRecipes] = useState([])
    const { searchType } = useContext(searchContext)

    useEffect(() => {
        getRecipeByName(searchType)
            .then((data) => {
                setRecipes(data)
            })

    }, [searchType])

    console.log(recipes)

    return (
        <div>
            <h3 className="text-xl font-bold mt-5">Kata kunci : {searchType}</h3>
            <div className="grid grid-cols-5 gap-5 mt-5">
                {recipes.map((recipe) => (
                    <CardRecipe key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage