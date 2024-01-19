import { useContext, useState } from "react"
import { searchContext } from "../Context/SearchContext"

const SearchRecipe = () => {
    const [valueSearch, setValueSearch] = useState("")
    const {setSearchType} = useContext(searchContext)

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        setSearchType(valueSearch)
    }

    // console.log(searchType);
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