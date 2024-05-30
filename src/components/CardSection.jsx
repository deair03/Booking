import Cards from "./Cards";
import { useState, useEffect } from "react";
import { fakeAPI } from "../data/restroCards";
function CardSection()
{
    const [city, setCity] = useState("Mumbai")
    const[ecommInfo, setEcommInfo] = useState([]);
    const [filteredRestro, setFilteredRestro] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        const data =await fetch(fakeAPI);
        const json = await data.json();
        setEcommInfo(json);
        setFilteredRestro(json);
    }
    return (
        <div>
            <h1 className="my-4 text-2xl font-semibold">Online delivery in {city}</h1>
            <div className="flex gap-3">
                <button onClick={() =>
                {
                    const aboveFour = ecommInfo.filter(res => res.rating.rate > 4)
                    setCity("Thane");
                    setFilteredRestro(aboveFour);
                }}
                    className="p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl">Above 4 star</button>

                <button onClick={() =>
                {
                    const belowThree = ecommInfo.filter(res => res.rating.rate < 3)
                    setFilteredRestro(belowThree);
                }} className="p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl">Below 3 star</button>

                <button onClick={() =>
                {
                    const belowTwo = ecommInfo.filter(res => res.rating.rate < 2)
                    setFilteredRestro(belowTwo);
                }} className="p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl">Below 2 star</button>

                <button onClick={() =>
                {

                    setFilteredRestro(ecommInfo);
                }}
                    className="p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl">Reset</button>
            </div>
            <div className="grid grid-cols-4 gap-3">

                {
                    filteredRestro.map((restro) => <Cards key={restro.id} restro={restro} />)
                }

            </div>

        </div>

    )
}

export default CardSection;

//img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restroCards[0].info.cloudinaryImageId}
//name={restroCards[0].info.name} rating={restroCards[0].info.avgRatingString} locality={restroCards[0].info.locality} cuisines={restroCards[0].info.cuisines} delTime={restroCards[0].info.slaString}