import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import Slider from "../components/Slider";

import axios from "axios";

function Home() {
    const [isDropdownShown, setIsDropdownShow] = useState(false)
    const [movies, setMovies] = useState([])
    const [movieAir,setMovieAir] =useState([])
   
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getMovies()
    getMovieAir()
  }, [])

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/movies`,
        { params: { status: "coming soon" } }
      )
      setMovies(res.data.results)
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }
  const getMovieAir = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/movies`,
        { params: { status: "now airing" } }
      )
      setMovieAir(res.data.results)
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }
 
    return (
        <>
            <Navbar isClick={() => setIsDropdownShow(true)} />
            <header className="font-mulish gap-[20px] h-screen flex md:flex-row flex-col">
                <div className="flex items-center justify-center flex-1 ">
                    <div className="w-[70%] flex flex-col justify-center gap-2">
                        <span className="text-primary font-bold text-[18px]">MOVIE TICKET PURCHASES #1 IN INDONESIA</span>
                        <span className="font-bold text-[24px] md:text-[36px]" >Experience the Magic of Cinema: Book Your Tickets Today</span>
                        <span className="text-[#4F5665] text-[16px]">Sign up and get the ticket with a lot of discount</span>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 ">
                    <div className="max-w-[70%] flex flex-col gap-[50px]">
                        <div className="grid grid-cols-2 gap-5 ">

                            <div><img src={getImageUrl("home1", "png")} alt="home" className="rounded-t-[20px]  w-[130px] md:w-[200px] md:h-[180px] h-[110px] " /></div>
                            <div><img src={getImageUrl("home3", "png")} alt="home" className="rounded-t-[20px] -mb-[50px]  w-[130px] md:w-[200px] md:h-[270px] h-[200px]" /></div>

                        </div>
                        <div className="grid grid-cols-2 gap-5 ">
                            <div><img src={getImageUrl("home2", "png")} alt="home" className="-mt-[70px]  w-[130px] md:w-[200px] md:h-[270px] h-[200px] rounded-b-[20px]" /></div>
                            <div className="flex"><img src={getImageUrl("home4", "jpeg")} alt="home" className=" self-end rounded-b-[20px] w-[130px] md:w-[200px] md:h-[180px] h-[110px]
                                0px]" /></div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="font-mulish my-[50px]  flex justify-center px-5 md:px-11 xl:px-[130px]">
                <div className="gap-[20px] flex flex-col ">
                    <div className="flex items-center justify-start ">
                        <div className="gap-[20px] flex flex-col">
                            <span className="text-primary text-[18px] font-bold">WHY CHOOSE US</span>
                            <span className="text-[32px]">Unleashing the Ultimate Movie Experience</span>
                        </div>
                    </div>
                    <div className="gap-[20px] flex md:flex-row flex-col">
                        <div className="gap-[10px] flex-1 flex flex-col">
                            <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#9BBEC8]"><img className="" src={getImageUrl("shield", "svg")} alt="home" /></div>
                            <span className="font-bold">Guaranteed</span>
                            <span className="text-[#4F5665] text-[16px]">We provide a full guarantee for every ticket purchase through our application. Your trust means the world to us, and we are committed to providing a satisfying experience every time.</span>
                        </div>
                        <div className="gap-[10px] flex-1 flex flex-col">
                            <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#9BBEC8]"><img className="" src={getImageUrl("checklistBlue", "svg")} alt="home" /></div>
                            <span className="font-bold">Affordable</span>
                            <span className="text-[#4F5665] text-[16px]">Get a great movie watching experience at affordable prices through our app. Enjoy quality entertainment at pocket-friendly prices only on our application</span>
                        </div>
                        <div className="gap-[10px] flex-1 flex flex-col">
                            <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#9BBEC8]"><img className="" src={getImageUrl("chatBlue", "svg")} alt="home" /></div>
                            <span className="font-bold">24/7 Customer Support</span>
                            <span className="text-[#4F5665] text-[16px]">There is 24/7 customer support available through our app to help you with questions, technical issues or other assistance regarding ticket purchases. Our team is ready to help you whenever needed.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gap-[20px] flex flex-col  pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish home-scrollbar">
                <div className="flex justify-center ">

                    <div className=" md:max-w-[50%] flex flex-col items-center gap-[10px]">
                        <span className="text-[18px] text-primary font-bold">MOVIES</span>
                        <span className="text-center text-[32px] text-[#4F5665]">Exciting Movies That Should Be Watch Today</span>
                    </div>
                </div>
                
                <Slider data={movieAir}/>

                

                <div className="flex justify-center ">
                    <Link
                        to="/movie"
                        className="flex gap-[5px] text-primary hover:text-secondary"
                    >
                        View All <img src={getImageUrl("arrow-right-primary", "svg")}
                            alt="logo" />
                    </Link>
                </div>
            </section>

            <section className="gap-[20px] flex flex-col pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
                <div className="flex items-center justify-between ">

                    <div className="gap-[10px] flex flex-col">
                        <span className="text-primary text-[16px] font-bold">UPCOMING MOVIES</span>
                        <span className="text-[28px]">Exciting Movie Coming Soon</span>
                    </div>
                    
                </div>
                <Slider data={movies}
                    
                />
            </section>

            <section className="font-mulish pb-[63px] px-5 md:px-11 xl:px-[130px]">

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

export default Home;
