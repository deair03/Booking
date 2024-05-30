function Cards({ restro })
{
    const { title, price,description,category,image,rating } = restro;

    return (
        <div className="mt-5 transition-all ease-in-out w-80 hover:scale-90 hover:cursor-pointer">
            <img className="object-cover w-full h-56 rounded-xl" src={image} alt="food_img" />
            <h2 className="mt-2 text-lg font-medium">{title}</h2>
            <div className="flex items-center gap-2 mb-2">
                <span>{rating.rate}</span><span>Rs.{price}</span></div>
            <span className="text-gray-500 ">{category}</span> <br />
            <span className="text-gray-500 ">{description}</span>
        </div>
    )
}

export default Cards;