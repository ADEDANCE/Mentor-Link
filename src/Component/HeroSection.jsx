import React from 'react'
import { FaArrowRight } from "react-icons/fa";
// import MentorHero1 from '../assets/MentorHero1.png';
// import MentorHero2 from '../assets/MentorHero2.png';
// import MentorHero3 from '../assets/MentorHero3.png';
// import MentorHero4 from '../assets/MentorHero4.png';
// import MentorHero5 from '../assets/MentorHero5.png';
// import MentorHero6 from '../assets/MentorHero6.png';
// import MentorHero7 from '../assets/MentorHero7.png';
// import MentorHero8 from '../assets/MentorHero8.png';
// import MentorHero9 from '../assets/MentorHero9.png';
// import MentorHero10 from '../assets/MentorHero10.png';

const HeroSection = () => {

    // const HeroImage =[
    //    MentorHero1,
    //    MentorHero2,
    //    MentorHero3,
    //    MentorHero4,
    //    MentorHero5,
    //    MentorHero6,
    //    MentorHero7,
    //    MentorHero8,
    //    MentorHero9,
    //    MentorHero10,
    // ]
  return (
    <section className=' bg-gray-100 '>
           <div className="w-full container flex flex-col justify-center mx-auto items-center">
                <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold pt-32 sm:pt-20 lg:pt-52 leading-tight text-center">
                           Everyone needs a
                           <br className="block sm:hidden" />
                     <span className="text-blue-400"> Mentor</span>
                 </h1>

        

                 
                </div>

                                        <button className='bg-red-400 text-white font-semibold rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 min-w-[220px] sm:min-w-[250px]'>
                          Join now it's Free!
                    </button>
                      <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-gray-500 mb-6 sm:mb-8 max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4">
  Search amazing individuals around the globe, find a mentor, expand your network, and learn from incredible people!
</h2>

                      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl flex items-stretch justify-cente outline-1 outline-gray-400 rounded-full">
                             <input 
  type="text" 
  placeholder="Search mentors & Mentees"
  className="flex-1 bg-gray-50 text-gray-700 px-6 py-4 md:px-8 md:py-6 placeholder-gray-400 border-none rounded-l-full rounded-r-none outline-none"
/>

                    
                    <button 
  className="bg-blue-400 text-white text-lg px-8 md:px-12 lg:px-20 py-4 md:py-6 rounded-r-full rounded-l-none">
  Search
</button>


                      </div>
                                  <p className='  pt-4 text-sm text-gray-400'>Tip: Search by skills, interest, location, name etc</p> 

                                  <span className=' pt-7 pb-20 relative hover:text-red-400 '>
                                       <a href=" "  className=' flex items-center gap-4 text-xl'>Browse all Mentors east
                                          <span><FaArrowRight  className=' size-6' /></span>
                                       </a>
                                    </span>    

               
          </div>
    </section>
  )
}

export default HeroSection