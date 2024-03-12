/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import { getMonth } from "../utils/getDate";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiCalendar, FiClock  } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DropdownMobile from "../components/DropdownMobile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOrder } from "../redux/reducer/order";

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

  const [cinemaIndicator, setCinemaIndicator] = useState()
  const [cinemaLocation, setCineamaLocation] = useState({})
  const [movieTime, setMovieTime] = useState([{}])
  const [choosedLocation, setChoosedLocation] = useState('---------')
  const [choosedDate, setChoosedDate] = useState('---------')
  const [choosedTime, setChoosedTime] = useState('---------')

  const [movieCinemaData, setMovieCinemaData] = useState({})
  const getCinemaId = async (num, i, data) => {
    setMovieCinemaData(data)
    setChoosedLocation('---------')
    setChoosedDate('---------')
    setChoosedTime('---------')
    if(cinemaIndicator){
      document.getElementById(cinemaIndicator).className = 'flex items-center justify-center h-32 border-2 rounded-md md:w-1/4'
    }
    document.getElementById(num).className = 'flex items-center justify-center h-32 border-2 rounded-md border-primary md:w-1/4'
    setCinemaIndicator(num)
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/cinema-location/${num}`)
    setCineamaLocation(res.data.results)
    const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie-time?movieCinemaId=${cinema?.movieCinemaId[i]}`)
    setMovieTime(res1.data.results)
  }

  const [listLocation, setListLocation] = useState(false)
  const [cinemaLocationId, setCinemaLocationId] = useState()
  const showLocation = (x, id) => {
    if(!listLocation){
      setListLocation(true)
    }else{
      setListLocation(false)
    }
    if(x){
      setChoosedLocation(x)
      setCinemaLocationId(id)
    }
  }
  
  const [dateId, setDateId] = useState()
  const [listDate, setListDate] = useState(false)
  const [time, setTime] = useState([{}])
  const showDate = async (x, id) => {
    if(!listDate){
      setListDate(true)
    }else{
      setListDate(false)
    }
    if(x){
      setChoosedTime('---------')
      setChoosedDate(x)
      setDateId(id)
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/airing-time-date?dateId=${id}`)
      setTime(res.data.results)
    }
  }
  
  const [timeId, setTimeId] = useState()
  const [listTime, setListTime] = useState(false)
  const showTime = (x, id) => {
    if(!listTime){
      setListTime(true)
    }else{
      setListTime(false)
    }
    if(x){
      setChoosedTime(x)
      setTimeId(id)
    }
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getDataOrder = async () => {

    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/airing-time-date-id?airingTimeId=${timeId}&dateId=${dateId}`)
    const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movie-time-id?airingTimeDateId=${res.data.results.id}&movieCinemaId=${movieCinemaData.movieCinemaId}`)


    const data = {
      title: movies?.title,
      genre: movies?.genre,
      time: choosedTime,
      cinemaName: movieCinemaData.cinemaName,
      cinemaImage: movieCinemaData.cinemaImage,
      date: choosedDate,
      movieTimeId: res1.data.results.id,
      cinemaLocationId,
      movieImage: movies?.image
    }
    dispatch(setOrder(data))

    if(data.movieTimeId){
      navigate('/order')
    }
  }

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block w-full h-[415px] font-mulish text-light relative bg-cover bg-center" style={{backgroundImage: `url(${movies?.image})`}}>
        <div className="w-full h-full  px-11 xl:px-[130px] absolute bg-black bg-opacity-40"></div>
      </header>
      <section className="px-5 md:px-11 xl:px-[130px] font-mulish lg:-top-36 lg:relative flex flex-col gap-y-7 mt-10">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-5">
          <img className=" w-full h-full md:w-[20rem] md:h-[25rem]" src={movies?.image} alt="movie" />
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
              <div className="relative flex flex-col justify-center items-center py-4 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <button onClick={()=>{showDate()}} type="button" className="flex items-center justify-center w-full gap-4 px-4">
                  <FiCalendar/>
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                  {choosedDate}
                  </p>
                  <div className="flex items-end justify-end flex-1">
                    <MdKeyboardArrowDown className=""/>
                  </div>
                </button>
                  <div className={`${listDate ? '' : 'hidden'} bg-[#EFF0F6] flex flex-col gap-2 absolute top-10 rounded-md px-4 w-full py-4`}>
                    {movieTime && movieTime.map((x, i)=>{
                      let date
                      let parsed
                      let id
                      if(x?.airingTimeDate){
                        parsed = JSON.parse(x.airingTimeDate)
                        date = parsed[0].date
                        id = parsed[0].dateId
                      }
                      return(
                        <div className="w-full border-b text-secondary hover:border-b hover:border-slate-800" key={i}>
                          <button onClick={()=>{showDate(date, id)}}>{date}</button>
                        </div>
                      )
                    })}
                  </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4">
              <p className="md:text-[20px] font-semibold text-black">
                Chose Time
              </p>
              <div className="relative flex flex-col justify-center items-center py-4 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <button onClick={()=>{showTime()}} type="button" className="flex items-center justify-center w-full gap-4 px-4">
                  <FiClock/>
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                    {choosedTime}
                  </p>
                  <div className="flex items-end justify-end flex-1">
                    <MdKeyboardArrowDown className=""/>
                  </div>
                </button>
                  <div className={`${listTime ? '' : 'hidden'} bg-[#EFF0F6] flex flex-col gap-2 absolute top-10 rounded-md px-4 w-full py-4`}>
                    {time && time.map((x, i)=>{
                      let time
                      let id
                      if(x.airingTimeId){
                        time = x.airingTime
                        time = time.slice(11, 16)
                        id = x.airingTimeId
                      }
                      return(
                        <div className="w-full border-b text-secondary hover:border-b hover:border-slate-800" key={i}>
                          <button onClick={()=>{showTime(time, id)}}>{time}</button>
                        </div>
                      )
                    })}
                  </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4">
              <p className="md:text-[20px] font-semibold text-black">
                Chose Location
              </p>
              <div className="relative flex flex-col justify-center items-center py-4 bg-[#EFF0F6] rounded-md cursor-pointer w-full">
                <button type="button" onClick={()=>{showLocation()}} className="flex items-center justify-center w-full gap-4 px-4">
                  <SlLocationPin/>
                  <p className="text-xs font-semibold lg:text-base text-secondary">
                    {choosedLocation}
                  </p>
                  <div className="flex items-end justify-end flex-1">
                    <MdKeyboardArrowDown className=""/>
                  </div>
                </button>
                  <div className={`${listLocation ? '' : 'hidden'} bg-[#EFF0F6] flex flex-col gap-2 absolute top-10 rounded-md px-4 w-full py-4`}>
                    {cinemaLocation && cinemaLocation.location && cinemaLocation.location.map((x, i)=>{
                      const id = cinemaLocation.cinemaLocationId[i]
                      return(
                        <div className="w-full border-b text-secondary hover:border-b hover:border-slate-800" key={i}>
                          <button onClick={()=>{showLocation(x, id)}}>{x}</button>
                        </div>
                      )
                    })}
                  </div>
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
              const data = {
                movieCinemaId : cinema.movieCinemaId[i],
                cinemaName : cinema.cinemaName[i],
                cinemaImage : cinema.cinemaImage[i]
              }
            return (
              <div key={x} id={x} className={`flex items-center justify-center h-32 border-2 rounded-md md:w-1/4`}>
                <button name="cinemaButton" onClick={()=>{getCinemaId(x, i, data)}} type="button" className="w-full h-full">
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
            <button
              onClick={getDataOrder}
              className="px-16 py-5 text-sm rounded-md text-light bg-primary justify-self: center focus:ring-2"
            >
              Book Now
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

export default MovieDetail;
