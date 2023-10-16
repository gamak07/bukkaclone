import React from 'react'
import ImageOne from "../images/banner-01.jpg"
import ImageTwo from "../images/banner-02.png"
import ImageThree from "../images/banner-04.png"
import ImageFour from "../images/banner-03.png"

const GridSection = () => {
  return (
    <div className='bg-gray-light py-10 px-20 grid grid-cols-2 grid-flow-row place-items-center'>
        <div className=''><img src={ImageOne} alt="" /></div>
        <div className=''><img src={ImageTwo} alt="" /></div>
        <div className=''><img src={ImageFour} alt="" /></div>
        <div className=''><img src={ImageThree} alt="" /></div>
    </div>
  )
}

export default GridSection