import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Latest from '../Pages/Latest'
import BestSeling from '../Pages/BestSeling'
import { MdLocalDining } from 'react-icons/md'

const Trending = () => {
  return (
    <>
        <div className='bg-graylight py-10 px-10'>
            <h1 className='bg-graylight text-center font-bold font-philosopher text-3xl mb-6'>Trending Products</h1>
            <div className='flex items-center justify-center gap-4 mt-4'>
              <div className='w-41 h-1 bg-black'></div>
              <MdLocalDining className='h-4 w-4 fill-red' />
              <div className='w-41 h-1 bg-black'></div>
            </div>
            <div className='flex items-center justify-center gap-10 mt-8'>
                <Link to='/latest' className='bg-white text-black text-xl font-bold font-philosopher py-2 px-4 rounded-2xl'>Latest</Link>
                <Link to='/bestseling' className='bg-white text-black text-xl font-bold font-philosopher py-2 px-4 rounded-2xl'>Best Selling</Link>
            </div>
        </div>           
        <Routes>
            <Route path='/latest' Component={Latest} forceRefresh/>
            <Route path='/bestseling' Component={BestSeling} />              
        </Routes>
    
    </>
  )
}

export default Trending