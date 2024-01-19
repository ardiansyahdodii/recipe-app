const Category = () =>{
    return (
        <div className="mt-5 p-2">
            <h1 className="text-2xl font-bold">Category</h1>
            <div className="flex space-x-4 mt-5">
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">All</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Breakfast</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Lunch</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Dinner</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Dessert</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Drinks</div>
                <div className="flex justify-center items-center text-lg font-medium w-24 h-8 bg-slate-300 rounded-lg">Snack</div>
            </div>
        </div>
    )
}

export default Category