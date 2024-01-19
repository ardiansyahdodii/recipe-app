import { useEffect, useState } from "react"
import CardRecipe from "./CardRecipe"
import { getRecipesByType } from "../utils/api"

export const type = [
    { title: "All", value: "" },
    { title: "Breakfast", value: "breakfast" },
    { title: "Main Course", value: "main course" },
    { title: "Dessert", value: "dessert" },
    { title: "Drink", value: "drink" },
    { title: "Side dish", value: "side dish" },
    { title: "Salad", value: "salad" },
    { title: "Snack", value: "snack" },
    { title: "Soup", value: "soup" },

]
const Category = () => {

    const [typeActive, setTypeActive] = useState('')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipesByType(typeActive)
            .then((data) => {
                setRecipes(data)
            })
    }, [typeActive])

    // console.log(recipes)
    return (
        <div className="mt-5 p-2">
            <h1 className="text-2xl font-bold">Category</h1>
            <div className="flex space-x-4 mt-5">
                {type.map((item) => (
                    <div
                        key={item.title}
                        className={`${typeActive === item.value && "bg-slate-500"} flex justify-center items-center text-lg font-medium px-3 h-8 bg-slate-300 rounded-lg cursor-pointer`}
                        onClick={() => setTypeActive(item.value)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-5 mt-5">
                {recipes.map((recipe) => (
                    <CardRecipe key={recipe.id} title={recipe.title} image={recipe.image} />
                ))}
            </div>

        </div>
    )
}

export default Category