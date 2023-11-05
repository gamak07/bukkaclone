import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import sect from '../images/res_car_1.png'
import sectTwo from '../images/res_car_2.png'
import { Autoplay, Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'



const CarouselSection = () => {
  return (
    <Swiper
        modules={ [Autoplay, Navigation] }
        spaceBetween={0}
        slidesPerView={1}
        autoplay = {true}
        Navigation = {true}
        speed={800}
        loop
        className= 'z-[-10]'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <div className='bg-black h-100 w-full Z-[10] hover:'>
          <SwiperSlide className='z-[-1]'>
            <img src={sect} alt="" className='' />
            
            
          </SwiperSlide>

          <SwiperSlide className='group'>
            <img src={sectTwo} alt="" />
            
          </SwiperSlide>
          <swiper-container className='mySwiper' Navigation="true">
            <button> <IoIosArrowBack /> </button>
            <button> <IoIosArrowBack /> </button>
          </swiper-container>
      </div>
    </Swiper>
  )
}

export default CarouselSection