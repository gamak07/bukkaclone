import React from 'react'
import PlaceHolder from '../images/placeholder-320x416.png'
import Juice from '../images/Juice-320x416.jpg'


const Latest = (props) => {
    const latest = [
        {image: PlaceHolder, name: 'Jolly Spag', price: '1000'},
        {image: PlaceHolder, name: 'Jolly Fried Rice', price: '1000'},
        {image: PlaceHolder, name: 'Jolly Jollof', price: '1000'},
        {image: Juice, name: 'Mixed Juice', price: '15000'},
    ]
  return (
    <div className='flex items-center justify-around px-10  gap-10 bg-gray-light'>
        {latest.map((item, index) =>(
            <div className='w-54 flex items-center flex-col bg-white gap-2 p-4 mb-10'>
                <img src={item.image} alt="" className='h-54 w-full'/>
                <h1 className='font-bold'>{item.name}</h1>
                <h1 className='2xl text-orangetwo'>#{item.price}</h1>

            </div>
        ))}
    </div>
  )
}

export default Latest