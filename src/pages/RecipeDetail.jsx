import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailRecipe } from "../utils/api"

const RecipeDetail = () => {

    const { id } = useParams()
    const [detailRecipe, setDetailRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState('')

    useEffect(() => {
        getDetailRecipe(id)
            .then((data) => {
                setDetailRecipe(data)
                setIngredients(data.extendedIngredients)
                setInstructions(data.instructions);
            })
    }, [id])
    // console.log(detailRecipe)
    return (
        <div>
            <h1 className="text-2xl font-bold px-5 mt-5">Recipe Detail</h1>
            <div className="flex justify-between mt-10">
                <div className="w-1/3 px-5">
                    <img src={detailRecipe.image} alt="" />
                </div>
                <div className="w-2/3 px-5">
                    <div>
                        <h1 className="text-3xl font-bold">{detailRecipe.title} <span className="text-2xl bg-yellow-500 px-2 rounded-md">{parseFloat(detailRecipe.spoonacularScore).toFixed(1)}</span></h1>
                        <p className="mt-5" dangerouslySetInnerHTML={{ __html: detailRecipe.summary }}></p>
                    </div>
                </div>
            </div>
            <div className="flex px-5 mt-5">
                <div className="w-2/6 mt-5">
                    <h1 className="text-xl font-bold mb-3 underline">Ingredients</h1>
                    {ingredients.map((ingredient, index) => (
                        <div key={ingredient.id} className="flex space-x-2 font-medium">
                            <div>{index + 1}.</div>
                            <div>{ingredient.original}</div>
                        </div>
                    ))}
                </div>
                <div className="w-4/6 mt-5 border-s-2 border-black px-5">
                    <h1 className="text-xl font-bold mb-3 underline">Instructions</h1>
                    <div dangerouslySetInnerHTML={{ __html: instructions.replaceAll('<p>', '<p class="mt-2">- ')}}>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeDetail