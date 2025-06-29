import React from 'react'
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
    <section className=' bg-white '>
           <div className="w-full container flex flex-col justify-center mx-auto items-center">
                <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold pt-32 sm:pt-20 lg:pt-52 leading-tight text-center">
                           Everyone needs a
                           <br className="block sm:hidden" />
                     <span className="text-blue-400"> Mentor</span>
                 </h1>
                </div>

                <button className=' bg-red-400 pt-4 pb-4 text-white font-semibold rounded-full  px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 min-w-[220px] sm:min-w-[250px]'>Join now it's Free!</button>

                <p>Search amazing individuals around the globe, find a mentor, expand your network, and learn from incredible people!</p>
          </div>
    </section>
  )
}

export default HeroSection