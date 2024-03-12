/* eslint-disable react/prop-types */
// import getImageUrl from "../utils/imageGet";
import { Link } from "react-router-dom";
const CardMovie=({nameMovie,genre,image,id})=>{
    
    return(
        <div className="flex flex-col gap-y-4">

            <div className="relative w-56 rounded-md h-fit">
            <img
                src={image}
                alt="movie"
                className="w-[264] h-[405] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-0 opacity-0 gap-y-3 hover:opacity-100 hover:opac hover:bg-opacity-40">
                <Link
                to={`/movie/${id}`}
                className="w-40 p-3 text-sm text-center border rounded-md text-light border-light focus:ring-2 "
                >
                Details
                </Link>
                <Link
                to="/movie/1"
                className="w-40 p-3 text-sm text-center rounded-md text-light bg-primary focus:ring-2 "
                >
                Buy Ticket
                </Link>
            </div>
            </div>
            <p className="text-2xl font-semibold text-dark">{nameMovie}</p>
            <div className="flex flex-row gap-x-2">
            <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                {genre && genre[0]}
            </p>
            <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                {genre && genre[1]}
            </p>
            </div>
        </div>
    )
}
export default CardMovie