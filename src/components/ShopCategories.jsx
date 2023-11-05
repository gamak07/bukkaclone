import React from 'react'
import FirstDish from '../images/IMG_2202-250x250.jpg'
import SecondDish from '../images/Porridge.jpg'
import ThirdDish from '../images/rice.jpg'
import FourthDish from '../images/IMG_1380-250x250.jpg'
import { MdLocalDining } from 'react-icons/md'
import { Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'

const ShopCategories = () => {
    return (
    <>       
      <Swiper
        modules={ [Autoplay] }
        spaceBetween={30}
        slidesPerView={3}
        autoplay = {true}
        speed={800}
        loop
        className='my-11 mx-11 flex justify-center '
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div className='my-10'>
            <h1 className='text-center font-bold font-philosopher text-2xl'>Shop Categories</h1>
            <div className='flex items-center justify-center gap-4 mt-4'>
                <div className='w-41 h-1 bg-graylight'></div>
                <MdLocalDining className='h-4 w-4' />
                <div className='w-41 h-1 bg-graylight'></div>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <SwiperSlide className='group flex items-center'>
                    <img className='h-41 w-41 group-hover:w-54 transition-width duration-1000' src={FirstDish} alt />
                    <div className='flex justify-center text-white bg-black h-60 pt-6 pr-8 pl-10 group-hover:pl-none '>
                        <p className='transition-margin duration-1000 text-white w-28 h-max text-right font-bold font-philosopher text-2xl group-hover:text-orangethree after:bg-orangefour after:h-3 after:w-12 after:absolute after:top-13 after:right-20'>Breakfast</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center '>
                    <img className='h-41 w-41 group-hover:w-54 transition-width duration-1000' src={SecondDish} alt />
                    <div className='flex justify-center text-white bg-black h-60 pt-6 pr-8 pl-10 group-hover:pl-none '>
                        <p className='transition-margin duration-1000 text-white w-28 h-max text-center font-bold font-philosopher text-2xl group-hover:text-orangethree after:bg-orangefour after:h-3 after:w-12 after:absolute after:top-13 after:right-20'>Main Dish</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center '>
                    <img className='h-41 w-41 group-hover:w-54 transition-width duration-1000' src={ThirdDish} alt />
                    <div className='flex justify-center text-white bg-black h-60 pt-6 pr-8 pl-10 group-hover:pl-none '>
                        <p className='transition-margin duration-1000 text-white w-28 h-max text-center font-bold font-philosopher text-2xl group-hover:text-orangethree after:bg-orangefour after:h-3 after:w-12 after:absolute after:top-13 after:right-20'>Extra</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center '>
                    <img className='h-41 w-41 group-hover:w-54 transition-width duration-1000' src={FourthDish} alt />
                    <div className='flex justify-center text-white bg-black h-60 pt-6 pr-8 pl-10 group-hover:pl-none '>
                        <p className='transition-margin duration-1000 text-white w-28 h-max text-center font-bold font-philosopher text-2xl group-hover:text-orangethree after:bg-orangefour after:h-3 after:w-12 after:absolute after:top-13 after:right-20'>Swallow</p>
                    </div>
                </SwiperSlide>
            </div>
        </div>
    </Swiper>
    </>
  )
}

export default ShopCategories