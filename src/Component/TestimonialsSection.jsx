import React from 'react';
import  HeartShape from '../assets/HeartShape.png';
import MentorAmanda from '../assets/MentorAmanda.png';
import MentorArindam from '../assets/MentorArindam.png';
import MentorAsif from '../assets/MentorAsif.png';
import MentorGab from '../assets/MentorGab.png';
import MentorLarry from '../assets/MentorLarry.png';
import MentorMatt from '../assets/MentorMatt.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';





const TestimonialsSection = () => {

    const testimonials = [
        {
            id: 1,
            name: "Asif",
            Image: MentorAsif,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "Consultant & Investor"
        },
        {
            id: 2,
            name: "Larry",
            Image: MentorLarry,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "Co-Founder, Mercom"
        },
        {
            id: 3,
            name: "Matt",
            Image: MentorMatt,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "CEO/Partner at Product Vessel, Partner at Mentoree, Partner at Scam Detector, Partner at GemGates & more fun stuff"
        },
            {
            id: 4,
            name: "Amanda",
            Image: MentorAmanda,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "Developer"
        },
        {
            id: 5,
            name: "Arindam",
            Image: MentorArindam,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "COO,Product Vessel India"
        },
        {
            id: 6,
            name: "Gab",
            Image: MentorGab,
            Text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            Occupation: "Innovation Specialist at BRP-X , BRP's innovation lab."
        },
    ]

    const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <section className=' py-16 px-4 mx-auto bg-white w-full  pt-28'>
         <div className='  flex   flex-col gap-3 items-center pb-32'>
            
              <img src={HeartShape} alt="heart-shape" />
              
              <h2 className=' text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-900'>Don't just take our word for it!</h2>

              <p className=' text-sm  sm:text-xl md:text-2xl lg:text-3xl text-gray-700'>Hear what the community is saying about us</p>
         </div>

         <div className=' container  mx-auto relative'>
                   <Swiper
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

        navigation={
            {
                nextEl: '.swiper-button-next-custom',
             prevEl: '.swiper-button-prev-custom',
        }
     }
        breakpoints={{
          6400: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="testimonial-Swiper mb-12"
      >
       {testimonials.map((testimonial, index) => {
  let bgColor = "bg-white";

  if (index === activeIndex) {
    bgColor = "bg-green-50"; // First visible
  } else if (index === activeIndex + 1) {
    bgColor = "bg-red-50"; // Middle
  } else if (index === activeIndex + 2) {
    bgColor = "bg-green-50"; // Last visible
  }

  return (
    <SwiperSlide key={index} className=" md:py-12 sm:py-4">
      {/* <div className='flex flex-col items-center justify-start w-full'> */}
<div
  className={` text-center p-4 pb-48 min-h-[380px] rounded-4xl shadow-md w-full ${bgColor}`}
>

  <p className="text-gray-600 text-xl sm:text-xl md:text-2xl lg:text-3xl">
    {testimonial.Text}
  </p>
</div>
  <div className="ml-8 bottom-0  -mt-10 flex flex-col items-start">

    <img
      src={testimonial.Image}
      className="rounded-full w-20 h-20 border-4 border-white"
      alt={testimonial.name}
    />
    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
    <p>{testimonial.Occupation}</p>
  </div>



      
    </SwiperSlide>
  );
})}
      </Swiper>

         <div className=' flex justify-start  mt-4 gap-4 md:mt-8'>
                        <button className='outline-1  swiper-button-prev-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                                  <BsChevronLeft className='  size-6'/>
                        </button>

                         <button className='outline-1   swiper-button-next-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                                  <BsChevronRight className=' size-6'/>
                        </button>
                  </div>
         </div>
    </section>
  )
}

export default TestimonialsSection