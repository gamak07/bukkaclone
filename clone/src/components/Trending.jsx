import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Latest from '../Pages/Latest'
import BestSeling from '../Pages/BestSeling'

const Trending = () => {
  return (
    <>
        <div className='bg-gray-light py-10 px-10'>
            <h1 className='bg-gray-light text-center font-bold text-3xl mb-6'>Trending Products</h1>
            <div className='flex items-center justify-center gap-10'>
                <Link to='/latest' className='bg-white text-black text-xl font-bold py-2 px-4 rounded-2xl'>Latest</Link>
                <Link to='/bestseling' className='bg-white text-black text-xl font-bold py-2 px-4 rounded-2xl'>Best Selling</Link>
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