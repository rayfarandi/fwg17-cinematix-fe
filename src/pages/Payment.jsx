import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getWholeYear } from "../utils/getDate";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import PaymentModal from "../components/PaymentModal";
import { useNavigate } from "react-router-dom";

function Payment() {
  const data = useSelector(state => state.order.data)
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [isModalInfoShown, setisModalInfoShown] = useState(false);

  let date
  if(data.date){
    date = getWholeYear(data?.date)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    getPaymentMethod()
  }, [])

  const [paymentMethod, setPaymentMethod] = useState()
  const getPaymentMethod = async() => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/payment-method`, {headers:{
      Authorization: `Bearer ${token}`
    }})
    setPaymentMethod(res.data.results)
  }

  const [paymentClassName, setPaymentClassName] = useState()
  const [paymentId, setPaymentId] = useState()
  const [paymentVa, setPaymentVa] = useState()
  const getPaymentId = (id, va) =>{
    if(paymentClassName){
      paymentClassName.className = 'flex items-center justify-center px-8 py-2 border-2 rounded-md'
    }
    const x = document.getElementById(id)
    x.className = "flex items-center justify-center px-8 py-2 border-2 rounded-md border-primary"
    setPaymentClassName(x)
    setPaymentId(id)
    setPaymentVa(va)
  }

  const navigate = useNavigate()
  const [paymentData, setPaymentData] = useState()
  const processOrder = async () =>{
    setisModalInfoShown(true)
    const form = new FormData()
    form.append("cinemaLocationId",data.cinemaLocationId)
    form.append("movieTimeId",data.movieTimeId)
    form.append("seatCode",data.seatCode)
    form.append("paymentId",paymentId)

    try{
      const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/create-order`, form, {
        headers: {
          'Authorization': `Bearer ${token}`
    }})
    if(data.success){
      // console.log(data)
      setPaymentData(data.results)

    }
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="bg-[#A0A3BD33] py-10">
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
              <div className="p-1 rounded-full bg-success md:p-3">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-xs text-secondary md:text-sm">Seat</p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-xs text-secondary md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[319px] font-mulish mt-10">
          <div className="px-6 rounded-md bg-light py-11">
            <div>
              <p className="mb-6 text-2xl font-bold text-dark">Payment Info</p>
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">DATE & TIME</p>
                  <p className="text-black">{date} at {data.time}</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">MOVIE & TITLE</p>
                  <p className="text-black">{data.title}</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">CINEMA NAME</p>
                  <p className="text-black">{data.cinemaName}</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">NUMBER OF TICKETS</p>
                  <p className="text-black">{data.totalSeat} piece</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">TOTAL PAYMENT</p>
                  <p className="font-bold text-primary">IDR{data.total.toLocaleString('id')}</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-10 mb-6 text-2xl font-bold text-dark">
                Personal Information
              </p>
              <div className="flex flex-col gap-y-4">
                {profile && (
                  <>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Full Name</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {`${profile.firstName} ${profile.lastName}`}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Email</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {profile.email}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Phone Number</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {profile.phoneNumber}
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
            <div>
              <p className="mt-10 mb-6 text-2xl font-bold text-dark">
                Payment Method
              </p>
              <div className="grid gap-4 md:grid-cols-4 justify-items-stretch">
                {paymentMethod && paymentMethod.map((x, i)=>{
                  return(
                    <button onClick={()=>{getPaymentId(x.id, x.accountNumber)}} key={i} id={x.id} type="button" className="flex items-center justify-center px-8 py-2 border-2 rounded-md">
                      <img src={x.image} alt="icon" />
                    </button>
                  )
                })}
              </div>
            </div>
            <button
              className="w-full px-4 py-4 mt-10 font-bold text-center rounded-md text-light bg-primary drop-shadow-xl focus:ring-2"
              onClick={processOrder}
            >
              Pay Your Order
            </button>
          </div>
        </section>
      </section>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
      {isModalInfoShown && paymentData && paymentData.id && <PaymentModal id={paymentData?.id}  />}
      {/* {isModalInfoShown && <PaymentModal orderId={orderId} />} */}
    </>
  );
}

export default Payment;
