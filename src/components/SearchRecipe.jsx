import { useContext, useState } from "react"
import { searchContext } from "../Context/SearchContext"
import { useNavigate } from "react-router-dom"

const SearchRecipe = () => {
    const [valueSearch, setValueSearch] = useState("")
    const {setSearchType} = useContext(searchContext)
    const navigate = useNavigate()

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        setSearchType(valueSearch)
        navigate(`/search/${valueSearch}`)
    }
    return (
        <div className="flex justify-center mt-5">
            <form onSubmit={handleSubmitSearch} className="space-x-4">
                <input
                    type="text"
                    placeholder="Search Recipe"
                    value={valueSearch}
                    onChange={(e) => setValueSearch(e.target.value)}
                    className="border-2 border-black p-2 rounded-md w-96"
                />
                <button className="bg-blue-700 p-2 font-semibold rounded-md">Search</button>
            </form>
        </div>
    )
}

export default SearchRecipe