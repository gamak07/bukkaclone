import React from 'react'
import NewsOne from "../images/newoutlet-370x240.png"
import NewsTwo from "../images/BH10-370x240.png"
import NewsThree from "../images/safe food.jpg"

const LatestNews = () => {
  return (
    <div className='bg-gray-light'>
        <h1 className='text-4xl font-bold text-center'>Latest news</h1>
        <div className='flex  justify-center gap-4 mt-10'>
            <div className='bg-white flex flex-col w-80 p-8'>
                <img src={NewsOne} alt="" />
                <p className='capitalize font-bold text-xl'>Lorem ipsum dolor sit amet</p>
                <p className='font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolores at commodi ullam doloribus expedita similique eum facilis libero quibusdam, repellendus vero explicabo dicta perspiciatis vel numquam illum nisi a ex, dolorem quos. Laboriosam soluta alias vero! Dolorum aliquam veritatis atque eligendi debitis iure aspernatur magnam, molestias facere placeat ipsa?</p>
            </div>
            <div className='bg-white flex flex-col w-80 p-8'>
                <img src={NewsTwo} alt="" /> 
                <p className='capitalize font-bold text-xl '>Lorem ipsum dolor sit amet</p> 
                <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero amet aut accusamus quis? Quo reprehenderit repudiandae totam aspernatur et, amet neque quod hic saepe?</p>
            </div>
            <div className='bg-white flex flex-col w-80 p-8'>
                <img src={NewsThree} alt="" />
                <p className='capitalize font-bold text-xl'>Lorem ipsum dolor sit amet</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore non voluptas atque neque, animi voluptatum aspernatur possimus dicta, enim accusamus aperiam est in eaque, doloribus pariatur. Commodi repudiandae veritatis fuga architecto, debitis perferendis obcaecati inventore deserunt eos ullam illo libero assumenda nisi ut molestias maiores quam ex, hic ab vel voluptatum, eius placeat? Dignissimos illum, quas iusto tempore facere commodi esse laborum totam maiores sapiente dicta. Nesciunt, aliquid tenetur corporis dolorem ea voluptatum laudantium consequatur vel quas mollitia aut animi maiores veritatis, ut, enim quisquam numquam.</p>
            </div>
        </div>
    </div>
  )
}

export default LatestNews