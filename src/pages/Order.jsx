import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";

function Order() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  },[])
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="bg-[#A0A3BD33] py-10">
        <section className="flex justify-center items-center w-full font-mulish">
          <div className="flex gap-x-2 md:gap-x-6">
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-success p-1 md:p-3 rounded-full">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-secondary text-xs md:text-sm">
                Dates And Time
              </p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">2</p>
              </div>
              <p className="text-secondary text-xs md:text-sm">Seat</p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-[#A0A3BD] p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-[#A0A3BD] text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[130px] font-mulish mt-10 flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
          <div className="w-full lg:w-4/6 bg-light py-8 px-5 rounded-md">
            <div className="py-3 px-4 border border-[#DEDEDE] flex flex-col gap-y-4 md:flex-row md:gap-x-6 justify-center rounded-sm">
              <img src={getImageUrl("spiderman", "png")} alt="movie" />
              <div className="flex flex-col gap-y-3">
                <p className="text-2xl text-dark font-semibold">Black Widow</p>
                <div className="flex flex-row gap-x-2">
                  <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                    Action
                  </p>
                  <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                    Adventure
                  </p>
                </div>
                <p className="text-[#121212]">Regular - 13:00 PM</p>
              </div>
              <Link
                to="/"
                className="py-2 px-5 bg-primary md:self-end text-light rounded-md"
              >
                Change
              </Link>
            </div>
            <div className="mt-7">
              <p className="text-2xl font-bold">Chose Your Seet</p>
              <div className="px-4 overflow-auto w-full">
                <p className="ml-80 xl:ml-0 xl:text-center text-sm font-semibold text-secondary my-7">
                  Screen
                </p>
                <table className="text-sm font-semibold">
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">A</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#6E7191] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#6E7191] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">B</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#1D4ED8] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#1D4ED8] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#1D4ED8] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">C</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">D</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">E</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">F</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8">G</td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    </td>
                  </tr>
                  <tr className="flex items-center py-1">
                    <td className="px-2 w-8"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">1</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">2</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">3</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">4</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">5</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">6</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">7</div>
                    </td>
                    <td className="px-1 w-32"></td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">8</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">9</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">10</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">11</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">12</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">13</div>
                    </td>
                    <td className="px-1">
                      <div className="w-[26px] h-[26px] text-center">14</div>
                    </td>
                  </tr>
                </table>
                <p className="mt-6 text-[#000] text-[18px] font-semibold">
                  Seating Key
                </p>
                <div className="flex gap-x-8 w-full">
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Avalaible
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-primary rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Selected
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#F589D7] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Love Nest
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#6E7191] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">Sold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-stretch">
            <div className="bg-light rounded-md drop-shadow-xl mb-8">
              <div className="flex flex-col items-center justify-center gap-y-2 py-8 px-5">
                <img src={getImageUrl("CineOne", "svg")} alt="cinema" />
                <p className="text-2xl tex-dark font-semibold">
                  CineOne21 Cinema
                </p>
              </div>
              <div className="text-sm flex flex-col gap-y-4 py-4 px-5">
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Movie Selected</p>
                  <p className="font-semibold">Spider-Man: Homecoming</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Tuesday, 07 July 2020</p>
                  <p className="font-semibold">S13:00pm</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">One ticket price</p>
                  <p className="font-semibold">$10</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Seat choosed</p>
                  <p className="font-semibold">C4, C5, C6</p>
                </div>
              </div>
              <div className="w-full border border-[#E6E6E6] mt-8"></div>
              <div className="py-6 px-5">
                <div className="flex justify-between">
                  <p className="text-[#000] text-[18px] font-semibold">
                    Total Payment
                  </p>
                  <p className="text-primary text-2xl font-bold">$30</p>
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <Link
                to="/payment"
                className="w-full py-4 px-6 text-center font-semibold text-[#F7F7FC] bg-primary rounded-md drop-shadow-xl"
              >
                Checkout Now
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Order;
