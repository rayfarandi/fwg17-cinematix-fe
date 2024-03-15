import Navbar from "../components/Navbar"

const Unauthorized = () => {
  return(

    <div className="text-white bg-primary flex items-center justify-center w-screen h-screen text-center font-bold text-[50px]">
      <div className="hidden">
        <Navbar/>
      </div>
    401 <br />
    Unauthorized
    </div>
  )
}

export default Unauthorized