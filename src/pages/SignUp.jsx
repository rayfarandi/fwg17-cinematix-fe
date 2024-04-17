import axios from "axios";
import getImageUrl from "../utils/imageGet";
import React, { useState } from "react"
import { FiEyeOff, FiEye, } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    const [tcMessage, setTcmessage] = useState()
    const [registerSuccess, setRegisterSuccess] = useState(null)
    const [errMessage, setErrMessage] = useState(null)

    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)
    const checked = (e) => { setAgree(e.target.checked) }
    const processRegister = async (event) => {
        event.preventDefault()
        const { value: email } = event.target.email
        const { value: password } = event.target.password

        if (agree) {
            const form = new URLSearchParams()
            form.append('email', email)
            form.append('password', password)

            try {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, form.toString())
                setRegisterSuccess(data.message)
                console.log(setRegisterSuccess)
                setErrMessage(null)
                setTimeout(() => {
                    navigate('/signin')
                }, 2000);
            } catch (err) {
                setErrMessage(err.response.data.message)
                setTimeout(() => {
                    setErrMessage(null)
                }, 2000);
            }
        } else {
            setTcmessage("to continue, please check the box below")
        }


    }



    return (
        <>
            <header className="relative flex items-center justify-center font-mulish">
                <img className="w-screen h-screen lg:h-fit object-cover" src={getImageUrl("SignUp", "png")} alt="paginate-hero" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="gap-[10px] lg:w-[50%] absolute flex flex-col justify-center items-center">
                    <img className="w-[100px] h-[50px] lg:w-[200px] lg:h-[100px]" src={getImageUrl("Cinematix", "svg")} alt="paginate-hero" />
                    <div className="p-[20px] rounded-lg flex bg-light flex-col justify-center items-center">
                        <div className="flex flex-col gap-[20px] items-center">
                            <div className="w-full gap-3 md:gap-[10px] flex justify-center items-center">
                                <div className="w-[50px] md:w-[70px] flex flex-col justify-center items-center">
                                    <div className="text-white flex justify-center items-center bg-primary text-[12px] w-[25px] h-[25px] md:text-[16px] md:w-10 md:h-10 rounded-full">1</div>
                                    <div className="text-[12px] md:text-sm text-[#4E4B66]">Fill Form</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className=" md:block hidden bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                    <div className=" md:block hidden bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className="md:block hidden bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className="md:block hidden bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-white flex justify-center items-center bg-[#A0A3BD] text-[12px] w-[25px] h-[25px] md:text-[16px] md:w-10 md:h-10 rounded-full">2</div>
                                    <div className="text-[12px] md:text-sm text-[#A0A3BD]">Activate</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className=" md:block hidden bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                    <div className=" md:block hidden bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className=" bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className="md:block hidden bg-[#A0A3BD] h-[2px] w-[15px]"></div>
                                    <div className="md:block hidden bg-[#A0A3BD] h-[2px] w-[5px]"></div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-white flex justify-center items-center bg-[#A0A3BD] text-[12px] w-[25px] h-[25px] md:text-[16px] md:w-10 md:h-10 rounded-full">3</div>
                                    <div className="text-[12px] md:text-sm text-[#A0A3BD]">Done</div>
                                </div>
                            </div>

                            <form onSubmit={processRegister} className="gap-[10px] flex flex-col w-56 lg:w-96">
                                <div className="flex justify-center h-fit">
                                    <p className={`${registerSuccess ? 'block' : 'hidden'} font-bold text-[green] md:text-[16px] text-xs`}>{registerSuccess}</p>
                                    <p className={`${errMessage ? 'block' : 'hidden'} font-bold text-danger md:text-[16px] text-xs`}>{errMessage}</p>
                                </div>
                                    {/* <p className={`${registerSuccess ? 'block' : 'hidden'} md:-mt-4 md:ml-[140px] -mt-[25px] md:text-[16px] ml-20 text-xs absolute p-[5px] font-bold text-[green]`}>{registerSuccess}</p> */}
                                    {/* <p className={`${errMessage ? 'block' : 'block'} md:-mt-4 md:ml-[140px] -mt-5 md:text-[16px] ml-12 text-xs absolute p-[5px] font-bold text-danger`}>errMessage</p> */}
                                <div className="relative flex flex-col gap-2">
                                    <label className="text-[12px] md:text-[16px] text-[#4E4B66] font-bold" htmlFor="email">Email</label>
                                    <div className="-mt-[5px] flex relative items-center"></div>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="text-[12px] md:text-[16px] w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-1 md:py-2 outline-none" name="email"
                                            id="email" type="email" placeholder="Enter Your Email" />
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-3">
                                    <label className="text-[12px] md:text-[16px]  text-[#4E4B66] font-bold" htmlFor="password">Password</label>
                                    <div className="-mt-[10px] flex relative items-center">
                                        <input required className="text-[12px] md:text-[16px] w-full text-[#4F5665] border-solid border-2 rounded-lg px-5 py-1 md:py-2 outline-none" name="password"
                                            id="password" placeholder="Enter Your password" type={passwordVisible ? "text" : "password"} />
                                        <div className="absolute right-3" onClick={togglePasswordVisibility}>
                                            {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                        </div>
                                    </div>
                                </div>

                                {tcMessage && 
                                <p className="text-red-700 text-xs lg:text-base">{tcMessage}</p>
                                }

                                <div>
                                    <label className="lg:gap-[20px] gap-2 flex items-center">
                                        <input onChange={checked} id="tc" name="tc" value="yes" type="checkbox" className="lg:w-5 lg:h-5 w-3 h-3 form-checkbox" />
                                        <span className="text-[12px] md:text-[16px]  text-[#4E4B66]">I agree to terms & conditions</span>
                                    </label>
                                </div>

                                <div>
                                    <button className="text-[12px] md:text-[16px] w-full py-1 md:py-2 font-bold text-white transition-all duration-500 rounded-lg bg-primary active:scale-95" type="submit">Join For Free Now</button>
                                </div>

                                <div className="flex justify-center ">
                                    <div className="text-[12px] md:text-[16px] text-[#4E4B66]">Already have an account? <Link to="/signin" className="text-primary"> Log In </Link>
                                    </div>
                                </div>

                                <div className="flex items-center ">
                                    <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                                    <p className="flex-1 text-center text-[12px] md:text-[16px]  text-[#4F5665]">Or</p>
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