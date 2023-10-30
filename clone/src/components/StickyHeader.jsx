import React from 'react'
import Logo from '../images/Bh logo-05 (2).png'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { MdKeyboardArrowDown } from 'react-icons/md'



const StickyHeader = () => {
  return (
    <div className='h-24 w-full flex bg-orange items-center justify-around'>
        <img src={Logo} alt="" className='mt-20 z-10 mobile:hidden'/>
        <ul className='flex items-center gap-10 font-bold text-white mobile:hidden'>
            <li className='group hover:bg-RealOrange p-4 rounded-curved transition ease-in-out duration-1000'>
              <a className='flex items-center' href="">About Us 
              <span className='group-hover:rotate-180 transition ease-in-out'>
                <MdKeyboardArrowDown className='text-xl'/>
              </span>
              </a>
            </li>

            <li className='hover:bg-RealOrange p-4 rounded-curved transition ease-in-out duration-1000'>
              <a href="/">Current Openings</a>
            </li>

            <li className='group hover:bg-RealOrange p-4 rounded-curved transition ease-in-out duration-1000'>
              <a className='flex items-center' href="">Lounge 
                <span className='group-hover:rotate-180 transition ease-in-out'><MdKeyboardArrowDown className='text-xl'/></span>
              </a>
            </li>

            <li className='group hover:bg-RealOrange p-4 rounded-curved transition ease-in-out duration-1000'>
              <a className='flex items-center' href="">More 
              <span className='group-hover:rotate-180 transition ease-in-out'><MdKeyboardArrowDown className='text-xl'/></span>
              </a>
            </li>
        </ul>
        <div className="flex items-center mobile:flex items-center ">
          <HiMenu className='hidden mobile:flex'/>
          <div className='flex gap-8 items-center mobile:flex items-center '>            
            <AiOutlineSearch className='text-2xl hover:fill-white'/>
            <IoPersonCircleSharp className='text-2xl hover:fill-white'/>
            <BsCart3 className='text-2xl hover:fill-white'/>
          </div>
        </div>
    </div>
  )
}

export default StickyHeader