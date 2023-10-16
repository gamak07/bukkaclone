import React from 'react'
import MoinMoin from '../images/BHMoiMoi-320x416.png'
import Suya from '../images/Ram Suya-320x416.jpg'
import Rice from '../images/rice.jpg'
import Ofada from '../images/DSC_0868-320x416.jpg'

const BestSeling = (props) => {
  const BestSelling = [
      {image: Rice, name: 'Jollof Rice', price: '900'},
      {image: Suya, name: 'Ram Suya', price: '1400'},
      {image: MoinMoin, name: 'Moin Moin', price: '650'},
      {image: Ofada, name: 'Ofada Rice with Sauce', price: '2200'},
  ]
return (
  <div className='flex items-center justify-around px-10 gap-10 bg-gray-light'>
      {BestSelling.map((itemList, index) =>(
          <div className='w-54 flex items-center flex-col bg-white gap-2 p-4 mb-10'>
              <img src={itemList.image} alt="" className='h-54 w-full'/>
              <h1 className='font-bold'>{itemList.name}</h1>
              <h1 className='2xl text-orangetwo'>#{itemList.price}</h1>

          </div>
      ))}
  </div>
)
}

export default BestSeling