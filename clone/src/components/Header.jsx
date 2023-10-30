import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import StickyHeader from './StickyHeader'

const Header = () => {
  return (
    <>
    <div className='bg-black h-8 w-full flex items-center justify-around mobile:py-10'>
        <p className='text-white font-bold mobile:text-base mobile:font-light'>Want to explore our services</p>
        <div className='flex items-center gap-2 mobile:hidden'>
            <FaWhatsapp className='text-2xl fill-white'/>
            <p className='text-white'>08147723014</p>            
        </div>
    </div>
    <StickyHeader />
    </>
  )
}

export default Header