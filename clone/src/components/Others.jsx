import React from 'react'

const Others = () => {
  return (
    <div className='bg-orange flex items-center mt-20 justify-between'>
        <div>
          <p className='capitalize'>Sign up for newsletter</p>
          <p className='text-xs'>Sign up with us and get latest news abour us</p>
        </div>
        <div className='flex items-center'>
          <input className='py-2 px-8 w-100 rounded-l-cornered' type="text" placeholder='Your email address'/>
          <button className='py-2 px-8 bg-black text-white rounded-r-cornered rounded-l-cornered ml-200'>Subscribe</button>
        </div>
    </div>
  )
}

export default Others