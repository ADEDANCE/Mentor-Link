import React, { useState,useEffect } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { RiArrowDropDownLine, RiDropdownList } from 'react-icons/ri';
import { RxDropdownMenu } from 'react-icons/rx';

const SubNav = () => {
  
  const SubNavLink = [
    {href:'#Entrepreneurshi' ,label:'Entrepreneurship'},
     {href:'#Education' ,label:'Education'},
      {href:'#Arts/Creative', label:'Arts / Creative'},
       {href:'#Media/Production' ,label:'Media / Production'},
        {href:'#law', label:'law'},
        {href:'#Recrational', label:'Recrational'},
  ]

  const [isDropdownOpen , setIsDropdownOpen] = useState(false);

  const MoreLink = [
    {href:'#Information-tech-services', label:"Information Technology & Services"},
    {href:'#HealthCare', label:"Health Care"},
    {href:'#FinancialServices', label:"Financial Services"},
    {href:'#HumanResources', label:"Human Resources"},
  ]

    useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClick = () => {
      setIsDropdownOpen(false);
    };
     window.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isDropdownOpen]);

  return (
    <section className=' fixed bg-white/90 border-gray-200 border-b z-50 left-0 right-0 '>
                <div className=' w-full container mx-auto flex justify-center items-center sm:px-6   h-20  md:h-20 sm:h-16 gap-4'>
                      <div className='flex items-center justify-center gap-8'>
                           <a href="" className='hover:text-blue-400  text-gray-600'>All</a>
                           {
                            SubNavLink.map((link, index) => (
                              <a key={index} href={link.href}
                               className='hover:text-blue-400 text-center text-2xl text-gray-600 gap-8 hidden lg:inline-block'
                              >
                                {link.label}
                              </a>
                            ))
                           }
                           
                            <span className=' relative'>
                             <a
                               href="#"
                               onClick={(e) => {
                               e.preventDefault();
                               e.stopPropagation();
                               setIsDropdownOpen(true);
                               }}
                               className="flex items-center gap-2 hover:text-blue-400 group text-gray-600"
                             >
                               More
                               <span className="transition-transform duration-200 group-hover:rotate-180">
                                    <RiArrowDropDownLine className='size-8 ' />
                              </span>
                              </a>
                                                                                
                               {isDropdownOpen && (
                                    <div className=' absolute flex flex-col  w-48 sm:w-72 md:w-80 lg:w-96 
                                          left-0  gap-2 bg-white border  border-gray-300 '>
                                        {
                                          SubNavLink.map((link, index) => (
                                             <a key={index} href={link.href}
                                                className=' text-base sm:text-lg md:text-2xl text-gray-600 hover:text-blue-400 lg:hidden '
                                             >
                                               {link.label}
                                              </a>
                                            ))
                                        }     
                                        {
                                            MoreLink.map((link, index) => (
                                              <a key={index} 
                                                 className=' text-base sm:text-lg md:text-2xl text-gray-600 hover:text-blue-400'
                                              >
                                                 {link.label}
                                              </a>
                                            ))
                                          }


                                    </div>
                                   )}
                           </span>
        
                      </div>
                </div>
    </section>
  )
}

export default SubNav