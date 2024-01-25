import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="text-4xl font-bold p-3">
            <Link to={"/"}>RecipeApp</Link>
        </div>
    )
}

export default Header