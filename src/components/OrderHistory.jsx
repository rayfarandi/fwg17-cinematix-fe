import getImageUrl from "../utils/imageGet"
import { MdKeyboardArrowDown } from "react-icons/md";

const OrderHistory = () => {
    const showDetails = (e) => {
    const a = document.getElementById(e)
    if(a.className == ''){
      a.className = 'hidden'
    }else {
      a.className = ''
    }
  }
  return (
    <div className="flex items-center justify-center w-full h-auto bg-white mt-14 rounded-3xl">
      <div className="w-11/12 h-4/6">
        <div className="flex flex-col-reverse justify-between gap-3 py-5 md:py-10 md:items-center md:flex-row">
          <div>
            <div className="text-slate-400">Tuesday, 07 July 2020 - 04:30pm</div>
            <div className="text-2xl">Spider-Man: Homecoming</div>
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
                  <div className="flex items-center justify-center w-full h-12 text-xl text-green-500 bg-green-300 md:h-14 md:w-0 md:flex-1 rounded-xl">Ticket in active</div>
                  <div className="flex items-center justify-center w-full h-12 text-xl text-green-500 bg-green-300 md:h-14 md:w-0 md:flex-1 rounded-xl">Not Paid</div>
                </div>
                <div htmlFor="confirmPassword" className="flex items-center justify-center w-full gap-1 md:gap-3 md:justify-end md:w-1/5">
                  <button onClick={()=>{showDetails(`detail`)}} className="flex mt-5 text-2xl text-center md:text-right text-slate-400 md:mt-0">Show Details <MdKeyboardArrowDown className="text-4xl text-slate-400"/></button> 
                </div>

              </div>
            </div>
            
            <div id={`detail`} className={`hidden`}>
              
              <div className='flex flex-col w-full gap-5'>
                <div className="text-xl">Ticket Information</div>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex w-full sm:w-1/4">
                    <p className="w-1/2 sm:flex-1 text-slate-400 sm:w-0">No. Rekening Virtual</p>
                    <p className="text-slate-400">:</p>
                  </div>
                  <div className="flex items-center flex-1 gap-3 sm:justify-end">
                    <p className="font-semibold">12321328913829724</p>
                    <button className="w-16 bg-white border border-solid rounded h-9 border-secondary">Copy</button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="flex w-full sm:w-1/4">
                    <p className="w-1/2 sm:flex-1 text-slate-400 sm:w-0">Total Payment</p>
                    <p className="text-slate-400">:</p>
                  </div>
                  <div className="flex-1 text-2xl sm:text-right text-secondary">$30</div>
                </div>
                <p className="text-slate-400">Pay this payment bill before it is due, on <span className="text-danger"> June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
                <button className="w-full text-white rounded md:w-1/5 h-14 bg-primary ">cek pembayaran</button>
              </div>
              
              <div className='flex flex-col w-full gap-5'>
                <div className="text-xl">Ticket Information</div>
                <div className="flex flex-col gap-5 md:gap-0 md:items-center md:flex-row">
                  <div className="mr-14 w-54">
                    <img src={getImageUrl('qrcode', 'png')} className="w-54" />
                  </div>
                  <div className="flex flex-col flex-1 gap-5">
                    <div className="flex gap-10">
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Category</p>
                        <p>pg-13</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Time</p>
                        <p>2:00pm</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Seat</p>
                        <p>C4, C5, C6</p>
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Movie</p>
                        <p className="text-elipsis">Spiderman: Homecoming</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Date</p>
                        <p>07 Jul</p>
                      </div>
                      <div className="w-1/4 h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className="text-slate-400">Count</p>
                        <p>3pcs</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-end">
                    <p className="text-xl">Total</p>
                    <p className="text-4xl">$30.00</p>
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