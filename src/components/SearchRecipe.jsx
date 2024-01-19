const SearchRecipe = () => {
    return (
        <div className="flex justify-center mt-5">
            <form action="" className="space-x-4">
                <input
                    type="text"
                    placeholder="Search Recipe"
                    className="border-2 border-black p-2 rounded-md w-96"
                />
                <button className="bg-blue-700 p-2 font-semibold rounded-md">Search</button>
            </form>
        </div>
    )
}

export default SearchRecipe