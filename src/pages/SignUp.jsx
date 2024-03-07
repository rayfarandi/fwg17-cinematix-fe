//import

import getImageUrl from "../utils/imageGet";
import React from "react"
// import axios from 'axios'
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { login as loginAction} from "../redux/reducers/auth"
// import { Link } from "react-router-dom"
import { FiEyeOff, FiEye, } from "react-icons/fi"
// import loginImage from "../assets/image/login.png"
// import logoAuth from "../assets/image/logo auth.png"
// import logoGoogle from "../assets/image/google.svg"
// import logoFacebook from "../assets/image/facebook.svg"

const SignUp = () => {
    // Ganti type di input dari password ke text
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <>
            <header className="font-mulish relative h-screen flex justify-center items-center">
                <div><img className="h-screen w-screen" src={getImageUrl("SignUp", "png")} alt="paginate-hero" /></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className=" gap-[10px] w-[50%] absolute flex flex-col justify-center items-center">
                    <img className=" w-[200px] h-[100px]" src={getImageUrl("Cinematix", "svg")} alt="paginate-hero" />
                    <div className=" p-[30px] flex bg-light flex-col  justify-center items-center">
                        <div className=" flex flex-col gap-[10px]">
                            <div className="w-full gap-[20px] flex justify-center items-center">
                                <div className="flex flex-col justify-center items center">
                                    <div className="text-white flex justify-center items-center bg-primary w-[45px] h-[45px] rounded-full">1</div>
                                    <div className="text-[#4E4B66]">Fill Form</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                </div>
                                <div className="flex flex-col justify-center items center">
                                    <div className="text-white flex justify-center items-center bg-[#A0A3BD] w-[45px] h-[45px] rounded-full">2</div>
                                    <div className="text-[#A0A3BD]">Activate</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                </div>
                                <div className="flex flex-col justify-center items center">
                                    <div className="text-white flex justify-center items-center bg-[#A0A3BD] w-[45px] h-[45px] rounded-full">3</div>
                                    <div className="text-[#A0A3BD]">Done</div>
                                </div>
                            </div>
                            <form className="gap-[10px] flex flex-col">
                                <div className="relative flex flex-col gap-3">
                                    <label className=" text-[#4E4B66] font-bold" htmlFor="email">Email</label>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-2 outline-none" name="email"
                                            id="email" type="email" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="relative flex flex-col gap-3">
                                    <label className=" text-[#4E4B66] font-bold" htmlFor="password">Password</label>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-2 outline-none" name="password"
                                            id="password" placeholder="Enter Your password" type={passwordVisible ? "text" : "password"} />
                                        <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                            {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="gap-[20px] flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5" />
                                        <span className=" text-[#4E4B66]">I agree to terms & conditions</span>
                                    </label>
                                </div>
                                <div>
                                    <button className="rounded-lg py-2 bg-primary w-full font-bold text-white active:scale-95 transition-all duration-500" type="submit">Join For Free Now</button>
                                </div>
                                <div className=" flex justify-center">
                                    <div className="text-[#4E4B66]">Already have an account?<span className="text-primary"> Log In</span>
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                                    <p className="flex-1 text-center text-[#4F5665]">Or</p>
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

export default SignUp;