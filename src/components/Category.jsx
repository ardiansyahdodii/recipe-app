import { useState } from "react"

export const type = [
    { title: "All", value: "" },
    { title: "Breakfast", value: "breakfast" },
    { title: "Main Course", value: "main course" },
    { title: "Dessert", value: "dessert" },
    { title: "Drink", value: "drink" },
    { title: "Side dish", value: "side dish" },
    { title: "Salad", value: "salad" }

]
const Category = () => {

    const [typeActive, setTypeActive] = useState('')
    // const [category, setCategory] = useState([])



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
        </div>
    )
}

export default Category