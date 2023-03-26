import logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-14 p-1 text-white w-full sticky top-0 bg-gray-800 z-50'>
        <div className="flex justify-between w-[60%] px-5">
          <div className="w-12 rounded-full h-12">
          <img className="w-full h-full object-cover rounded-full" src={logo} alt="" />
          </div>
          <div className="flex justify-evenly items-center w-[90%]">
          <button className="h-9 ease-in-out duration-500 rounded-md p-1 font-semibold hover:underline hover:underline-offset-8">Home</button>
          <button className="h-9 ease-in-out duration-500 rounded-md p-1 font-semibold hover:underline hover:underline-offset-8">Events</button>
          <button className="h-9 ease-in-out duration-500 rounded-md p-1 font-semibold hover:underline hover:underline-offset-8">Props</button>
          <button className="h-9 ease-in-out duration-500 rounded-md p-1 font-semibold hover:underline hover:underline-offset-8">About Us</button>
          </div>
        </div>
          {
            localStorage.getItem('isLogged') ? <div className="flex justify-evenly w-[20%] px-1"></div> : <div className="flex justify-evenly w-[20%] px-1">
              <button className="h-9 hover:bg-white ease-in-out duration-500 rounded-md p-1 font-semibold hover:text-gray-800">Login</button>
          <button className="h-9 hover:bg-white ease-in-out duration-500 rounded-md p-1 font-semibold hover:text-gray-800">Register</button>
            </div>
          }
    </div>
  )
}

export default Navbar