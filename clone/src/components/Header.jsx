import React from 'react'
import Whatsapp from '../svgs/WhatsappIcon.svg'
import StickyHeader from './StickyHeader'

const Header = () => {
  return (
    <>
    <div className='bg-black h-8 w-full flex items-center justify-around font-bold '>
        <p className='text-white'>Want to explore our services</p>
        <div className='flex items-center gap-2'>
            <img src={Whatsapp} alt="" className='h-6'/>
            <p className='text-white'>08147723014</p>            
        </div>
    </div>
    <StickyHeader />
    </>
  )
}

export default Header