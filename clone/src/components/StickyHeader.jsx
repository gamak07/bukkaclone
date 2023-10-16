import React from 'react'
import Logo from '../images/Bh logo-05 (2).png'
import Search from '../svgs/SearchIcon.svg'
import Account from '../svgs/AccountIcon.svg'
import Cart from '../svgs/CartIcon.svg'
import Arrow from '../svgs/Arrow.svg'

const StickyHeader = () => {
  return (
    <div className='h-24 w-full flex bg-orange items-center justify-around'>
        <img src={Logo} alt="" className='mt-20 z-10'/>
        <ul className='flex items-center gap-10 font-bold text-white'>
            <li><a className='' href="">About Us</a></li>
            <li><a href="">Current Openings</a></li>
            <li><a href="">Lounge</a></li>
            <li><a href="">More</a></li>
        </ul>
        <div className="flex items-center gap-8">
            <img src={Search} alt="" className='h-6'/>
            <img src={Account} alt="" className='h-6'/>
            <img src={Cart} alt="" className='h-6'/>
        </div>
    </div>
  )
}

export default StickyHeader