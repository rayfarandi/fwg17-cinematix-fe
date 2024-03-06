import { useState } from "react";
import { Link } from "react-router-dom";

// import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";

function MovieDetail() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block w-full h-[415px] font-mulish text-light bg-[url('https://res.cloudinary.com/dgktyg96c/image/upload/v1709685875/sapiderment_fhxbe3gem.png')] relative bg-cover bg-center">
        <div className="w-full h-full  px-11 xl:px-[130px] absolute bg-black bg-opacity-40"></div>
      </header>
      <section className="px-5 md:px-11 xl:px-[130px] font-mulish lg:-top-40 lg:relative flex flex-col gap-y-7 mt-10">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-5">
          <img src={getImageUrl("movie4", "png")} alt="movie" />
          <div className="flex flex-col gap-y-4 justify-center lg:justify-end">
            <p className="text-[2rem] text-dark font-bold">Spiderman</p>
            <div className="flex flex-row gap-x-2">
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                Action
              </p>
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                Adventure
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Release Date</p>
                <p className="text-[#121212]">June 28, 2017</p>
              </div>
              <div className="flex flex-col gap-y-2 col-span-2">
                <p className="text-sm text-[#8692A6]">Directed By</p>
                <p className="text-[#121212]">Jon Watss</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Duration</p>
                <p className="text-[#121212]">2 hours 13 minutes </p>
              </div>
              <div className="flex flex-col gap-y-2 col-span-2">
                <p className="text-sm text-[#8692A6]">Casts</p>
                <p className="text-[#121212]">
                  Tom Holland, Michael Keaton, Robert Downey Jr
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[#000]">Synopsis</p>
          <p className="text-[#A0A3BD] leading-8 lg:w-2/3">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
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
                  <p className="text-xs lg:text-base text-secondary font-semibold">
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
                  <p className="text-xs lg:text-base text-secondary font-semibold">
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
                  <p className="text-xs lg:text-base text-secondary font-semibold">
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
              <div className="text-sm text-light bg-primary rounded-md p-4 text-center cursor-pointer">
                Filter
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 items-center">
          <div className="flex gap-x-7 items-center self-start">
            <p className="md:text-[20px] text-[#121212] font-semibold">
              Choose Cinema
            </p>
            <p className="text-[18px] text-[#8692A6] font-bold">39 Result</p>
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 w-full">
            <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("ebv.id", "svg")} alt="cinema" />
            </div>
            <div className="p-7 bg-primary border-2 border-primary rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("hiflix3", "svg")} alt="cinema" />
            </div>
            <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("CineOne", "svg")} alt="cinema" />
            </div>
            <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("ebv.id", "svg")} alt="cinema" />
            </div>
          </div>
          <div className="flex gap-x-2 justify-center font-nunito font-medium">
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
              className="text-sm text-light bg-primary py-5 px-16 justify-self: center rounded-md focus:ring-2"
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
