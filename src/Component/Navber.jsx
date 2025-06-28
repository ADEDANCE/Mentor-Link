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
    <div className=' relative' >
              <nav className=' fixed bg-white/90 border-gray-100 top-0 right-0 left-0 z-50 border-b'>
          <div className=' w-full container  items-center mx-auto flex  justify-between px-4 sm:px-6 lg:px-8 h-20 md:h20 gap-4'>
                <div className=' flex items-center gap-1'>
                       <img src={Mentoreelogo} alt="" />
                </div>
                <div>
                      
                </div>
                <div className=' flex justify-between gap-8'>
                      <button onClick={ () => setIsmenuOpen(!isMenuopen) } className=' md:hidden p-2' >
                                {
                                    isMenuopen ? <HiX className=' size-6' />  : <HiMenu />
                                }
                      </button>

                      <div className='hidden items-center md:flex gap-10'>
                            {
                              navLink.map((link, index) => (
                                  <a key={index} href={link.href}
                                   onClick={() => setActivelink(link.href)} 
                                   className=' text-2xl font-bold hover:text-blue-400'
                                  >{link.label} </a>
                              ))
                            }
                             <div className=' flex justify-between gap-8'>
                            <button className=' border rounded-full text-black hover:bg-blue-400 hover:text-white  p-4 w-40'>SIGN UP</button>
                            <button className='text-white bg-blue-400 rounded-full p-4 w-40 hover:bg-white hover:text-black border'>LOG IN</button>
                      </div>
                      </div>
                </div>
          </div>
    </nav>
    

                <div className=' w-full container pt-20 '>
               {
                         isMenuopen && (
                            <div className=' flex flex-col gap-4 md:hidden border-b border-gray-300  pb-5'>
                                        {navLink.map((link, index) => (
                                          <a key={index} href={link.href} onClick={() => {
                                            setActivelink(link.href);
                                            setIsmenuOpen(false);
                                          }}
                                           className=' text-2xl font-semibold flex justify-between  '
                                          >{link.label} <HiArrowRight className=' text-gray-700 size-6' /> </a>
                                        ))}

                                        { subNavlink.map((link, index) => (
                                          <a href={link.href} key={index}
                                            onClick={() => {setActivelink(link.href);
                                              setIsmenuOpen(false);
                                            }}
                                            className=' text-xl text-gray-500'
                                          >{link.label}</a>
                                        ))}
                                   <div className='flex gap-4 justify-end'>
                            <button className=' border rounded-full text-black  p-4 w-40'>SIGN UP</button>
                            <button className='text-white bg-blue-400 rounded-full p-4 w-40'>LOG IN</button>
                      </div>
                            </div>
                         )
                      }
          </div>
    </div>
   
  )
}

export default Navber