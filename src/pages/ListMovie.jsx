import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { SlPencil } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";


import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import getImageUrl from "../utils/imageGet";
import axios from "axios";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";


function ListMovie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [isYear, setIsyear] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [year, setYear] = useState('');
  const [date, setDate] = useState("Select month");
  
  const [movies, setMovies] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [page, setPage] = useState(1)
  const [pagesArr, setPagesArr] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  const [errMessage, setErrMessage] = useState(null)


  const [dataDate] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

  ]);
  const [dataYear] = useState([
    "2024",
    "2025",
    "2026",
    "2027",
    "2028"
  ]);



  

  const changePages = (page) => {
    setCurrentPage(page)
    setPage(page)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  
    async function getMovie() {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies`, {
            params: {
              page: currentPage,
              limit: 6
            },
          });
    
          if (response.data.results.length === 0) {
            throw new Error('No movies found.');
          }
    
          setMovies(response.data.results);
          setTotalPage(response.data.totalPage);
          setPagesArr(Array.from({ length: response.data.totalPage }, (_, i) => i + 1));
          setErrMessage(null)
        } catch (error) {
          console.error('Error fetching movies:', error);
          setMovies([])
          setTotalPage(0)
          setPagesArr([])
          setErrMessage('No movies found.')
        }
      }
    
      getMovie()
    }, [currentPage])

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <main className="py-10 px-11 xl:px-[130px] bg-[#F5F6F8] h-full font-mulish">
        <section className="flex flex-col w-full p-10 bg-light rounded-xl gap-y-10">
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
            <p className="text-2xl font-bold text-dark">List Movie</p>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
              <div className="relative flex flex-col gap-y-2">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-3 md:gap-x-6 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsyear((state) => !state)}
                >
                  <FiCalendar/>
                  <p className="font-semibold text-secondary">{date}</p>
                  <MdKeyboardArrowDown/>
                </div>
                {isYear && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataYear.map((x, i) => (
                        <p
                          className="font-semibold border-b text-secondary hover:border-b hover:border-slate-800"
                          key={i}
                          onClick={() => {
                            setYear(x);
                            setIsyear(false);
                            setIsDate((state) => !state);
                          }}
                        >
                          {x}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {isDate && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataDate.map((x, i) => (
                        <p
                          className="font-semibold border-b text-secondary hover:border-b hover:border-slate-800"
                          key={i}
                          onClick={() => {
                            setDate(x + ' ' + year);
                            setIsDate(false);
                          }}
                        >
                          {x}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/admin/addmovie"
                className="px-6 py-3 font-bold text-center rounded-lg bg-primary text-light focus:ring-2"
              >
                Add Movies
              </Link>
            </div>
          </div>
          <div className="overflow-x-scroll lg:overflow-x-clip">
            <div className="w-[57rem] lg:overflow-auto lg:w-full">
              <div>
                <div className="text-xs justify-between font-bold text-[#1F4173] text-center flex gap-3 border-b border-secondary pb-4">
                  <div className="flex items-center justify-center w-6">item</div>
                  <div className="flex items-center justify-center w-24">Thumbnail</div>
                  <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1">Movie Name</div>
                  <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1">Category</div>
                  <div className="flex items-center justify-center w-52 lg:w-0 lg:flex-1">Released Date</div>
                  <div className="flex items-center justify-center w-52 lg:w-0 lg:flex-1">Duration</div>
                  <div className="flex items-center justify-center w-32">Action</div>
                </div>
              </div>

              <div className="mt-4">  
                <div className="flex flex-col justify-between gap-3 text-sm text-center">
                {movies.map((movie, index) => (
                    <div key={index} className="flex justify-between gap-3 text-sm text-center">
                    <div className="text-[#1F4173] w-6 flex items-center justify-center">
                        {index + 1}
                    </div>
                    <div className="flex items-center justify-center w-24 rounded-lg">
                        <img src={movie.image} alt="Thumbnail" className="object-cover w-10 h-8 rounded-lg" />
                    </div>
                    <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1 text-primary">{movie.title}</div>
                    <div className="text-[#1F4173] flex w-60 lg:w-0 lg:flex-1 items-center justify-center">
                        {movie.genre && movie.genre.join(", ")}
                    </div>
                    <div className="text-[#1F4173] w-52 lg:w-0 lg:flex-1 flex items-center justify-center">
                    {(movie.releaseDate)?.toLocaleString().split('T')[0].split('-').reverse().join('-')}
                    </div>
                    <div className="text-[#1F4173] w-52 lg:w-0 lg:flex-1 flex items-center justify-center">
                        {movie.duration}
                    </div>
                    <div className="flex items-center justify-center w-32 gap-3">
                    <Link to={`/movie/${movie.id}`}>
                    <button className="flex items-center justify-center w-6 h-6 rounded-md bg-primary">
                        <IoEyeOutline className="text-white"/>
                    </button>
                    </Link>
                    
                        <button className="flex items-center justify-center w-6 h-6 rounded-md cursor-pointer bg-secondary">
                        <SlPencil className="text-white"/>
                    </button>
                    <button className="flex items-center justify-center w-6 h-6 rounded-md cursor-pointer bg-danger">
                      <GoTrash className="text-white"/>
                    </button>
                    </div>
                    </div>
                    ))}
                
              </div>
              </div>
            </div>
          </div>
          
        <div className="flex justify-center">
            <p className={`${errMessage ? 'block' : 'hidden'} md:-mt-[25px] -mt-[20px] w-fit text-center md:text-[16px]  text-[8px] justify-center absolute p-[5px] font-bold text-danger`}>{errMessage}</p>
        </div>
          
          
          
            <div className="flex justify-center mt-4font-medium gap-x-2 font-nunito">
            {/* Pagination */}
            <div className="flex-1 flex justify-center">
                <ul className="flex gap-5 items-center">
                {/* Previous data */}
                {currentPage !== 1 && (
                    <li>
                    <button onClick={() => changePages(currentPage - 1)} className="px-3 py-3 bg-primary border border-primary rounded-full">
                        Previou
                    </button>
                    </li>
                )}

                {/* Pagination numbers */}
                {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                    <button
                        onClick={() => changePages(page)}
                        className={`px-5 py-3 ${currentPage === page ? 'bg-primary border-primary' : 'text-[#A0A3BD] bg-[#E8E8E8]'} border rounded-full`}
                    >
                        {page}
                    </button>
                    </li>
                ))}

                {/* Next data */}
                {currentPage !== totalPage && (
                    <li>
                    <button onClick={() => changePages(currentPage + 1)} className="px-3 py-3 bg-primary border border-primary rounded-full">
                    Next
                    </button>
                    </li>
                )}
                </ul>
            </div>
        </div>
        
        </section>
      </main>
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default ListMovie