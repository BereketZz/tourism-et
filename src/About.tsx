import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="relative flex flex-col items-start   mx-[16px] lg:mx-[120px] sm:mx-[16px] md:mx-[40px]  ">
      {/* About Us Box */}
      <div
        className="w-full h-[150px] lg:h-[258px] bg-[#034833] opacity-80 rounded-tl-[50px] relative flex items-center justify-start"
        style={{ borderRadius: '50px' }}
      >
        <h1 className="text-white font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-[45px] sm:leading-[70px] lg:leading-[90px] pl-4 sm:pl-8 lg:pl-12">
          About Us
        </h1>
      </div>

      {/* Title, Line, Paragraph, and Button Section */}
      <div className="mt-8 sm:mt-12 flex     flex-col lg:flex-row items-center justify-between w-full">
        <div className="flex-[0.8]">
          <h2 className="text-[#034833] font-bold text-[24px] sm:text-[36px] lg:text-[48px]">
            Developing Confident and Successful Travel
          </h2>

          {/* Horizontal Line */}
          <div className="w-full h-[4px] bg-[#83CD20] my-4"></div>

          {/* Paragraph */}
          <p className="text-[#848383] text-[24px] sm:text-lg leading-relaxed">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#83CD20] text-white font-semibold rounded-lg"
          >
            Back to Home
          </Link>
        </div>

        {/* Circular Image Div with Box Shadow */}
        <div
          className="  w-[400px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[532px] lg:h-[507px] rounded-full overflow-hidden mt-8 lg:mt-0 lg:ml-10"
          style={{ boxShadow: '0px 4px 12px 0px #0000002E' }} // Box shadow applied here
        >
          <img
            src="/team.png"
            alt="Travel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
 
    </>

  );
};

export default AboutPage;
