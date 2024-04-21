import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import getImageUrl from "../utils/imageGet"
import OrderHistory from "../components/OrderHistory";

import { FaRegEyeSlash, FaTimes } from "react-icons/fa";
import { IoCheckmark, IoEyeOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProfile } from "../redux/reducer/profile";

const Profile = () => {
  const [peekPassword, setPeekPassword] = useState(true)
  const [peekConfirmPassword, setPeekConfirmPassword] = useState(true)
  const [pageSwitch, setPageSwitch] = useState(true)


  let x = ''
  const profile = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  if (profile?.phoneNumber) {
    x = profile.phoneNumber.slice(3)
  }

  const dispatch = useDispatch()

  const [updateSuccess, setUpdateSuccess] = useState()
  const [errMessage, setErrMessage] = useState()
  const [loadingUpdate, setLoadingUpdate] = useState()
  const updateProfile = async (event) => {
    event.preventDefault()

    const form = new URLSearchParams()
    const fields = ['firstName', 'lastName', 'email', 'phoneNumber', 'password']

    if(event.target.password.value && event.target.password.value !== event.target.confirmPassword.value){
        setErrMessage("confirm password does not match!")
        setTimeout(() => {
          setErrMessage(null)
        }, 3000);
        return
    }


    fields.forEach((field) => {
      if (profile && event.target[field].value && profile[field] !== event.target[field].value) {
        if(field === "phoneNumber" && event.target[field].value != x){
          const y = "+62" + event.target[field].value
          form.append(field, y)
          console.log(field, y)
        }else if (field === "phoneNumber" && event.target[field].value == x){
          return
        }else{
          form.append(field, event.target[field].value)
        }
      }
    })

    if(form.size == 0){
      setErrMessage("No data has been modified!")
      setTimeout(() => {
        setErrMessage(null)
      }, 3000);
      return
    }

    setLoadingUpdate("loading")

    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        }
      })

      setLoadingUpdate(null)


      dispatch(setProfile(data.results))
      setUpdateSuccess(data.message)
      setTimeout(() => {
        setUpdateSuccess(null)
      }, 3000);
      setErrMessage(null)

      if(event.target.password.value || event.target.confirmPassword.value){
        event.target.password.value = ''
        event.target.confirmPassword.value = ''
      }

    } catch (err) {
      setLoadingUpdate(null)
      setErrMessage(err.response.data.message)
      setTimeout(() => {
        setErrMessage(null)
      }, 3000);
    }
  }


  const [preview, setPreview] = useState()
  const changePicture = (e) => {
    const pictureUrl = URL.createObjectURL(e.target.files[0])
    setPreview(pictureUrl)
  }


  const [uploadSuccess, setUploadSuccess] = useState()
  const [errUpload, setErrUpload] = useState()
  const [loadingUpload, setLoadingUpload] = useState()
  const fileType = ["image/png","image/jpeg","image/jpg",]
  const uploadPhoto = async (e) => {
    if (e) {
      e.preventDefault()

    }
    const [file] = e.target.picture.files
    if(file.size > 2 * 1024 * 1024){
      setErrUpload("File too large. Maximum size is 2MB!")
      setTimeout(() => {
        setErrUpload(null)
      }, 3000);

      return
    }



    if(!fileType.includes(file.type)){
      setErrUpload("Extension not support!")
      setTimeout(() => {
        setErrUpload(null)
      }, 3000);

      return
    }

    
    setLoadingUpload("loading")
    try {
      if (file) {
        const form = new FormData()
        form.append('picture', file)
        const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        })
        
        setLoadingUpload(null)

        dispatch(setProfile(data.results))
        setPreview(null)
        setUploadSuccess(data.message)
        setTimeout(() => {
          setUploadSuccess(null)
        }, 3000);
        setErrMessage(null)
      }

    } catch (err) {
      setLoadingUpload(null)
      setErrUpload(err.response.data.message)
      setTimeout(() => {
        setErrUpload(null)
      }, 3000);
    }
  }

  const [order, setOrder] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  console.log(order)

  const getOrder = async () => {
    setIsLoading(true)
    setError(null)
    try{
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/history-order?page=${page}&limit=5`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setOrder([...order, ...res.data.results])
    }catch(err){
      setError(err)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getOrder()
  }, [page])

  window.onscroll = function(ev) {

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        if(!pageSwitch){
          setPage(page + 1)
        }
    }
};


  return (
    <>
      <Navbar />

      {/* <button onClick={debug}>---------------------ADSAHSFGASD</button> */}

      <section className="flex flex-col w-full h-auto md:flex-col bg-lightGrey lg:flex-row py-8">
     
        <aside className="flex items-center justify-center px-5 lg:w-96 h-fit lg:px-0">
          <div className="flex flex-col items-center justify-center w-full h-fit px-4 py-4 bg-white lg:w-4/5 rounded-3xl lg:gap-6">
            <div className="flex flex-col justify-center w-11/12 px-3 h-2/4 gap-5">
              <div className="flex items-center justify-between">
                <div className="leading-3 text-grey ">INFO</div>
                <button className="text-4xl leading-3 text-secondary">⋅⋅⋅</button>
              </div>
              <label htmlFor="picture">
                <form onSubmit={uploadPhoto} className="flex flex-col items-center justify-center gap-2">
                  <input multiple={false} onChange={changePicture} type="file" name="picture" id="picture" className="hidden" />
                  <img src={preview ? preview : profile?.picture ? profile.picture : getImageUrl("DefaultPfp", "jpg")} alt="profileImage" className="object-cover w-32 h-32 bg-black rounded-full" />
                  <div className={` ${!preview ? 'hidden' : 'flex'} w-full gap-4 mt-4`}>
                    <button disabled={loadingUpload} type="submit" className={`bg-[#77de62] rounded h-10 flex items-center justify-center gap-1 flex-1 active:scale-95 transition-all disabled:active:scale-100`}><IoCheckmark /> Confirm</button>
                    <button disabled={loadingUpload} type="reset" onClick={() => { setPreview() }} className={`bg-[#f05d5d] rounded h-10 flex gap-1 items-center justify-center flex-1 active:scale-95 transition-all disabled:active:scale-100`}><FaTimes /> Cancel</button>
                  </div>
                  <div className="">
                  <p className={`${uploadSuccess ? 'block' : 'hidden'} text-[green] text-sm`}>{uploadSuccess}</p>
                  <p className={`${errUpload ? 'block' : 'hidden'} text-danger text-sm`}>{errUpload}</p>
                  <p className={`${loadingUpload ? 'block' : 'hidden'} text-primary text-base`}>{loadingUpload}</p>
                  </div>
                </form>
              </label>
              <div className="text-2xl font-semibold text-center ">
                {profile?.firstName} {profile?.lastName} <br />
                <span className="text-lg text-grey">Moviegoers</span>
              </div>
            </div>

            <div className="w-full h-[2px] bg-lightGrey"></div>

            <div className="flex flex-col justify-center w-11/12 gap-5 px-3 h-2/4">
              <div>Loyalty Points</div>
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

        <section className={`flex-1 px-5 lg:pr-10`}>
        
          <nav className="flex w-full h-24 gap-5 px-5 text-xl bg-white md:px-16 md:gap-20 rounded-3xl">
            <button className={pageSwitch ? 'border-b-4  border-primary' : ''} onClick={() => { setPageSwitch(true) }}>Account Setting</button>
            <button className={pageSwitch ? '' : 'border-b-4  border-primary'} onClick={() => { setPageSwitch(false) }}>Order History</button>
          </nav>

          <form onSubmit={updateProfile} className={`${pageSwitch ? '' : 'hidden'}`}>
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
                        <input defaultValue={profile?.firstName} type="text" id="firstName" name="firstName" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                      </label>
                      <label htmlFor="lastName" className="flex-1">
                        <p>Last Name</p> <br />
                        <input defaultValue={profile?.lastName} type="text" id="lastName" name="lastName" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col flex-wrap w-full md:flex-row">
                    <div className="flex flex-col w-full gap-10 md:flex-row">
                      <label htmlFor="email" className="flex-1">
                        <p>Email</p> <br />
                        <input defaultValue={profile.email} type="text" id="email" name="email" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                      </label>
                      <label htmlFor="phoneNumber" className="relative flex-1">
                        <p>Phone Number</p> <br />
                        <input defaultValue={x} id="phoneNumber" name="phoneNumber" autoComplete="off" type="number" className="w-full pl-16 pr-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                        <div className="absolute bottom-0 flex items-center justify-center text-center border-r-2 border-solid h-14 w-14 border-slate-300">+62</div>
                      </label>
                    </div>
                  </div>

                </div>
                <div></div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full h-auto bg-white my-14 rounded-3xl">
              <div className="w-11/12 h-4/6">
                <div className="pt-10">Account Privacy</div>
                <br />
                <div className="w-full h-1 bg-lightGrey"></div>
                <div className="flex flex-col w-full gap-10 py-10">

                  <div className="flex flex-col flex-wrap w-full md:flex-row">
                    <div className="flex flex-col w-full gap-10 md:flex-row">
                      <label htmlFor="password" className="relative flex-1">
                        <p>Password</p> <br />
                        <input placeholder="Write your password" type={peekPassword ? 'password' : 'text'} id="password" name="password" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                        <button type="button" onClick={() => setPeekPassword(!peekPassword)}>
                          {peekPassword ? <FaRegEyeSlash className={`absolute text-4xl bottom-2 right-3`} /> : <IoEyeOutline className={`absolute text-4xl bottom-2 right-3`} />}
                        </button>
                      </label>
                      <label htmlFor="confirmPassword" className="relative flex-1">
                        <p>Confirm Password</p> <br />
                        <input placeholder="confirm your password" type={peekConfirmPassword ? 'password' : 'text'} id="confirmPassword" name="confirmPassword" autoComplete="off" className="w-full px-8 ml-auto border outline-none h-14 border-slate-300 bg-slate-100 rounded-xl" />
                        <button type="button" onClick={() => setPeekConfirmPassword(!peekConfirmPassword)}>
                          {peekConfirmPassword ? <FaRegEyeSlash className={`absolute text-4xl bottom-2 right-3`} /> : <IoEyeOutline className={`absolute text-4xl bottom-2 right-3`} />}
                        </button>
                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:w-1/2 w-full justify-between items-center lg:h-28">
              <div>
                <p className={`${updateSuccess ? 'block' : 'hidden'} text-[green] text-lg`}>{updateSuccess}</p>
                <p className={`${errMessage? 'block' : 'hidden'} text-danger text-lg`}>{errMessage}</p>
                <p className={`${loadingUpdate? 'block': 'hidden'} text-primary text-lg`}>{loadingUpdate}</p>
              </div>
            <button className="flex items-center justify-center w-full h-16 text-2xl text-white md:h-20 rounded-xl bg-primary disabled:bg-slate-500 relatve  active:scale-95 transition-all">
              Update Changes
            </button>
            </div>
          </form>

          <div className={`${pageSwitch ? 'hidden' : ''}`}>
            {order && order.map((item) => (
              <OrderHistory
                key={String(item.id)}
                title={item.MovieTitle}
                paid={item.isPaid}
                time={item.time}
                date={item.date}
                va={item.accountNumber}
                id={item.id}
                used={item.isUsed}
                price={item.total}
                category={item.rating}
                seat={item.seatCode}
                expired={item.expiredDate}
                image={item.cinemaImage}
              // airingDate={getWholeDate(item.date, item.time)}
              />
            ))}
          </div>
        </section>

      </section>
    </>

  )
}

export default Profile