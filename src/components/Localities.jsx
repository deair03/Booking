function Localities({info}){

    return(
        <div>
             <button className="w-full p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl">{info.locality}</button>

        </div>
    )
}

export default Localities;