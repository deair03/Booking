
import Localities from "./Localities";
import { restroCards } from "../data/restroCards";
import { useState } from "react";

function LocalitySection()
{
    const [locList] = useState(restroCards);
    const [filtLocList, setFilLocList] = useState(restroCards);
   
    return (
        <div>
            <h1 className="mt-16 mb-2 text-2xl font-semibold">Explore localities in and around Mumbai</h1>
            <button onClick={() => 
           {
            const aboveFour = locList.filter(loc => loc.info.avgRatingString > 4)
            const topFive = aboveFour.sort((item) => item.info.sla.deliveryTime).slice(0,5);
            setFilLocList(topFive);
           }
            } 
            className="p-3 my-2 transition-all ease-in-out bg-orange-400 border-2 hover:scale-95 rounded-2xl">Top 5 rating Location</button>
            <div className="grid grid-cols-4 gap-3">
                {
                    filtLocList.map(loc => <Localities key={loc.info.id} info={loc.info} />)

                }
            </div>
        </div>
    )
}

export default LocalitySection;

