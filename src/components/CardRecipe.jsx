import { Link } from "react-router-dom"

const CardRecipe = (props) => {
    return (
        <Link to={`/recipe/${props.id}`} className="shadow-md rounded-md relative border-black border-2 group transition-all hover:scale-105 duration-300">
            <img src={props.image} alt="" className="rounded-t-md object-cover" />
            <div className="min-h-[100px] p-2">
                <h1 className="text-lg font-medium">{props.title}</h1>
            </div>
        </Link>
    )
}

export default CardRecipe