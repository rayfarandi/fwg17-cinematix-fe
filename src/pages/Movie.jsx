import { useState,useEffect } from "react";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import CardMovie from"../components/CardMovie"
import axios from "axios";

function Movie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false)
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    getMovie()
  },[])

  const [movies, setMovies] = useState([{}])
  const getMovie = async () => {
     const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies`, {params:{
      status: "now airing"
    }})

    setMovies(res1.data.results)
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
            <div className="relative">
              <input
                type="text"
                className="border border-[#DEDEDE] py-4 md:py-5 pl-16 pr-[18px] w-full md:w-[340px] rounded-sm outline-none placeholder:text-[#A0A3BD] placeholder:max-sm:text-sm"
                placeholder="New Born Expert"
              />
              <img
                src={getImageUrl("Search", "svg")}
                alt="icon"
                className="absolute top-5 md:top-6 left-5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 lg:gap-y-7">
            <p className="font-semibold text-secondary">Filter</p>
            <div className="flex flex-col text-sm font-semibold md:flex-row md:gap-x-8 md:items-center font-nunito">
              <p className="py-2 px-4 bg-primary text-light rounded-[10px] cursor-pointer">
                Thriller
              </p>
              <p className="px-4 py-2 cursor-pointer text-secondary">Horror</p>
              <p className="px-4 py-2 cursor-pointer text-secondary">
                Romantic
              </p>
              <p className="px-4 py-2 cursor-pointer text-secondary">
                Adventure
              </p>
              <p className="px-4 py-2 cursor-pointer text-secondary">Sci-Fi</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
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
      </section>
      <section className="pb-[63px] flex gap-x-5 justify-center font-nunito font-medium">
        <p className="text-light bg-primary rounded-full w-[40px] h-[40px] flex justify-center items-center">
          1
        </p>
        <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          2
        </p>
        <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          3
        </p>
        <p className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          4
        </p>
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
