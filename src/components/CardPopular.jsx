const CardPopular = (props) => {
    return (
        <div className="shadow-md rounded-md relative border-black border-2">
            <img src={props.image} alt="" className="rounded-t-md object-cover" />
            <div className="min-h-[130px] p-2">
                <h1 className="text-lg font-medium">{props.title}</h1>
                <div className="absolute w-full p-2 bottom-0 right-0 ">
                    <div className="flex justify-between">
                        <p className="text-md">❤️ {props.like}</p>
                        <p>🕒 {props.ready} Minute</p>
                        <p className="text-md">🍽️ {props.type}</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-2 left-2 bg-amber-500 rounded-md px-1">
                ⭐{props.score.toFixed(1)}
            </div>
        </div>
    )
}

export default CardPopular