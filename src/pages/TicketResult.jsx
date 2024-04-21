import { useState,useEffect } from "react";
import axios from "axios";
import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import { useSelector } from "react-redux";
import {getMonth} from "../utils/getDate"
import { useParams,Link } from "react-router-dom";

const getTicketResult = async (cb, data, token) => {
  const {data: response} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-order/ticket`, {params: {
    orderId : data?.orderId
  }, headers: {
    Authorization: `Bearer ${token}`
  }})

  if(response.success) {
    cb(response.results)
  }
}

function TicketResult() {
  const {id} = useParams()
  const token = useSelector(state => state.auth.token)
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [foundTicket, setFoundTicket] = useState({})
  
  const getTicket = async () => {
    const res =await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-order/ticket?orderId=${id}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    setFoundTicket(res.data.results)
  }

  let date
  let time
  if(foundTicket.date && foundTicket.time){
    date = foundTicket.date.slice(8, 10) + ' ' + getMonth(foundTicket.date).slice(0,3)
    time = foundTicket.time.slice(11, 16)
  }

  let seatCode
  if(foundTicket.seatCode){
    seatCode = foundTicket.seatCode.toString()
  }

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    getTicket()
  },[])
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      {foundTicket && <section className="flex font-mulish">
        <div className="lg:w-3/5">
          <div className="w-full h-[920px] font-mulish text-light bg-[url('https://res.cloudinary.com/dgktyg96c/image/upload/v1709686494/acengfull_onjk1kxwb437u6.png')] relative bg-cover bg-center">
            <div className="absolute w-full h-full bg-black bg-opacity-80">
              <div className="flex flex-col items-center justify-center h-full px-16 gap-y-5">
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
        <div className="lg:w-2/5 py-10 lg:py-0 bg-[#A0A3BD33] flex flex-col gap-y-6 justify-center items-center">
          <div className="relative rounded-lg bg-light flex flex-col items-center">
            <img
              src={getImageUrl("qrcode", "png")}
              alt="qrcode"
              className="px-6 py-4"
            />
            <div className="w-full border border-dashed"></div>
            <div className="grid grid-cols-2 gap-4 px-4 py-10 w-full">
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Movie</p>
                <p className="text-sm font-semibold text-dark">{foundTicket?.MovieTitle}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Category</p>
                <p className="text-sm font-semibold text-dark">{foundTicket?.rating}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Date</p>
                <p className="text-sm font-semibold text-dark">{date}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Time</p>
                <p className="text-sm font-semibold text-dark">{time}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Count</p>
                <p className="text-sm font-semibold text-dark">{foundTicket?.seatCount}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xs text-[#AAA] font-semibold">Seats</p>
                <p className="text-sm font-semibold text-dark">{seatCode}</p>
              </div>
              <div className="flex justify-between col-span-2 px-3 py-2 border rounded-md">
                <p>Total </p>
                <p className="font-semibold">{foundTicket?.total}</p>
              </div>
            </div>
            <div className="absolute flex justify-center w-full gap-x-52 top-52">
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
            <Link to="/profile">
            <button
              
              className="font-bold text-light bg-primary border border-primary py-4 px-24 rounded-md focus:ring-2 w-[357px]"
            >
              Done
            </button>
            </Link>
            
          </div>
        </div>
      </section>}
      
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default TicketResult;
