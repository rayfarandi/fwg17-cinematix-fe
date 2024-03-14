import { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';
import { RxCross1 } from "react-icons/rx";
import { TbMovieOff } from "react-icons/tb";
import { number } from 'prop-types';

function AddMovie() {
    const [isDropdownShown, setIsDropdownShow] = useState(false);
    const token = useSelector(state=>state.auth.token)
    const [image, setImage] = useState("");
    const changeImageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const [message, setMessage] = useState('')

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
    };

    const [listTime, setListTime] = useState([{}])
    const getTime = async () => {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/airing-time`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setListTime(res.data.results)
    }

    const [time, setTime] = useState(false) 
    const [choosedTime, setChoosedTime] = useState([])
    const showTime = (x) => {
        if(!time){
          setTime(true)
        }else{
          setTime(false)
        }
        if(x){
            if(!choosedTime.includes(x)){
                setChoosedTime([...choosedTime, x])
            }
        }
      }

    const removeTime = (arr, x) => {
        const filteredArr = arr.filter((str)=>str != x)
        setChoosedTime(filteredArr)
    }

      useEffect(()=>{
        getTime()
      },[])

      const rating = ['G', 'PG', 'PG-13', 'R', 'NC-17']
      const [listRating, setListRating] = useState(false)
      const [choosedRating, setChoosedRating] = useState('Choose Rating')
      const [ratingId, setRatingId] = useState()
      const showRating = (x,i) => {
        if(!listRating){
          setListRating(true)
        }else{
          setListRating(false)
        }
        if(x){
            setChoosedRating(x)
            setRatingId(i)
        }
      }

      const postMovie = async (e) => {
        e.preventDefault()
        try{
            const [file] = e.target.image.files
            const { value: title } = e.target.title
            const { value: genre } = e.target.genre
            const { value: releaseDate } = e.target.releaseDate
            const { value: dHour } = e.target.dHour
            const { value: dMinute } = e.target.dMinute
            const duration = Number(dHour * 60) + Number(dMinute) + ' minutes'
            const { value: director } = e.target.director
            const { value: casts } = e.target.casts
            const { value: sinopsis } = e.target.sinopsis
            const { value: location } = e.target.location
            // console.log(ratingId)
            // console.log(selectedDate)
            const airingTime = choosedTime.toString()

            const form = new FormData()

            form.append('image', file)
            form.append('title', title)
            form.append('genre', genre)
            form.append('releaseDate', releaseDate)
            form.append('duration', duration)
            form.append('director', director)
            form.append('casts', casts)
            form.append('sinopsis', sinopsis)
            form.append('location', location)
            form.append('ratingId', ratingId)
            form.append('date', selectedDate)
            form.append('airingTime', airingTime)

             
      const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/add-new-movie`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })

      setImage('')

      console.log(data)

        }catch(err){
            console.log(err)
        }
      }
    return (
        <>
        {/* <div className='fixed left-[50%] top-[15%] bg-slate-100 w-40 h-10 text-center items-center flex justify-center -translate-x-[25%]' >ASDASDASD</div> */}
            <Navbar isClick={() => setIsDropdownShow(true)} />
            <main className='bg-gray-300 py-[50px] flex justify-center'>
                <section className='max-w-[full] w-[85%] bg-white h-full md:p-[50px] p-[20px] rounded-lg'>
                    <form id='postForm' onSubmit={postMovie} className='flex flex-col gap-4 text-sm'>
                        <p className='text-xl font-semibold'>Add New Movie</p>
                        <div id='Upload_Image' className='flex flex-col gap-4'>
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="user-image"
                                    className="object-cover w-[300px] h-[400px] rounded-md"
                                    name="users_image"
                                />
                            ) : (
                                <p>Upload Image</p>
                            )}
                            <input
                                type="file"
                                id="image"
                                name="image"
                                className="hidden"
                                onChange={changeImageHandler}
                            />
                            <label
                                htmlFor="image"
                                className="text-sm font-medium text-white py-2 px-2 bg-primary rounded-md w-1/2 max-w-[200px] lg:text-xs xl:text-sm  outline-none flex justify-center items-center text-center cursor-pointer"
                            >
                                Upload
                            </label>
                        </div>
                        <div>
                            <p>Movie Name</p>
                            <input id='title' name='title' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add movie name' />
                        </div>
                        <div>
                            <p>Genre</p>
                            <input id='genre' name='genre' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add movie genre' />
                        </div>
                        <div className='flex flex-col gap-4 lg:flex-row'>
                            <div className='md:flex-1'>
                                <p>Release date</p>
                                <input id='releaseDate' name='releaseDate' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='YYYY-MM-DD' />
                            </div>
                            <div>
                                <p>Duration (hour/minutes)</p>
                                <div className='flex gap-3 '>
                                    <input  id='dHour' name='dHour' type="text" className='w-1/2 px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='H' />
                                    <input id='dMinute' name='dMinute' type="text" className='w-1/2 px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='M' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Director Name</p>
                            <input  id='director' name='director' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add director name' />
                        </div>
                        <div>
                            <p>Cast</p>
                            <input id='casts' name='casts' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add movie cast' />
                        </div>
                        <div>
                            <p>Synopsis</p>
                            <textarea  id='sinopsis' name='sinopsis' rows="7" cols="0" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add movie synopsis' />
                        </div>
                        <div>
                            <p>Add Location</p>
                            <input  id='location' name='location' type="text" className='w-full px-3 py-3 border border-solid rounded-md outline-none bg-input_bg border-input_border' placeholder='Add location' />
                        </div>

                        <div className="relative flex flex-col items-center justify-center py-2 cursor-pointer w-44 roun100d-md bg-slate-100">
                            <button onClick={()=>{showRating()}} type="button" className="flex items-center justify-center w-full gap-2 px-3">
                              <TbMovieOff className='text-base text-primary'/>
                              <p className="font-semibold text-normal text-secondary">
                                {choosedRating}
                              </p>
                              <div className="flex items-end justify-end flex-1">
                              {listRating ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}

                              </div>
                            </button>
                              <div className={`${listRating ? '' : 'hidden'} bg-slate-100 flex flex-col gap-2 top-8 z-10 rounded-md absolute px-4 w-full py-2`}>
                                {rating && rating.map((x, i)=>{
                                    const id = i + 1
                                  return(
                                    <div className="w-full text-blue-400 border-b hover:border-b hover:border-slate-800" key={i}>
                                      <button className="flex justify-start w-full" type="button" onClick={()=>{showRating(x, id)}}>{x}</button>
                                    </div>
                                  )
                                })}
                              </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p >Set Date & Time</p>
                            <div className='flex flex-col gap-4'>
                                <input id='dates' type="date" className='flex px-2 py-2 border-2 rounded-md outline-none w-44 bg-backgorund_gray' onChange={handleDateChange}/>  
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center py-2 cursor-pointer w-44 roun100d-md bg-slate-100">
                            <button onClick={()=>{showTime()}} type="button" className="flex items-center justify-center w-full gap-2 px-3">
                              <FiClock className='text-primary'/>
                              <p className="font-semibold text-normal text-secondary">
                                Choose Time
                              </p>
                              <div className="flex items-end justify-end flex-1">
                              {time ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}

                              </div>
                            </button>
                              <div className={`${time ? '' : 'hidden'} bg-slate-100 flex flex-col gap-2 top-10 rounded-md px-4 w-full pt-4`}>
                                {listTime && listTime.map((x, i)=>{
                                    let time
                                    if(x.time){
                                        time = x.time.slice(11, 16)
                                    }
                                  return(
                                    <div className="w-full border-b text-secondary hover:border-b hover:border-slate-800" key={i}>
                                      <button className="flex justify-start w-full" type="button" onClick={()=>{showTime(time)}}>{time}</button>
                                    </div>
                                  )
                                })}
                              </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Selected Time</p>
                            <div className='flex flex-wrap gap-3'>
                                {choosedTime && choosedTime.map((x, i)=>{
                                    return (
                                        <div key={i} className=''>
                                            <p  className='flex items-center gap-2 p-2 font-semibold border-2 border-primary text-primary'><button type='button' onClick={()=>{removeTime(choosedTime, x)}} ><RxCross1/></button>{x}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <button className='flex justify-center w-full px-2 py-2 text-white rounded-md outline-none bg-primary'> Save Movie </button>
                    </form>
                </section>
            </main>
            {isDropdownShown && (
                <DropdownMobile isClick={() => setIsDropdownShow(false)} />
            )}
        </>
    )
}

export default AddMovie