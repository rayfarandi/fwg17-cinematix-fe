import { useState } from "react"
import Navbar from "../components/Navbar"
import getImageUrl from "../utils/imageGet"
import OrderHistory from "../components/OrderHistory";

import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5"

const Profile = () => {
  const [peekPassword, setPeekPassword] = useState(true)
  const [pageSwitch, setPageSwitch] = useState(true)

  const peek = () => {
    if(!peekPassword){
      setPeekPassword(true)
    }else {
      setPeekPassword(false)
    }
  }

  // const showDetails = (e) => {
  //   const a = document.getElementById(e)
  //   if(a.className == 'hidden w-full bg-black h-60'){
  //     a.className = 'w-full bg-black h-60'
  //   }else {
  //     a.className = 'hidden w-full bg-black h-60'
  //   }
  // }

  return (
    <>
      <Navbar/>

      <section className="flex flex-col w-full h-auto md:flex-col bg-lightGrey lg:flex-row">
        <aside className="flex items-center justify-center h-screen px-5 py-8 lg:w-96 lg:px-0">
          <div className="flex flex-col items-center justify-center w-full h-full px-4 bg-white lg:w-4/5 rounded-3xl">
            <div className="flex flex-col justify-center w-11/12 gap-5 px-3 h-2/4">
              <div className="flex items-center justify-between">
                <div className="leading-3 text-grey ">INFO</div>
                <button className="text-4xl leading-3 text-secondary">⋅⋅⋅</button>
              </div>
              <div className="flex items-center justify-center">
                <img src={getImageUrl("images","jpeg")} alt="profileImage" className="object-cover w-32 h-32 bg-black rounded-full" />
              </div>
              <div className="text-2xl font-semibold text-center">
                Jonas El Roudrigues <br />
               <span className="text-xl text-grey">Moviegoers</span> 
              </div>
            </div>

            <div className="w-full h-[2px] bg-lightGrey"></div>

            <div className="flex flex-col justify-center w-11/12 gap-5 px-3 h-2/4">
              <div>Loyalti Points</div>
              <div className="relative flex flex-col items-center justify-center w-full gap-5 py-4 overflow-hidden shadow-lg h-36 rounded-3xl bg-primary">
                <div className="w-11/12 text-xl text-white">Moviegoers</div>
                <div className="w-11/12 text-3xl text-white">320<span className="text-sm"> points</span></div>
                
                <div className="absolute w-32 h-32 ml-auto bg-white rounded-full opacity-30 -right-10 bottom-20"></div>
                <div className="absolute w-32 h-32 ml-auto bg-white rounded-full opacity-30 -right-16 bottom-14"></div>
              </div>
              <div className="text-center">180 points become a master</div>
              <div className="flex h-4 rounded-full bg-lightGrey">
                <div className="w-2/4 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </aside>

        <section className={`flex-1 px-5 py-8 lg:pr-10`}>
          <nav className="flex w-full h-24 gap-5 px-5 bg-white md:px-16 md:gap-20 rounded-3xl">
            <button className="text-xl" onClick={()=>{setPageSwitch(true)}}>Account Setting</button>
            <button className="text-xl" onClick={()=>{setPageSwitch(false)}}>Order History</button>
          </nav>

          <div className={`${pageSwitch ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center w-full h-auto bg-white mt-14 rounded-3xl">
              <div className="w-11/12 h-4/6">
                <div className="pt-10">Details Information</div>
                <br />
                <div className="w-full h-1 bg-lightGrey"></div>
                <div className="flex flex-col w-full gap-10 py-10">
                  
                  <div className="flex flex-col flex-wrap w-full md:flex-row">
                    <div className="flex flex-col w-full gap-10 md:flex-row">
                      <label htmlFor="firstName" className="flex-1">
                        <p>First Name</p> <br />
                        <input type="text" id="firstName" name="firstName" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                      </label>
                      <label htmlFor="lastName" className="flex-1">
                        <p>Last Name</p> <br />
                        <input type="text" id="lastName" name="lastName" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                      </label>
                    </div>
                  </div>
    
                  <div className="flex flex-col flex-wrap w-full md:flex-row">
                    <div className="flex flex-col w-full gap-10 md:flex-row">
                      <label htmlFor="email" className="flex-1">
                        <p>Email</p> <br />
                        <input type="text" id="email" name="email" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                      </label>
                      <label htmlFor="phoneNumber" className="relative flex-1">
                        <p>Phone Number</p> <br />
                        <input id="phoneNumber" name="phoneNumber" autoComplete="off" type="number" className="w-full pl-16 pr-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                        <div className="absolute bottom-0 flex items-center justify-center text-center border-r-2 border-solid h-14 w-14 border-slate-300">+62</div>
                      </label>
                    </div>
                  </div>
    
                </div>
                <div></div>
              </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-auto bg-white mt-14 rounded-3xl">
              <div className="w-11/12 h-4/6">
                <div className="pt-10">Account Privacy</div>
                <br />
                <div className="w-full h-1 bg-lightGrey"></div>
                <div className="flex flex-col w-full gap-10 py-10">
                  
                  <div className="flex flex-col flex-wrap w-full md:flex-row">
                    <div className="flex flex-col w-full gap-10 md:flex-row">
                      <label htmlFor="password" className="relative flex-1">
                        <p>Password</p> <br />
                        <input placeholder="Write your password" type={peekPassword ? 'password' : 'text'} id="password" name="password" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                        <button onClick={peek}>
                          {peekPassword ? <FaRegEyeSlash className={`absolute text-4xl bottom-2 right-3`}/> : <IoEyeOutline className={`absolute text-4xl bottom-2 right-3`}/>}
                        </button>
                      </label>
                      <label htmlFor="confirmPassword" className="relative flex-1">
                        <p>Confirm Password</p> <br />
                        <input placeholder="confirm your password" type={peekPassword ? 'password' : 'text'} id="confirmPassword" name="confirmPassword" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl"/>
                        <button onClick={peek}>
                          {peekPassword ? <FaRegEyeSlash className={`absolute text-4xl bottom-2 right-3`}/> : <IoEyeOutline className={`absolute text-4xl bottom-2 right-3`}/>}
                        </button>
                      </label>
                    </div>
                  </div>
    
                </div>
                <div></div>
              </div>
            </div>            
          </div>

          <div className={`${pageSwitch ? 'hidden' : ''}`}>
            <OrderHistory/>
          </div>
        </section>

      </section>
    </>
    
  )
}

export default Profile