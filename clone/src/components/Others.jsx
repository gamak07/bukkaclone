import React from 'react'

const Others = () => {
  return (
    <div className='bg-orange flex items-center justify-between py-10 px-13'>
        <div>
          <p className='capitalize text-2xl font-semibold font-philosopher text-white'>Sign up for newsletter</p>
          <p className='text-xs font-poppins text-white'>Sign up with us and get latest news abour us</p>
        </div>
        <div className='flex items-center'>
          <input className='py-2 pl-4 pr-13 w-100 rounded-l-cornered outline-none placeholder:font-poppins placeholder:text-xs' type="text" placeholder='Your email address'/>
          <button className='py-2 px-8 bg-black text-white rounded-r-cornered rounded-l-cornered ml-200'>Subscribe</button>
        </div>
    </div>
  )
}

export default Others