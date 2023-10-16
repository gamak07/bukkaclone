import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import sect from '../images/res_car_1.png'
import sectTwo from '../images/res_car_2.png'

const spanStyle = {
  padding: '40px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100%'
}

const slideImages = [
  {
    
    url: sect, 
     
  },
  {
    // url: 'https://bukkahut.com/image/cache/catalog/Untitled%20(17)-1903x750.png',
    url: sectTwo,
       
  }
]

const CarouselSection = () => {
  return (
    <div className='bg-black h-100 w-full'>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className='h-100'>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
    </div>

  )
}

export default CarouselSection