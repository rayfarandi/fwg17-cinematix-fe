import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import ItemSeat from "../components/ItemSeat";
import InfoSeat from "../components/InfoSeat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getWholeYear } from "../utils/getDate";
import { setOrder } from "../redux/reducer/order";

const getReservedSeat = async (cb, data, token) => {


  const {data: response} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/reserved-seat`, {params:{
    movieId : data?.movieId,
    cinemaId : data?.cinemaId,
    locationId : data?.locationId,
    airingTimeId : data?.airingTimeId,
    dateId : data?.dateId,
  }, headers: {
    Authorization: `Bearer ${token}`
  }})

  if(response.success){
    cb(response.results.seatCode)
  }
}

function Order() {
  const data = useSelector(state => state.order.data)
  const token = useSelector(state => state.auth.token)
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [foundReservedSeat, setFoundReservedSeat] = useState([])
  const [choosedSeat, setChoosedSeat] = useState([])
  const [totalPrice, setTotalPrice] = useState('IDR0')
  const date = getWholeYear(data.date)

  useEffect(()=>{
    getReservedSeat(setFoundReservedSeat, {movieId: `${data.movieId}`, cinemaId: `${data.cinemaId}`, locationId: `${data.locationId}`, airingTimeId: `${data.airingTimeId}`, dateId: `${data.dateId}`},token)
  },[totalPrice])

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    // value dari data pada serFoundReservedSeat diganti dengan data-data yang tersimpan di redux
  },[])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getDataOrder = () => {
    const seatCode = choosedSeat.toString()
    const totalSeat = choosedSeat.length
    const total = totalPrice
    let y = {...data, seatCode}
    y = {...y, totalSeat}
    y = {...y, total}
    // console.log(y)
    if(y.seatCode){
      dispatch(setOrder(y))
      navigate('/payment')
    }
  }

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="bg-[#A0A3BD33] py-10 order-scrollbar">
        <section className="flex items-center justify-center w-full font-mulish">
          <div className="flex gap-x-2 md:gap-x-6">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="p-1 rounded-full bg-success md:p-3">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-xs text-secondary md:text-sm">
                Dates And Time
              </p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">2</p>
              </div>
              <p className="text-xs text-secondary md:text-sm">Seat</p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="bg-[#A0A3BD] p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-[#A0A3BD] text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[130px] font-mulish mt-10 flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
          <div className="w-full px-5 py-8 rounded-md lg:w-4/6 bg-light">
            <div className="py-3 px-4 border border-[#DEDEDE] flex flex-col gap-y-4 md:flex-row md:gap-x-6 justify-center rounded-sm">
              <img src={getImageUrl("spiderman", "png")} alt="movie" />
              <div className="flex flex-col gap-y-3">
                <p className="text-2xl font-semibold text-dark">{data.title}</p>
                <div className="flex flex-row gap-x-2">
                  <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                  {data.genre[0]}
                  </p>
                  <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                  {data.genre[1]}
                  </p>
                </div>
                <p className="text-[#121212]">Regular - 13:00 PM</p>
              </div>
              <Link
                to="/"
                className="px-5 py-2 rounded-md bg-primary md:self-end text-light"
              >
                Change
              </Link>
            </div>
            <div className="mt-7">
              <p className="text-2xl font-bold">Chose Your Seet</p>
              <div className="w-full px-4 overflow-auto">
              <div className="mb-20"></div>
                <ItemSeat reservedSeat={foundReservedSeat} choose={setChoosedSeat} price={data.price} setTotal={setTotalPrice}></ItemSeat>
                <InfoSeat/>
              </div>
              
            </div>
          </div>


          <div className="flex flex-col items-stretch w-full lg:w-2/6">
            <div className="mb-8 rounded-md bg-light drop-shadow-xl">
              <div className="flex flex-col items-center justify-center px-5 py-8 gap-y-2">
                <img src={data.cinemaImage} alt={data.cinemaImage} />
                <p className="text-2xl font-semibold tex-dark">
                {data.cinemaName}
                </p>
              </div>
              <div className="flex flex-col px-5 py-4 text-sm gap-y-4">
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Movie Selected</p>
                  <p className="font-semibold">{data.title}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">{date}</p>
                  <p className="font-semibold">{data.time}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">One ticket price</p>
                  <p className="font-semibold">IDR{data.price.toLocaleString('id')}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Seat choosed</p>
                  <p className="font-semibold">{choosedSeat?.toString()}</p>
                </div>
              </div>
              <div className="w-full border border-[#E6E6E6] mt-8"></div>
              <div className="px-5 py-6">
                <div className="flex justify-between">
                  <p className="text-[#000] text-[18px] font-semibold">
                    Total Payment
                  </p>
                  <p className="text-2xl font-bold text-primary">IDR{totalPrice.toLocaleString('id')}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <button
              onClick={getDataOrder}
                type="button"
                className="w-full py-4 px-6 text-center font-semibold text-[#F7F7FC] bg-primary rounded-md drop-shadow-xl"
              >
                Checkout Now
              </button>
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
