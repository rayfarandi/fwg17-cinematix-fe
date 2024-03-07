import { useState } from "react";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";

function TicketResult() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="flex font-mulish">
        <div className="hidden lg:block lg:w-3/5">
          <div className="w-full h-[920px] font-mulish text-light bg-[url('https://res.cloudinary.com/dgktyg96c/image/upload/v1709686494/acengfull_onjk1kxwb437u6.png')] relative bg-cover bg-center">
            <div className="w-full h-full absolute bg-black bg-opacity-80">
              <div className="h-full flex flex-col items-center justify-center gap-y-5 px-16">
                <div className="flex flex-col gap-y-4">
                  <div>
                    <img
                      src={getImageUrl("CinematixWhite", "svg")}
                      alt="icon"
                      className="w-60"
                    />
                  </div>
                  <p className="text-5xl font-bold">Thankyou For Purchasing</p>
                  <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
                    tempor integer sed magna et.
                  </p>
                  <div className="flex gap-x-4">
                    <p className="text-[18px] font-bold">
                      Please Download Your Ticket
                    </p>
                    <img src={getImageUrl("Arrow", "svg")} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 py-10 lg:py-0 bg-[#A0A3BD33] flex flex-col gap-y-6 justify-center items-center w-full">
          <div className="bg-light rounded-lg relative">
            <img
              src={getImageUrl("qrcode", "png")}
              alt="qrcode"
              className="py-4 px-6"
            />
            <div className="w-full border border-dashed"></div>
            <div className="grid grid-cols-2 gap-4 py-10 px-4">
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Movie</p>
                <p className="text-sm text-dark font-semibold">Spiderman</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Category</p>
                <p className="text-sm text-dark font-semibold">PG-13</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Date</p>
                <p className="text-sm text-dark font-semibold">07 Jul</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Time</p>
                <p className="text-sm text-dark font-semibold">2:00pm</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Count</p>
                <p className="text-sm text-dark font-semibold">3 pcs</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Seats</p>
                <p className="text-sm text-dark font-semibold">C4, C5, C6</p>
              </div>
              <div className="py-2 px-3 border rounded-md flex justify-between col-span-2">
                <p>Total </p>
                <p className="font-semibold">$30.00</p>
              </div>
            </div>
            <div className="flex justify-center gap-x-52 w-full absolute top-52">
              <div className="p-4 bg-[#ECEDF2] rounded-full"></div>
              <div className="p-4 bg-[#ECEDF2] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <button
              to="/order"
              className="font-bold text-primary bg-none border border-primary py-4 px-24 rounded-md focus:ring-2 flex justify-center gap-x-4 w-[357px]"
            >
              <img src={getImageUrl("download", "png")} alt="icon" />
              Download
            </button>
            <button
              to="/order"
              className="font-bold text-light bg-primary border border-primary py-4 px-24 rounded-md focus:ring-2 w-[357px]"
            >
              Done
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

export default TicketResult;
