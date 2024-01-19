const CardRecipe = (props) => {
    return (
        <div className="shadow-md rounded-md relative border-black border-2">
            <img src={props.image} alt="" className="rounded-t-md object-cover" />
            <div className="min-h-[100px] p-2">
                <h1 className="text-lg font-medium">{props.title}</h1>
            </div>
        </div>
    )
}

export default CardRecipe