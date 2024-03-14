import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import getImageUrl from "../utils/imageGet";
import SalesChart from "../components/SalesChart";
import TicketChart from "../components/TicketChart";

function Dashboard() {
  const token = useSelector((state) => state.auth.token);
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [IsMovie, setIsMovie] = useState(false);
  const [movie, setMovie] = useState("");
  const [dataMovies, setDataMovies] = useState([
    { id: 1, title: "Satan's Slaves" },
    { id: 2, title: "Spiderman - Home Coming" },
    { id: 3, title: "Ayat-Ayat Cinta" },
    { id: 4, title: "Deadpool & Wolverine" },
  ]);

  const [dateArr, setDateArr] = useState([]);
  const [salesArr, setSalesArr] = useState([]);

  const getDataSalesChart = async (movieId) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/admin/sales-chart?movieId=${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.results);
      setDateArr(res.data.results.date);
      setSalesArr(res.data.results.income);
    } catch (error) {
      console.error("Error filtering movies by genre:", error);
    }
  };

  useEffect(() => {
    getDataSalesChart(1),
    getDataTicket(1,1); // Fetch initial data for movie id 1
  }, [token]);

  const handleMovieSelect = (movieId) => {
    setMovie(movieId);
    setIsMovie(false);
    getDataSalesChart(movieId);
  };

  

  const [dateTicketArr, setDateTicketArr] = useState([]);
  const [moneyArr, setMoneyArr] = useState([]);
  const [isGenre, setIsGenre] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");

  const dataGenres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Thriller" },
    { id: 6, name: "Romance" },
  ];

  const dataLocations = [
    { id: 1, name: "Bandung" },
    { id: 2, name: "Jakarta" },
    { id: 3, name: "Semarang" },
    { id: 4, name: "Surabaya" },
  ];

  const handleLocationSelect = (locationId) => {
    setSelectedLocation(locationId);
    setLocation(dataLocations.find((location) => location.id === locationId)?.name);
    getDataTicket(selectedGenre, locationId);
  };

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
    setGenre(dataGenres.find((genre) => genre.id === genreId)?.name);
    getDataTicket(genreId, selectedLocation);
  };

  const getDataTicket = async (genreId, locationId) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/ticket-sales?genreId=${genreId}&locationId=${locationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.results);
      setDateTicketArr(res.data.results.date);
      setMoneyArr(res.data.results.income);
    } catch (error) {
      console.error("Error fetching ticket sales data:", error);
    }
  };

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <main className="flex flex-col gap-y-10 py-10 px-11 xl:px-[130px] bg-[#F5F6F8] h-full font-mulish">
        <form className="w-full bg-light rounded-xl p-10">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl text-dark font-bold">Sales Chart</p>
            <div className="flex gap-x-3 md:items-baseline flex-col gap-y-4 md:flex-row ">
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsMovie((state) => !state)}
                >
                  <p className="text-secondary font-semibold">Movie</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {IsMovie && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataMovies.map((movie) => (
                        <p
                          className="text-secondary font-semibold"
                          key={movie.id}
                          onClick={() => handleMovieSelect(movie.id)}
                        >
                          {movie.title}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center">
                <p className="text-secondary font-semibold">Weekly</p>

                <img src={getImageUrl("Forward", "svg")} alt="icon" />
              </div>
              <button className="py-3 px-10 bg-primary rounded-lg text-light font-bold focus:ring-2">
                Filter
              </button>
            </div>
            <p className="text-[15px] font-semibold">
              {movie && dataMovies.find((data) => data.id === movie)?.title}
            </p>
            <div>
              {/* Kirim dateArr dan salesArr ke SalesChart */}
              <SalesChart dateArr={dateArr} salesArr={salesArr} />
            </div>
          </div>
        </form>
        <form className="w-full bg-light rounded-xl p-10">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl text-dark font-bold">Ticket Sales</p>
            <div className="flex gap-x-3 md:items-baseline flex-col gap-y-4 md:flex-row ">
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsGenre((state) => !state)}
                >
                  <p className="text-secondary font-semibold">Genre</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {isGenre && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataGenres.map((result) => (
                        <p
                          className="text-secondary font-semibold"
                          key={result.id}
                          onClick={() => {
                            handleGenreSelect(result.id);
                            setIsGenre(false);
                          }}
                        >
                          <span>{result.name}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsLocation((state) => !state)}
                >
                  <p className="text-secondary font-semibold">Location</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {isLocation && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataLocations.map((location) => (
                        <p
                          className="text-secondary font-semibold"
                          key={location.id}
                          onClick={() => {
                            handleLocationSelect(location.id);
                            setIsLocation(false);
                          }}
                        >
                          {location.name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                {/* <select
                  className="py-3 px-4 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl"
                  onChange={(e) => handleLocationSelect(e.target.value)}
                >
                  <option value="">Select Location</option>
                  {dataLocations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select> */}
              </div>
              <button
                className="py-3 px-10 bg-primary rounded-lg text-light font-bold focus:ring-2"
              >
                Filter
              </button>
            </div>
            <p className="text-[15px] font-semibold"></p>
            <div>
              <TicketChart dateTicketArr={dateTicketArr} moneyArr={moneyArr}></TicketChart>
            </div>
          </div>
        </form>
      </main>
      <section></section>
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Dashboard;
