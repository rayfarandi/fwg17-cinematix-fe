import { useState } from 'react'
import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";

function AddMovie() {
const [isDropdownShown, setIsDropdownShow] = useState(false);

const [image, setImage] = useState("");
  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
};
// const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("movie_cover", image);
//     formData.append("movie_name", e.target.fullname.value);
//     formData.append("genre", e.target.email.value);
//     formData.append("release_date", e.target.phone.value);
//     formData.append("duration", e.target.password.value);
//     formData.append("cast", e.target.address.value);
//     formData.append("category", e.target.address.value);
//     formData.append("sinopsis", e.target.address.value);
//     formData.append("schedules", e.target.address.value);
// }

const [dateTimeList, setDateTimeList] = useState([]);
const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');

const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
};

const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
  };

  const handleTimeAdd = () => {
    if (selectedDate && selectedTime) {
      const newDateTime = {
        date: selectedDate,
        time: selectedTime,
      };

      setDateTimeList([...dateTimeList, newDateTime]);
    }
  };
const consol = () => {
    console.log(dateTimeList)
}
  return (
    <>
        <Navbar isClick={() => setIsDropdownShow(true)} />
        <main className='bg-backgorund_gray px-4 py-5 w-screen flex justify-center'>
            <section className='bg-white w-full h-full px-2 py-2'>
                <div className='text-sm flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>Add New Movie</p>
                    <div id='Upload_Image' className='flex flex-col gap-4'>
                        {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="user-image"
                            className="w-20 h-20 rounded-md"
                            name="users_image"
                        />
                        ) : (
                        <p>Upload Image</p>
                        )}
                        <input
                        type="file"
                        id="image"
                        name="users_image"
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
                    <div id='Movie_Name' onClick={consol}>
                        <p>Movie Name</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie name'/>
                    </div>
                    <div id='Category'>
                        <p>Category</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie category'/>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div id='Release_date' className='md:flex-1'>
                            <p>Release date</p>
                            <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='YYYY/MM/DD'/>
                        </div>
                        <div id='Duration'>
                            <p>Duration (hour/minutes)</p>
                            <div className='flex gap-3'>
                                <input type="text" className='bg-input_bg px-3 py-3 w-1/2 outline-none border border-solid border-input_border rounded-md' placeholder='H'/>
                                <input type="text" className='bg-input_bg px-3 py-3 w-1/2  outline-none border border-solid border-input_border rounded-md' placeholder='M'/>
                            </div>
                        </div>
                    </div>
                    <div id='Director_Name'>
                        <p>Director Name</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add director name'/>
                    </div>
                    <div id='Cast'>
                        <p>Cast</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie cast'/>
                    </div>
                    <div id='Synopsis'>
                        <p>Synopsis</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie synopsis'/>
                    </div>
                    <div id='Location'>
                        <p>Add Location</p>
                        <input type="text" className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add location'/>
                    </div>
                    
                    <div id='Date_Time' className='flex flex-col gap-3'>
                        <p>Set Date & Time</p>
                        <div id='Date_and_time' className='flex flex-col gap-4'>
                            <input
                            type="date"
                            className='bg-backgorund_gray px-2 py-2 rounded-md'
                            placeholder='add date'
                            onChange={handleDateChange}
                            />
                            {selectedDate && (
                            <div className='flex items-center gap-3 font-semibold'>
                                <div
                                className='border border-solid border-purple_border px-2 w-fit rounded-md cursor-pointer'
                                onClick={handleTimeAdd}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 6.5625C15.2486 6.5625 15.4871 6.66127 15.6629 6.83709C15.8387 7.0129 15.9375 7.25136 15.9375 7.5V15C15.9375 15.2486 15.8387 15.4871 15.6629 15.6629C15.4871 15.8387 15.2486 15.9375 15 15.9375H7.5C7.25136 15.9375 7.0129 15.8387 6.83709 15.6629C6.66127 15.4871 6.5625 15.2486 6.5625 15C6.5625 14.7514 6.66127 14.5129 6.83709 14.3371C7.0129 14.1613 7.25136 14.0625 7.5 14.0625H14.0625V7.5C14.0625 7.25136 14.1613 7.0129 14.3371 6.83709C14.5129 6.66127 14.7514 6.5625 15 6.5625Z" fill="#5F2EEA"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0625 15C14.0625 14.7514 14.1613 14.5129 14.3371 14.3371C14.5129 14.1613 14.7514 14.0625 15 14.0625H22.5C22.7486 14.0625 22.9871 14.1613 23.1629 14.3371C23.3387 14.5129 23.4375 14.7514 23.4375 15C23.4375 15.2486 23.3387 15.4871 23.1629 15.6629C22.9871 15.8387 22.7486 15.9375 22.5 15.9375H15.9375V22.5C15.9375 22.7486 15.8387 22.9871 15.6629 23.1629C15.4871 23.3387 15.2486 23.4375 15 23.4375C14.7514 23.4375 14.5129 23.3387 14.3371 23.1629C14.1613 22.9871 14.0625 22.7486 14.0625 22.5V15Z" fill="#5F2EEA"/>
                                    </svg>
                                </div>
                                <input
                                    type="time"
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    className='bg-background_gray px-2 py-2 rounded-md'
                                />
                            </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2'>
                            
                            <h2>Stored Date and Time:</h2>
                            <ul>
                            {dateTimeList.map((item, index) => (
                                <li key={index}>
                                {item.date}, {item.time}
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    <button className='bg-primary w-full outline-none flex px-2 py-2 justify-center text-white rounded-md'>
                        Save Movie
                    </button>
                </div>
            </section>
        </main>
        {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  )
}

export default AddMovie