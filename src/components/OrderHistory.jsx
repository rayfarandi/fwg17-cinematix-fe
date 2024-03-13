import { useRef, useState } from "react";
import getImageUrl from "../utils/imageGet"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import getWholeDate from "../utils/getDate";
import { getMonth } from "../utils/getDate";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OrderHistory = ({id, title, price = '00000000', time, date, paid, used, va, category, seat, expired}) => {

  const token = useSelector(state => state.auth.token)
  // eslint-disable-next-line react/prop-types
  let count = seat?.length
  seat = seat?.toString()
  let month
  
  let airingDate = ''
  if(date && time){
    airingDate = getWholeDate(date, time) 
    // eslint-disable-next-line react/prop-types
    month = date.slice(8, 10) + ' ' + getMonth(date).slice(0,3)
    // eslint-disable-next-line react/prop-types
    time = time.slice(11, 16)
  }

  const  [arrowDown, setArrowDown] = useState(true)
    const showDetails = (e) => {
    const a = document.getElementById(e)
    if(a.className == ''){
      a.className = 'hidden'
      setArrowDown(true)
    }else {
      a.className = ''
      setArrowDown(false)
    }
  }

  
  const [copySuccess, setCopySuccess] = useState("Copy");
  const noVirtualRef = useRef(null);
  const copyToClipboard = (e) => {
    noVirtualRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // eslint-disable-next-line react/prop-types
    const formatSuccess = date.toLocaleDateString('en-US', options)
    return `on ${formatSuccess}`
  }

  const navigate = useNavigate()
  const checkPaid = async () => {
    const form = new FormData()
    form.append("nulify", "nulify")
    await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/update-paid-status/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    navigate(`/ticketresult/${id}`)
  }
  return (
    <div className={`${title ? '' : 'hidden'} flex items-center justify-center w-full h-auto bg-white mt-14 rounded-3xl`}>
      <div className="w-11/12 h-4/6">
        <div className="flex flex-col-reverse justify-between gap-3 py-5 md:py-10 md:items-center md:flex-row">
          <div>
            <div className="text-slate-400">{airingDate}</div>
            <div className="text-2xl">{title}</div>
          </div>

          <div>
            <img className="w-32 md:w-60" src={getImageUrl('cineOne21', 'svg')} alt="" />
          </div>
        </div>
          
        <div className="w-full h-1 bg-lightGrey"></div>
        <div className="flex flex-col w-full gap-5 pt-5 pb-5 md:gap-10 md:py-10">
            
            <div className="flex flex-col flex-wrap w-full md:flex-row">
              <div className="flex flex-col w-full md:gap-10 md:flex-row">
                <div htmlFor="password" className="relative flex flex-col gap-5 md:gap-10 md:flex-row md:w-4/5">
                  <div className={`${used ? 'text-slate-600 bg-slate-300' : 'text-green-600 bg-green-300'} flex items-center justify-center w-full h-12 text-xl md:h-14 md:w-0 md:flex-1 rounded-xl`}>{used ? 'Ticket used' : 'Ticket in Active'}</div>
                  <div className={`${paid ? 'text-blue-600 bg-blue-300' : 'text-red-600 bg-red-300'} flex items-center justify-center w-full h-12 text-xl md:h-14 md:w-0 md:flex-1 rounded-xl`}>{paid ? 'Paid' : 'Not Paid'}</div>
                </div>
                <div htmlFor="confirmPassword" className="flex items-center justify-center w-full gap-1 md:gap-3 md:justify-end md:w-1/5">
                  <button onClick={()=>{showDetails(`detail` + id)}} className="flex mt-5 text-2xl text-center md:text-right text-slate-400 md:mt-0">Show Details {arrowDown ? <MdKeyboardArrowDown className="text-4xl text-slate-400"/> : <MdKeyboardArrowUp className="text-4xl text-slate-400"/>}  </button> 
                </div>

              </div>
            </div>
            
            <div id={`detail` + id} className={`hidden`}>
              
              <div className={`${paid ? 'hidden' : ''} flex flex-col w-full gap-5`}>
                <div className="text-xl">Ticket Information</div>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex w-full sm:w-1/4">
                    <p className="w-1/2 sm:flex-1 text-slate-400 sm:w-0">No. Rekening Virtual</p>
                    <p className="text-slate-400">:</p>
                  </div>
                  <div className="flex items-center flex-1 sm:justify-end">
                    <input disabled value={va} ref={noVirtualRef} className="font-semibold"/>
                    <button onClick={copyToClipboard} className="px-3 bg-white border border-solid rounded h-7 md:h-9 border-secondary">{copySuccess}</button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex w-full sm:w-1/4">
                    <p className="w-1/2 sm:flex-1 text-slate-400 sm:w-0">Total Payment</p>
                    <p className="text-slate-400">:</p>
                  </div>
                  <div className="flex-1 text-2xl sm:text-right text-secondary">IDR{price.toLocaleString('id')}</div>
                </div>
                <p className="text-slate-400">Pay this payment bill before it is due, on <span className="text-danger">{formatDate(expired)}</span> If the bill has not been paid by the specified time, it will be forfeited</p>
                <button onClick={checkPaid} className="w-full text-white rounded md:w-1/5 h-14 bg-primary ">check payment</button>
              </div>
              
              <div className={`${paid ? '' : 'hidden'} flex flex-col w-full gap-5`}>
                <div className="text-xl">Ticket Information</div>
                <div className="flex flex-col gap-5 md:gap-0 md:items-center md:flex-row">
                  <div className="mr-14 w-54">
                    <img src={getImageUrl('qrcode', 'png')} className="w-54" />
                  </div>
                  <div className="flex flex-col flex-1 gap-5">
                    <div className="flex gap-10">
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Category</p>
                        <p>{category}</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Time</p>
                        <p>{time}</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Seat</p>
                        <p>{seat}</p>
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Movie</p>
                        <p className="text-elipsis">Spiderman: Homecoming</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Date</p>
                        <p>{month}</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Count</p>
                        <p>{count}pcs</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-end">
                    <p className="text-xl">Total</p>
                    <p className="text-4xl">IDR{price.toLocaleString('id')}</p>
                  </div>
                </div>
              </div>

            </div>

        </div>
      </div>
    </div>   
  )
}

export default OrderHistory