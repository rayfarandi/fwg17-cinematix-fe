import { useState,useEffect } from "react";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import CardMovie from"../components/CardMovie"
import Loading from "../components/Loading";
import axios from "axios";

function Movie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false)
  const [movies, setMovies] = useState([{}])
  const [search_movie,setSearchMovie] = useState("")
  const [genre, setGenre] = useState("")
  const [isGenre, setIsGenre] = useState(false)
  const [loadingMovie,setLoadingMovie] = useState(true)
  const [errorMovie,setErrorMovie] = useState(false)

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    getMovie()
  },[])

 
  const getMovie = async () => {
    setLoadingMovie(true)
    try{
      const resAll = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies`, {params:{
       status: "now airing"
     }})
      if(resAll.data.success && resAll.data.results.length === 0){ //jika api mengembalikan aray kosong
        setErrorMovie("All movie not Found")
      }else{
        setLoadingMovie(false)
        setMovies(resAll.data.results)
      }
    }catch(error){
      console.error("no Movie",error)
      setErrorMovie("Failed to fatch get movie") // jika link or endpoint tidak berfungsi
    }
    setLoadingMovie(false)
  }


  const search = async(e) =>{
    e.preventDefault()
    setLoadingMovie(true)
    try{
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies`, {params:{
        search : search_movie,
        status: "now airing"
      }})
      if (res.data.results.length === 0 ){
        setErrorMovie("No movie found")
      } else{
        setMovies(res.data.results)
        setErrorMovie(null)
      }
    }catch(error){
      console.error("error searching movies",error)
    }
    setLoadingMovie(false)
  }

  const filterByGenre = async (selectedGenre) => {
    setLoadingMovie(true)
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies`, {params:{
        filter: selectedGenre, 
        status: "now airing" 
      }})
      if (res.data.results.length === 0 ){
        setErrorMovie("No movie found")  
      }else{
        setMovies(res.data.results)
        setErrorMovie(null)
      }
    } catch (error) {
      console.error("Error filtering movies by genre:", error)
    }
    setLoadingMovie(false)
  }

  const submitGenre = (selectedGenre) => {
    setGenre(selectedGenre);
    setIsGenre(false);
    filterByGenre(selectedGenre);
  }
  
  
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block lg:w-full lg:h-[426px] lg:bg-[url('https://res.cloudinary.com/dgktyg96c/image/upload/v1709686081/aveng_9s0mmmbrztt.png')] px-11 xl:px-[130px] font-mulish text-light">
        <div className="h-full flex flex-col justify-center w-[50%]">
          <p className="text-lg">LIST MOVIE OF THE WEEK</p>
          <p className="text-5xl leading-[70px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
        </div>
        <div className="w-full flex justify-center mt-[-27px]">
          <img src={getImageUrl("paginate-hero", "svg")} alt="paginate-hero" />
        </div>
      </header>
      <section
        className="pt-6 md:pt-10 lg:pt-14 pb-[55px] px-5 md:px-11 xl:px-[130px] font-mulish"
        id="movies"
      >
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-secondary">Cari Event</p>
            <form onSubmit={search} className="relative">
              <input
                type="text"
                name="search_movie"
                value={search_movie}
                onChange={(e) => setSearchMovie(e.target.value)}
                className="border border-[#DEDEDE] py-4 md:py-5 pl-16 pr-[18px] w-full md:w-[340px] rounded-sm outline-none placeholder:text-[#A0A3BD] placeholder:max-sm:text-sm"
                placeholder="New Born Expert"
              />
              <button>
              <img
                src={getImageUrl("Search", "svg")}
                alt="icon"
                className="absolute top-5 md:top-6 left-5"
              />
              </button>
            </form>
          </div>
          
          <div className="hidden md:flex flex-col gap-y-4 lg:gap-y-7">
            <p className="text-secondary font-semibold">Filter</p>
            <div className="flex flex-col md:flex-row md:gap-x-8 md:items-center text-sm font-nunito font-semibold">
              <button
                className={`py-2 px-4 ${
                  genre === "Thriller"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Thriller")}
              >
                Thriller
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Horror"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Horror")}
              >
                Horror
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Romantic"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Romantic")}
              >
                Romantic
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Adventure"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Adventure")}
              >
                Adventure
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Sci fi"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Sci-fi")}
              >
                Sci-Fi
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-1/4 relative z-10">
            <p className="md:text-[20px] font-semibold text-black">Filter</p>
            <div
              className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full"
              onClick={() => setIsGenre((state) => !state)}
            >
              <p className="text-xs lg:text-base text-secondary font-semibold">
                {genre}
              </p>
              <img src={getImageUrl("Forward", "svg")} alt="icon" />
            </div>
            {isGenre && (
              <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-24 drop-shadow-xl">
                <div className="flex flex-col gap-y-5">
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Thriller");
                      setGenre("Thriller");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Thriller
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Horror");
                      setGenre("Horror");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Horror
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Romantic");
                      setGenre("Romantic");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Romantic
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Adventure");
                      setGenre("Adventure");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Adventure
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Sci-Fi");
                      setGenre("Sci-Fi");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Sci-Fi
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
        
        
        {loadingMovie?(
          <div className="flex justify-center mt-10">
            <Loading/>
          </div>
        ): errorMovie?(<div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{errorMovie}</span>
        </div>
        ):(
          <>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-5">

          {movies && movies.map((item) => (
            <CardMovie
              key={String('movie' + item.id)}
              nameMovie={item.title}
              genre={item.genre}
              image={item.image}
              id={item.id}
            />
          ))}          
          </div>
          </>
        )}
          
          
        
      </section>
      <section className="pb-[63px] flex gap-x-5 justify-center font-nunito font-medium">
        <p className="text-light bg-primary rounded-full w-[40px] h-[40px] flex justify-center items-center">
          1
        </p>
        {/* <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          2
        </p>
        <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          3
        </p>
        <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          4
        </p> */}
        <p className="bg-primary rounded-full w-[40px] h-[40px] flex justify-center items-center">
          <img src={getImageUrl("arrow-right", "svg")} alt="arrow" />
        </p>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
        <div className="w-full h-[318px] bg-primary rounded-[20px] flex flex-col gap-y-4 md:gap-y-12 justify-center items-center">
          <p className="text-light text-xl md:text-3xl lg:text-5xl w-[80%] md:w-full text-center">
            Subscribe to our newsletter
          </p>
          <div className="flex flex-col max-sm:w-full gap-y-4 md:flex-row md:gap-x-4 max-sm:items-start max-sm:px-5">
            <input
              type="text"
              className="p-4 max-sm:w-full bg-primary outline-none border border-light rounded-[9px] text-light placeholder:text-light text-sm lg:text-base"
              placeholder="First Name"
            />
            <input
              type="text"
              className="p-4 max-sm:w-full bg-primary outline-none border border-light rounded-[9px] text-light placeholder:text-light text-sm lg:text-base"
              placeholder="Email Address"
            />
            <button
              type="text"
              className="p-4 max-sm:w-full bg-light outline-none border border-light rounded-[9px] text-primary font-bold focus:ring-2 focus:ring-slate-300 text-md lg:text-[18px]"
            >
              Subscribe Now
            </button>
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

export default Movie;
