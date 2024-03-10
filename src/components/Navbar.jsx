/* eslint-disable react/prop-types */
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import getImageUrl from "../utils/imageGet";
import { useEffect, useState } from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeProfile, setProfile } from "../redux/reducer/profile";
import {logout as logoutAction} from "../redux/reducer/auth"
import axios from "axios";


function Navbar(props) {
  const token = useSelector(state => state.auth.token)
  const [showLogOut, setShowLogOut] = useState(false)

  const peekLogout = () => {
    if(!showLogOut){
      setShowLogOut(true)
      setTimeout(()=>{
        setShowLogOut(false)
      }, 2000)
    }else{
      setShowLogOut(false)
    }
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const processLogout = () => {
    dispatch(removeProfile())
    dispatch(logoutAction())
    navigate('/signin')
  }

  const getProfile = async () =>{
    if(token){
      try{
      const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        dispatch(setProfile(data.results))
      }catch(err){
        console.log(err)
      }
    }
  }

  const profile = useSelector(state => state.profile.data)

  useEffect(()=>{
    getProfile()
  },[])
  return (
    <>

      {token ? <nav className="w-full flex justify-between py-4 px-5 items-center font-montserrat bg-light md:px-11 lg:px-11 xl:px-[130px] border-b border-[#E8E8E8] font-mulish">
        <div className="nav-start">
          <div className="flex items-center gap-x-4">
            <div>
              <img
                src={getImageUrl("Cinematix", "svg")}
                alt="logo"
                className="w-20 h-10 md:w-28 md:h-14 lg:w-[130px] lg:h-[51px]"
              />
            </div>
          </div>
        </div>

        <div className="nav-mid text-[#0F172A] hidden lg:flex lg:gap-x-[60px]">
          <Link to="/" className="text-sm">
            Home
          </Link>
          <a href="/movie" className="text-sm">
            Movie
          </a>
        </div>
        <div className="relative hidden nav-end lg:flex lg:gap-x-4 lg:items-center">
          <button onClick={peekLogout} className="rounded-full">
            <img src={profile?.picture ? profile.picture : getImageUrl("DefaultPfp","jpg")} alt="" className="object-cover w-12 h-12 rounded-full"/>
          </button>

          <div className={`${showLogOut ? 'flex flex-col' : 'hidden'} z-10 absolute items-center justify-center w-32 h-auto font-bold border-2 border-slate-500 rounded-md bg-white top-14 -right-10`}>
            <button onClick={()=>{navigate('/profile')}} className="flex items-center gap-2">
              <CiUser className="my-3 text-xl font-extrabold"/> Profile
            </button>
            <button onClick={processLogout} className="flex items-center gap-2 text-red-600 border-t-2 border-slate-500">
              <CiLogout className="my-3 text-xl font-extrabold"/> Log Out
            </button>
          </div>
          
        </div>
        <button className="lg:hidden" onClick={() => props.isClick()}>
          <img
            src={getImageUrl("burger-menu", "svg")}
            alt="burger-menu"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </button>
      </nav> : <nav className="w-full flex justify-between py-4 px-5 items-center font-montserrat bg-light md:px-11 lg:px-11 xl:px-[130px] border-b border-[#E8E8E8] font-mulish">
        <div className="nav-start">
          <div className="flex items-center gap-x-4">
            <div>
              <img
                src={getImageUrl("Cinematix", "svg")}
                alt="logo"
                className="w-20 h-10 md:w-28 md:h-14 lg:w-[130px] lg:h-[51px]"
              />
            </div>
          </div>
        </div>
        <div className="nav-mid text-[#0F172A] hidden lg:flex lg:gap-x-[60px]">
          <Link to="/" className="text-sm">
            Home
          </Link>
          <a href="/movie" className="text-sm">
            Movie
          </a>
        </div>
        <div className="hidden nav-end lg:flex lg:gap-x-4 lg:items-center">
          <Link
            to="/signin"
            className="px-4 py-3 text-sm border-2 rounded-md border-primary text-primary focus:ring-2"
          >
            SignIn
          </Link>
          <Link
            to="/signup"
            className="border-2 border-primary py-3 px-4 rounded-md text-[#F8FAFC] bg-primary focus:ring-2 text-sm"
          >
            Sign Up
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => props.isClick()}>
          <img
            src={getImageUrl("burger-menu", "svg")}
            alt="burger-menu"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </button>
      </nav>}
      
      


    </>

      
  );
}

export default Navbar;
