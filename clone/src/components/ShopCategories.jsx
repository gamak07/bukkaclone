import React from 'react'
import FirstDish from '../images/IMG_2202-250x250.jpg'
import SecondDish from '../images/Porridge.jpg'
import ThirdDish from '../images/rice.jpg'
import FourthDish from '../images/IMG_1380-250x250.jpg'

const ShopCategories = () => {
  return (
    <div className='my-10'>
        <h1 className='text-center font-bold text-2xl'>Shop Categories</h1>
        <div className='flex items-center justify-around gap-10 py-10'>
            <div className='bg-black text-white w-41 p-10'>
                <img src={FirstDish} alt />
                <p className='text-white font-bold text-xl text-center bg'>Breakfast</p>
            </div>
            <div className='bg-black text-white w-41 p-10'>
                <img src={SecondDish} alt />
                <p className='text-white font-bold text-xl text-center'>Main Dish</p>
            </div> 
            <div className='bg-black text-white w-41 p-10'>
                <img src={ThirdDish} alt />
                <p className='text-white font-bold text-xl text-center'>Extra</p>
            </div>
            <div className='bg-black text-white w-41 p-10'>
                <img src={FourthDish} alt />
                <p className='text-white font-bold text-xl text-center'>Swallow</p>
            </div>
        </div>
    </div>
  )
}

export default ShopCategories