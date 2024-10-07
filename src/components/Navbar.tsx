import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  // Check if the current page is /about
  return (
    <header className="bg-white  ">
    <div className="mx-[16px] lg:mx-[120px] sm:mx-[16px] md:[60px]   ">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="flex  gap-2 text-teal-600" href="#">
          <img src="/noob.png" className="w-10 h-8  md:w-10 md:h-8 lg:w-12 lg:h-8" />

          <h1 className="text-black text-xl  md:text-xl lg:text-2xl font-bold">
    Tourism ET
  </h1>  
          </a>
        </div>
  
        <div className="md:flex md:items-center md:gap-14">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li >
                <Link to="/" className={`${location.pathname === '/' ? ' text-white bg-pear p-[10px]  rounded-[10px] border-none transition' : ''} text-black`} > HOME </Link>
              </li>
  
              <li>
              <Link to="/about" className={`${location.pathname === '/about' ? ' text-white bg-pear p-[10px]  rounded-[10px] border-none transition' : ''} text-black hover:cursor-pointer`} >ABOUT US</Link>
              </li>
  
              <li>
                <a className="text-black" href="#"> SERVICES </a>
              </li>
  
              <li>
                <a className="text-black" href="#"> PROJECTS </a>
              </li>
  
              <li>
                <a className="text-black" href="#"> BLOGS </a>
              </li>
  
            </ul>
          </nav>
  
          <div className="flex items-center gap-4">
           
  
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
