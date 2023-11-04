import React from 'react'
import FooterLogo from '../images/footer-logo.png'
import Audit from '../images/ndpr.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { TbMessageDots } from 'react-icons/tb'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { LiaTwitter } from 'react-icons/lia'
import { AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-black '>
        <div className='flex flex-col items-center justify-center pt-20 pb-11 '>
            <img src={FooterLogo} alt="footer logo" className='h-24 w-32'/>
            <p className='text-white font-poppins text-sm'>Bukkha Hospitality Limited, Lagos, Nigeria.</p>
        </div>

        <div className='w-500 h-1 bg-footerColour m-auto'></div>

        <div className='flex justify-between px-10 py-10 mr-20'>
            <div>
                <p className='text-white text-xl font-philosopher font-bold pl-5'>Information</p>
                <ul className='leading-[30px]'>
                    <li className='group text-white flex items-center w-fit'><MdKeyboardArrowRight className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>About Us</a></li>
                    <li className='group text-white flex items-center w-fit'><MdKeyboardArrowRight className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>Privacy Policy</a></li>
                    <li className='group text-white flex items-center w-fit'><MdKeyboardArrowRight className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>Terms of use</a></li>
                    <li className=''><img src={Audit} alt="" /></li>
                </ul>               
            </div>

            <div>
                <p className='text-white text-xl font-philosopher font-bold pl-5'>Customer Service</p>
                <ul className='leading-[30px]'>
                    <l1 className='group text-white flex items-center w-fit'><MdKeyboardArrowRight className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>Contact Us</a></l1>
                    <l1 className='group text-white flex items-center w-fit'><MdKeyboardArrowRight  className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>Site Map</a></l1>
                </ul>
            </div>
  
            <div>
                <p className='text-white text-xl font-philosopher font-bold pl-5'>My Account</p>
                <ul className='leading-[30px]'>
                    <li className='group text-white flex items-center w-fit'><MdKeyboardArrowRight  className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>My Account</a></li>
                    <li className='group text-white flex items-center w-fit'><MdKeyboardArrowRight  className='group-hover:text-orangetwo text-realGray'/><a href="" className='text-[14px] group-hover:text-orangetwo'>Wish List</a></li>
                </ul>
            </div>
            
            <div className='gap-6'>
                <p className='text-white text-xl font-philosopher font-bold pl-5'>Store Information</p>
                <ul className='ml-5 leading-[30px]'>
                    <li className='text-white flex text-[14px]'><MdLocationPin className='text-sm mt-5 mr-2'/>Bukkha Hospitality Limited <br />Lagos <br />Nigeria</li>
                    <li className='text-white flex items-center text-[14px]'><BsFillTelephoneFill className='text-sm mr-2'/> 08147723014</li>
                    <li className='text-white flex items-center text-[14px]'><TbMessageDots className='text-sm mr-2'/> 07065592047</li>
                    <li className='group text-white flex items-center w-fit'>
                        <MdEmail className='text-sm mr-2'/>
                        <a href="" className='group-hover:text-orangetwo flex items-center text-[14px]'>ganiyumubarak09@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='w-500 h-1 bg-footerColour m-auto'></div>
        
        <div className='flex flex-col items-center py-6 gap-6'>
            <p className='text-white text-center text-[14px]'>Cloned by Ganiyu Mubarak</p>
            <div className='flex items-center justify-center gap-4'>
                <GrFacebookOption className='fill-white text-xl hover:fill-[#3558f4]' />
                <LiaTwitter className='fill-white text-xl hover:fill-[#23a3f8]' />
                <AiOutlineInstagram className='fill-white text-xl hover:fill-[#f0518d]' />
            </div>
        </div>
    </div>
  )
}

export default Footer