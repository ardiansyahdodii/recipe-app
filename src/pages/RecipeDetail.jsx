import { useParams } from "react-router-dom"

const RecipeDetail = () => {

    const {id} = useParams()
    return (
        <div>
            <h1>RecipeDetail</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default RecipeDetail