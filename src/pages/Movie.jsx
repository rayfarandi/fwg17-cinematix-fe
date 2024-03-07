import { useState } from "react";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import CardMovie from"../components/CardMovie"

function Movie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
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
            <p className="text-secondary font-semibold">Cari Event</p>
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
            <p className="text-secondary font-semibold">Filter</p>
            <div className="flex flex-col md:flex-row md:gap-x-8 md:items-center text-sm font-nunito font-semibold">
              <p className="py-2 px-4 bg-primary text-light rounded-[10px] cursor-pointer">
                Thriller
              </p>
              <p className="py-2 px-4 text-secondary cursor-pointer">Horror</p>
              <p className="py-2 px-4 text-secondary cursor-pointer">
                Romantic
              </p>
              <p className="py-2 px-4 text-secondary cursor-pointer">
                Adventure
              </p>
              <p className="py-2 px-4 text-secondary cursor-pointer">Sci-Fi</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-5">

          
          <CardMovie nameMovie="Black Widow" image="movie1" genre1="Action" genre2="Adventure"></CardMovie>
          <CardMovie nameMovie="The Withces" image="movie2" genre1="Comedy" genre2="Adventure"></CardMovie>
          <CardMovie nameMovie="Tenet" image="movie3" genre1="Action" genre2="Sci-Fi">
          </CardMovie>
          <CardMovie nameMovie="Spiderman" image="movie4" genre1="Action" genre2="Adventure">
          </CardMovie>
          
          
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
          <div className="max-sm:w-full flex flex-col gap-y-4 md:flex-row md:gap-x-4 max-sm:items-start max-sm:px-5">
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
