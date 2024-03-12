import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMonth } from "../utils/getDate";

// import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import axios from "axios";
// import CinemaImg from "../components/CinemaImg";

function MovieDetail() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    getMovie()
    getCinema()
  },[])

  const {id} = useParams()
  const [movies, setMovies] = useState([{}])
  const getMovie = async () => {
     const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies/${id}`, {params:{
      status: "now airing"
    }})

    setMovies(res1.data.results)
  }

  const [cinema, setCinema] = useState({})
  const getCinema = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie-cinema/${id}`)
    setCinema(res.data.results)
  }

  let releaseDate = ''
  if(movies && movies.releaseDate){
    const str = movies?.releaseDate
    const x = getMonth(str)  + ' ' + Number(str.slice(5, 7)) + ', ' + str.slice(0, 4)
    releaseDate = x
  }

  const [cinemaId, setCinemaId] = useState()
  const [cinemaIndicator, setCinemaIndicator] = useState()
  const [cinemaLocation, setCineamaLocation] = useState({})
  const [movieTime, setMovieTime] = useState([{}])
  // const [movieCinema, setMovieCinema] = useState({})
  const getCinemaId = async (num, i) => {
    if(cinemaIndicator){
      document.getElementById(cinemaIndicator).className = 'flex items-center justify-center h-32 border-2 rounded-md md:w-1/4'
    }
    setCinemaId(num)
    document.getElementById(num).className = 'flex items-center justify-center h-32 border-2 rounded-md border-primary md:w-1/4'
    setCinemaIndicator(num)
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/cinema-location/${num}`)
    setCineamaLocation(res.data.results)
    const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie-time/${cinema?.movieCinemaId[i]}`)
    setMovieTime(res1.data.results)
    console.log(res1)
  }

  
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block w-full h-[415px] font-mulish text-light bg-[url('https://res.cloudinary.com/dgktyg96c/image/upload/v1709685875/sapiderment_fhxbe3gem.png')] relative bg-cover bg-center">
        <div className="w-full h-full  px-11 xl:px-[130px] absolute bg-black bg-opacity-40"></div>
      </header>
      <section className="px-5 md:px-11 xl:px-[130px] font-mulish lg:-top-40 lg:relative flex flex-col gap-y-7 mt-10">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-5">
          <img src={movies?.image} alt="movie" />
          <div className="flex flex-col justify-center gap-y-4 lg:justify-end">
            <p className="text-[2rem] text-dark font-bold">{movies?.title}</p>
            <div className="flex flex-row gap-x-2">
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                {movies.genre && movies?.genre[0]}
              </p>
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
              {movies.genre && movies?.genre[1]}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Release Date</p>
                <p className="text-[#121212]">{releaseDate}</p>
              </div>
              <div className="flex flex-col col-span-2 gap-y-2">
                <p className="text-sm text-[#8692A6]">Directed By</p>
                <p className="text-[#121212]">{movies?.director}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Duration</p>
                <p className="text-[#121212]">{movies?.duration}</p>
              </div>
              <div className="flex flex-col col-span-2 gap-y-2">
                <p className="text-sm text-[#8692A6]">Casts</p>
                <p className="text-[#121212]">
                {movies?.casts}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[#000]">Synopsis</p>
          <p className="text-[#A0A3BD] leading-8 lg:w-2/3">
            {movies?.sinopsis}
          </p>
        </div>
        <div>
          <p className="text-xl md:text-[2rem] text-[#121212] mb-5">
            Book Tickets
          </p>
          <div className="flex flex-col gap-y-4 md:flex-row md:items-end md:gap-x-4 lg:gap-x-[30px]">
            <div className="flex flex-col gap-y-4 md:w-1/4">
              <p className="md:text-[20px] font-semibold text-black">
                Chose Date
              </p>
              <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <div className="flex gap-x-4">
                  <img
                    src={getImageUrl("calendar", "svg")}
                    alt="icon"
                    className=""
                  />
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                    21/07/20
                  </p>
                </div>
                <img
                  src={getImageUrl("Forward", "svg")}
                  alt="icon"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4">
              <p className="md:text-[20px] font-semibold text-black">
                Chose Time
              </p>
              <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <div className="flex gap-x-4">
                  <img
                    src={getImageUrl("time", "svg")}
                    alt="icon"
                    className=""
                  />
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                    08 : 30 AM
                  </p>
                </div>
                <img
                  src={getImageUrl("Forward", "svg")}
                  alt="icon"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4">
              <p className="md:text-[20px] font-semibold text-black">
                Chose Location
              </p>
              <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <div className="flex gap-x-4">
                  <img
                    src={getImageUrl("location", "svg")}
                    alt="icon"
                    className=""
                  />
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                    Purwokerto
                  </p>
                </div>
                <img
                  src={getImageUrl("Forward", "svg")}
                  alt="icon"
                  className=""
                />
              </div>
            </div>
            <div className="md:w-[16%]">
              <div className="p-4 text-sm text-center rounded-md cursor-pointer text-light bg-primary">
                Filter
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div className="flex items-center self-start gap-x-7">
            <p className="md:text-[20px] text-[#121212] font-semibold">
              Choose Cinema
            </p>
            <p className="text-[18px] text-[#8692A6] font-bold">39 Result</p>
          </div>
          <div className="flex flex-col w-full gap-y-4 md:flex-row md:gap-x-4">
            {cinema && cinema.cinemaId && cinema.cinemaImage && cinema.cinemaId.map((x,i) => {
            return (
              <div key={x} id={x} className={`flex items-center justify-center h-32 border-2 rounded-md md:w-1/4`}>
                <button name="cinemaButton" onClick={()=>{getCinemaId(x, i)}} type="button" className="w-full h-full">
                  <div className="flex items-center justify-center w-full h-full p-7">
                    <img src={cinema.cinemaImage[i]} alt={cinema.cinemaImage[i]} />
                  </div>
                </button>
              </div>
            )
          })}     
          </div>
          <div className="flex justify-center font-medium gap-x-2 font-nunito">
            <p className="text-light bg-primary border border-primary rounded-lg w-[40px] h-[40px] flex justify-center items-center drop-shadow-xl">
              1
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              2
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              3
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              4
            </p>
          </div>
          <div>
            <Link
              to="/order"
              className="px-16 py-5 text-sm rounded-md text-light bg-primary justify-self: center focus:ring-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default MovieDetail;
