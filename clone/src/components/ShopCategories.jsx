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
        className='my-10 mx-20 flex '
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div className='my-10'>
            <h1 className='text-center font-bold text-2xl'>Shop Categories</h1>
            <div className='flex items-center justify-center gap-4 mt-4'>
                <div className='w-41 h-1 bg-graylight'></div>
                <MdLocalDining className='h-4 w-4' />
                <div className='w-41 h-1 bg-graylight'></div>
            </div>
            <div className='flex items-center justify-around gap-10 py-10'>
                <SwiperSlide className='group flex items-center'>
                    <img className='h-41 w-41' src={FirstDish} alt />
                    <div className='text-white  bg-black font-bold text-xl w-38 pl-10 h-60'>
                        <p className='text-white font-bold font-philosopher text-2xl text-right pr-10 
                        group-hover:text-orangethree after:bg-orange after:h-1 after:w-12 after:absolute after:top-10 after:right-11'>Breakfast</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center'>
                    <img className='h-41 w-41' src={SecondDish} alt />
                    <div className='text-white  bg-black font-bold text-xl w-38 pl-10 h-60'>
                        <p className='text-white font-bold font-philosopher text-2xl text-right pr-10 group-hover:text-orangethree after:bg-orange after:h-1 after:w-12 after:absolute after:top-10 after:right-11'>Main Dish</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center'>
                    <img className='h-41 w-41' src={ThirdDish} alt />
                    <div className='text-white  bg-black font-bold text-xl w-38 pl-10 h-60'>
                        <p className='text-white font-bold font-philosopher text-2xl text-right pr-10 group-hover:text-orangethree after:bg-orange after:h-1 after:w-12 after:absolute after:top-10 after:right-11'>Extra</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='group flex items-center'>
                    <img className='h-41 w-41' src={FourthDish} alt />
                    <div className='text-white  bg-black font-bold text-xl w-38 pl-10 h-60 group-hover:pl- none'>
                        <p className='text-white font-bold font-philosopher text-2xl text-right pr-10 group-hover:text-orangethree after:bg-orange after:h-1 after:w-12 after:absolute after:top-10 after:right-11'>Swallow</p>
                    </div>
                </SwiperSlide>
            </div>
        </div>
    </Swiper>
    </>
  )
}

export default ShopCategories