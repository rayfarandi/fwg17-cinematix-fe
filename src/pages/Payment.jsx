import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGet";
import DropdownMobile from "../components/DropdownMobile";
import PaymentModal from "../components/PaymentModal";

function Payment() {

  const token = useSelector(state => state.auth.token)
  const [userData, setUserData] = useState(null);
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [isModalInfoShown, setisModalInfoShown] = useState(false);
  // const [orderId, setOrderId] = useState(null)


  const getDataUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(response.data.results)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    getDataUser()
  }, [])
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
              <div className="bg-success p-1 md:p-3 rounded-full">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-secondary text-xs md:text-sm">Seat</p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-secondary text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[319px] font-mulish mt-10">
          <div className="bg-light py-11 px-6 rounded-md">
            <div>
              <p className="text-2xl text-dark font-bold mb-6">Payment Info</p>
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">DATE & TIME</p>
                  <p className="text-black">Tuesday, 07 July 2020 at 02:00pm</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">MOVIE & TITLE</p>
                  <p className="text-black">Spider-Man: Homecoming</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">CINEMA NAME</p>
                  <p className="text-black">CineOne21 Cinema</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">NUMBER OF TICKETS</p>
                  <p className="text-black">3 pieces</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">TOTAL PAYMENT</p>
                  <p className="font-bold text-primary">$30,00</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl text-dark font-bold mb-6 mt-10">
                Personal Information
              </p>
              <div className="flex flex-col gap-y-4">
                {userData && (
                  <>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Full Name</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {`${userData.firstName} ${userData.lastName}`}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Email</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {userData.email}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <p className="text-[#696F79]">Phone Number</p>
                      <div className="p-4 px-8 border rounded-sm">
                        {userData.phoneNumber}
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
            <div>
              <p className="text-2xl text-dark font-bold mb-6 mt-10">
                Payment Method
              </p>
              <div className="grid md:grid-cols-4 gap-4 justify-items-stretch">
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("googleplay", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("visa", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("gopay", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("paypal", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("dana", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("bca", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("bri", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("ovo", "svg")} alt="icon" />
                </div>
              </div>
            </div>
            <button
              className="w-full py-4 px-4 font-bold text-light bg-primary rounded-md mt-10 text-center drop-shadow-xl focus:ring-2"
              onClick={() => setisModalInfoShown(true)}
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
      {isModalInfoShown && <PaymentModal  />}
      {/* {isModalInfoShown && <PaymentModal orderId={orderId} />} */}
    </>
  );
}

export default Payment;
