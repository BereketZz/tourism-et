import './App.css'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';


function HomePage() {

  return (
    <>
    <Navbar/>
   
<div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Ethiopia-2.jpg')" }} // Use your actual image URL here
    >
      {/* Overlay with color #034833 */}
      <div className="absolute inset-0 bg-[#034833] opacity-60"></div>
      
      {/* Content centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-8xl font-bold leading-tight">
          Journey with Confidence <br />
          <span className='text-pear'>Explore</span> Ethiopia
        </h1>
        
        {/* Paragraph */}
        <p className="mt-4 text-lg max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu nunc. 
          Duis egestas ac ante sed tincidunt.
        </p>
        
        {/* Button */}
        <Link
        to="/about"
          className="mt-8 px-6 py-3 bg-[#83CD20] text-[#034833] font-semibold rounded-lg hover:bg-green-700"
        >
          <span className='text-white flex gap-2 justify-center  items-center'>
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</span>

        </Link>
      </div>
    </div>
    </>
  )
}

export default HomePage
