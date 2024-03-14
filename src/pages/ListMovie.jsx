import { useState } from "react";
import { Link } from "react-router-dom";



import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import getImageUrl from "../utils/imageGet";


function ListMovie() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [IsDate, setIsDate] = useState(false);
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


  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <main className="py-10 px-11 xl:px-[130px] bg-[#F5F6F8] h-full font-mulish">
        <section className="w-full bg-light rounded-xl p-10 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
            <p className="text-2xl text-dark font-bold">List Movie</p>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsDate((state) => !state)}
                >
                  <img src={getImageUrl("calendar", "svg")} alt="icon" />
                  <p className="text-secondary font-semibold">{date}</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {IsDate && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataDate.map((result, i) => (
                        <p
                          className="text-secondary font-semibold"
                          key={i}
                          onClick={() => {
                            setDate(result);
                            setIsDate(false);
                          }}
                        >
                          {result}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/addmovie"
                className="py-3 px-6 bg-primary rounded-lg text-light font-bold focus:ring-2 text-center"
              >
                Add Movies
              </Link>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-xs font-bold text-[#1F4173] text-center">
                  <td className="py-4">No</td>
                  <td className="p-4">Thumbnail</td>
                  <td className="p-4">Movie Name</td>
                  <td className="p-4">Category</td>
                  <td className="p-4">Released Date</td>
                  <td className="p-4">Duration</td>
                  <td className="p-4">Action</td>
                </tr>
              </thead>
              <tbody>
                
                  <tr className="text-center text-sm">
                    <td className="py-4 text-[#1F4173]"></td>
                    <td className="p-4">
                      <div className="w-10 h-10 flex justify-center">
                        (
                          <img
                            src={getImageUrl("movie1", "png")}
                            alt="img"
                            className="bg-contain"
                          />
                        )
                      </div>
                    </td>
                    <td className="p-4 text-primary">Sapiderment</td>
                    <td className="p-4 text-[#1F4173]">Action</td>
                    <td className="p-4 text-[#1F4173]">
                      januari
                    </td>
                    <td className="p-4 text-[#1F4173]">10</td>
                    <td className="p-4 flex gap-x-3 justify-center items-center">
                      <Link
                        className="p-2 bg-[#5D5FEF] rounded-md"
                        to='/editmovie/'
                      >
                        <img src={getImageUrl("Edit", "svg")} alt="icon" />
                      </Link>
                      <div
                        className="p-2 bg-danger rounded-md cursor-pointer"
                      >
                        <img src={getImageUrl("Delete", "svg")} alt="icon" />
                      </div>
                    </td>
                  </tr>
            
              </tbody>
            </table>
          </div>
          <div className="flex gap-x-2 justify-center font-nunito font-medium">
            
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