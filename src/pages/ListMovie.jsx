import { useState } from "react";
import { Link } from "react-router-dom";
import { SlPencil } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";

import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import getImageUrl from "../utils/imageGet";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";


function ListMovie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [isYear, setIsyear] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [year, setYear] = useState('');
  const [date, setDate] = useState("Select month");
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

//   const [searchParams] = useSearchParams({});
//   const getMovieUrl =
//     import.meta.env.VITE_BACKEND_HOST + "/movie?" + searchParams.toString();
//   const [dataMovie, setDataMovie] = useState([]);
//   const [metaMovie, setMetaMovie] = useState([]);
 
//   useEffect(() => {
//     getAllMovie(token, getMovieUrl)
//       .then((res) => {
//         setDataMovie(res.data.data);
//         setMetaMovie(res.data.meta);
//       })
//       .catch(() => {
//         setDataMovie([]);
//       });
//   }, [searchParams]);

//   const navigate = useNavigate();
//   const pagination = (page) => {
//     if (page !== metaMovie.page) {
//       // const params = searchParams.toString().slice(0, 1) + page;
//       navigate("/admin/movie?page=" + page);
//     }
//   };

//   const renderButtons = () => {
//     return Array.from({ length: metaMovie.total_page }, (_, index) => (
//       <button
//         onClick={() => {
//           pagination(index + 1);
//         }}
//         key={index}
//         className={` text-light border border-primary rounded-lg w-[40px] h-[40px] flex justify-center items-center drop-shadow-xl ${
//           index + 1 === metaMovie.page
//             ? "bg-primary text-white"
//             : "bg-light text-primary"
//         }`}
//       >
//         {index + 1}
//       </button>
//     ));
//   };

//   const url = import.meta.env.VITE_BACKEND_HOST;
//   const authAxios = axios.create({
//     baseURL: url,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const DeleteHandler = (id) => {
//     authAxios.delete(`/movie/${id}`).then((res) => {
//       console.log(res);
//       authAxios
//         .get("/admin/movie")
//         .then((res) => setDataMovie(res.data.data))
//         .catch((err) => console.log(err));
//     });
//   };

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
                  <div className="flex items-center justify-center w-6">No</div>
                  <div className="flex items-center justify-center w-24">Thumbnail</div>
                  <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1">Movie Name</div>
                  <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1">Category</div>
                  <div className="flex items-center justify-center w-52 lg:w-0 lg:flex-1">Released Date</div>
                  <div className="flex items-center justify-center w-52 lg:w-0 lg:flex-1">Duration</div>
                  <div className="flex items-center justify-center w-32">Action</div>
                </div>
              </div>

              <div className="mt-4">  
                <div className="flex justify-between gap-3 text-sm text-center">
                  <div className="text-[#1F4173] w-6 flex items-center justify-center">
                    1
                  </div>
                  <div className="flex items-center justify-center w-24 rounded-lg">
                        <img src={getImageUrl("movie1", "png")} alt="img" className="object-cover w-10 h-8 rounded-lg"/>
                  </div>
                  <div className="flex items-center justify-center w-60 lg:w-0 lg:flex-1 text-primary ">Spiderman HomeComing</div>
                  <div className="text-[#1F4173] flex w-60 lg:w-0 lg:flex-1 items-center justify-center">Action, Adventure</div>
                  <div className="text-[#1F4173] w-52 lg:w-0 lg:flex-1 flex items-center justify-center">
                  07/05/2023
                  </div>
                  <div className="text-[#1F4173] w-52 lg:w-0 lg:flex-1 flex items-center justify-center">
                  2 Hours 15 Minute
                  </div>
                  <div className="flex items-center justify-center w-32 gap-3">
                    <button className="flex items-center justify-center w-6 h-6 rounded-md bg-primary" to='/editmovie/'>
                        <IoEyeOutline className="text-white"/>
                    </button>
                    <button className="flex items-center justify-center w-6 h-6 rounded-md cursor-pointer bg-secondary">
                        <SlPencil className="text-white"/>
                    </button>
                    <button className="flex items-center justify-center w-6 h-6 rounded-md cursor-pointer bg-danger">
                      <GoTrash className="text-white"/>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex justify-center font-medium gap-x-2 font-nunito">
            
          </div>
        </section>
      </main>
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default ListMovie;