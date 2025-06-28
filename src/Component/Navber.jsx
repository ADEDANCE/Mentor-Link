import React, { useState } from 'react'
import Mentoreelogo from '../assets/Mentoreelogo.png';
import { HiArrowRight, HiMenu, HiX } from 'react-icons/hi';

const Navber = () => {

    const [isMenuopen,setIsmenuOpen] =useState(false);
    const [activeLink,setActivelink] = useState('#home');

    const navLink = [
        {href:"#BecomeMentor", label:' BecomeMentor'},
        {href:"#FindMentor", label:' FindMentor'},
    ]

    const subNavlink = [
      {href:"Terms/Condition", label:"Terms & Condition"},
      {href:"PrivacyPolicy", label:" Privacy Policy"},
      {href:"Articles", label:"Articles / Blog"},
    ]

    const SignUPButton = []
  return (
    <div className='' >
              <nav className=' fixed bg-white/90 border-gray-200 top-0 right-0 left-0 z-50 border-b'>
          <div className=' w-full container  items-center mx-auto flex  justify-between px-4 sm:px-6 lg:px-8 h-25 md:h20 gap-4'>
                <div  className='flex-shrink-0 w-32'>
                       <img src={Mentoreelogo} alt="" className=' w-full object-contain' />
                </div>
                <div>
                      
                </div>
                <div className=' flex justify-between '>
                      <button onClick={ () => setIsmenuOpen(!isMenuopen) } className=' lg:hidden p-2  bg-blue-400 rounded-full ' >
                                {
                                    isMenuopen ? <HiX  className=' size-8' />  : <HiMenu className=' size-8' />
                                }
                      </button>

                         <div className='hidden items-center  lg:flex gap-10'>
                            {
                              navLink.map((link, index) => (
                                  <a key={index} href={link.href}
                                   onClick={() => setActivelink(link.href)} 
                                   className=' text-2xl font-bold  hover:text-blue-400'
                                  >{link.label} </a>
                              ))
                            }
                             <div className=' flex justify-between gap-4'>
                            <button className=' border rounded-full text-black hover:bg-blue-400 hover:text-white  p-4 w-40'>SIGN UP</button>
                            <button className='text-white bg-blue-400 rounded-full p-4 w-40 hover:bg-white hover:text-black border'>LOG IN</button>
                      </div>
                      </div>
                </div>
          </div>
    </nav>
    

                <div className=' w-full container pt-30  '>
               {
                        isMenuopen && (
                           <div className='flex flex-col  gap-4 lg:hidden border-b z-50 border-gray-300 pb-5 left-0 right-0'>
                                        {navLink.map((link, index) => (
                                          <a key={index} href={link.href} onClick={() => {
                                            setActivelink(link.href);
                                            setIsmenuOpen(false);
                                          }}
                                           className=' text-2xl NavText  flex justify-between  hover:text-blue-400 hover:scale-105
                                            transition-transform duration-200 '
                                          >  <span className='ml-7' >{link.label}</span>
                                             <HiArrowRight className=' text-gray-700 size-6 mr-5' /> </a>
                                        ))}

                                        { subNavlink.map((link, index) => (
                                          <a href={link.href} key={index}
                                            onClick={() => {setActivelink(link.href);
                                              setIsmenuOpen(false);
                                            }}
                                            className=' ml-7 text-xl text-gray-500 font-semibold hover:text-blue-400 '
                                          >{link.label}</a>
                                        ))}
                                   <div className='flex gap-4 justify-end'>
                            <button className=' border rounded-full text-black hover:bg-blue-400 hover:text-white  p-4 w-40'>SIGN UP</button>
                            <button className='text-white bg-blue-400 rounded-full p-4 w-40 hover:bg-white hover:text-black border'>LOG IN</button>
                      </div>
                            </div>
                         )
                      }
          </div>
    </div>
   
  )
}

export default Navber