//import

import axios from "axios";
import getImageUrl from "../utils/imageGet";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { login as loginAction } from "../redux/reducer/auth";
import { FiEyeOff, FiEye, } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";


const SignIn = () => {
    // Ganti type di input dari password ke text
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    //===========================================================================


    const [errMessage, setErrMessage] = useState(null)

    const [loginSuccess, setLoginSuccess] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = useSelector(state => state.auth.token)

    const loginProcess = async (e) => {
        e.preventDefault()
        const { value: email } = e.target.email
        const { value: password } = e.target.password

        const form = new URLSearchParams()
        form.append('email', email)
        form.append('password', password)

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, form.toString())
            setErrMessage('')
            setLoginSuccess(data.message)
            setTimeout(() => {
                setLoginSuccess(false)
                dispatch(loginAction(data.results.token))
                navigate('/')
            }, 2000)
        } catch (err) {
            setErrMessage(err.response.data.message)
            setTimeout(() => {

                setErrMessage('')
            }, 2000)

        }
    }

    // useEffect(()=>{
    //     if(token){
    //         navigate('/movie')
    //     }
    // },[token, navigate])


    //===========================================================================
    return (
        <>
            <header className="relative flex items-center justify-center font-mulish">
                <img className="object-cover w-screen h-screen lg:h-fit" src={getImageUrl("SignUp", "png")} alt="paginate-hero" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="gap-[10px] lg:w-[50%]   mx-6 lg:mx-0 absolute flex flex-col justify-center items-center">
                    <img className="w-[100px] h-[50px] lg:w-[200px] lg:h-[100px]" src={getImageUrl("Cinematix", "svg")} alt="paginate-hero" />
                    <div className="p-[20px] w-60 lg:w-96 flex  bg-light rounded-lg flex-col justify-center items-center">
                        <div className="relative flex flex-col gap-[20px]">
                            <div className="w-full gap-[5px] flex flex-col justify-center items-start">
                                <div className=" font-bold text-[18px] md:text-[32px]">Welcome Back👋</div>
                                <div className="text-[12px] md:text-[16px] text-[#4F5665]">Sign in with your data that you entered during your registration</div>
                            </div>

                            <form onSubmit={loginProcess} className="gap-[5px] flex flex-col">
                                <div className="flex justify-center h-fit">
                                    <p className={`${loginSuccess ? 'block' : 'hidden'} font-bold text-[green] md:text-[16px] text-xs`}>{loginSuccess}</p>
                                    <p className={`${errMessage ? 'block' : 'hidden'} font-bold text-danger md:text-[16px] text-xs`}>{errMessage}</p>
                                </div>
                                 {/* <p className={`${loginSuccess ? 'block' : 'hidden'} -mt-4 w-full text-center md:text-[16px]  text-xs absolute p-[5px] font-bold text-[green]`}>{loginSuccess}</p>
                                 <p className={`${errMessage ? 'block' : 'hidden'} -mt-4 w-full text-center md:text-[16px]  text-xs absolute p-[5px] font-bold text-danger`}>{errMessage}</p> */}
                                <div className="relative flex flex-col gap-3">
                                    <label className="text-[12px] md:text-[16px] text-[#4E4B66] font-bold" htmlFor="email">Email</label>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="text-[12px] md:text-[16px] w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-0 md:py-2 outline-none" name="email"
                                            id="email" type="email" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="relative flex flex-col gap-3">
                                    <label className="text-[12px] md:text-[16px] text-[#4E4B66] font-bold" htmlFor="password">Password</label>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="text-[12px] md:text-[16px] w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-0 md:py-2 outline-none" name="password"
                                            id="password" placeholder="Enter Your password" type={passwordVisible ? "text" : "password"} />
                                        <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                            {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                <Link to="/signin" className="text-[12px] md:text-[16px] text-primary text-">Forgot your password?</Link>
                                </div>
                                <div>
                                    <button className="text-[12px] md:text-[16px] w-full py-1 md:py-2 font-bold text-white transition-all duration-500 rounded-lg bg-primary active:scale-95" type="submit">Login</button>
                                </div>
                                <div className="flex items-center ">
                                    <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                                    <p className="flex-1 text-[12px] md:text-[16px] text-center text-[#4F5665]">Or <Link to="/signUp" className="text-primary">SignUp</Link></p>
                                    <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                                </div>
                                <div className="flex flex-row gap-[10px]">
                                    <button className=" flex justify-center bg-[#E8E8E8] rounded-lg w-full py-[5px]"><img
                                        src={getImageUrl("googleSignUp", "svg")} alt="Logo GoogleSignUp" /><span className="hidden md:block">Google</span></button>
                                    <button className="flex justify-center gap-[10px] bg-[#E8E8E8] rounded-lg w-full py-[5px]"><img
                                        src={getImageUrl("facebookSignUp", "svg")} alt="Logo facebookSignUp" /><span className="hidden md:block">Facebook</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default SignIn;