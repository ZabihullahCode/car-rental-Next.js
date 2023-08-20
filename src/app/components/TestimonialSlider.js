'use client'

// swiper reacr components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import "swiper/css";  // core style file
import "swiper/css/pagination";

// Importing the pagination module
import { Pagination } from 'swiper/modules';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../../variants';

// next image
import Image from 'next/image';

// data
const testimonaildata = [
  {
    masssage: 'They truly exceeded my expectation and made my car rental experience a delight',
    avatar: '/icons/testimonials/gamer.png',
    name: 'Jane Doe',
    job: 'Photographer & Videographer',
  },
  {
    masssage: 'They truly exceeded my expectation and made my car rental experience a delight',
    avatar: '/icons/testimonials/hacker.png',
    name: 'Arslan',
    job: 'Full stack Developer',
  },
];


export default function TestimonialSlider() {

  return (
    <motion.div
    variants={fadeIn('up', 0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.6}}
    className='container mx-auto'
    >
     <Swiper 
     pagination = {{
      clickable: true,
      dynamicBullets: true,
     }}
     modules={[Pagination]}
    className='h-[450px] xl:h-[400px] lg:h-[400px]'
     >
      {testimonaildata.map((person, index) => {
          const {masssage, avatar,name,job} = person;
        return (
        <SwiperSlide 
        key={index}
        className="relative" 
        >
          <div className='flex flex-col justify-center items-center text-center'>
            <FaQuoteLeft className='text-7xl text-accent mb-6' />
            <div className='text-2xl xl:text-4xl lg:text-2xl max-w-[874px] mb-12 
            font-medium'>{masssage}</div>
            <Image 
            src={avatar} 
            width={64} 
            height={64} 
            alt=''
            className='mb-4'
            />
            <div className='text-lg font-medium'>{name}</div>
            <div className='text-secondary'>{job}</div>
          </div>
          </SwiperSlide>
        );
      })}
     </Swiper>
    </motion.div>
  )
}
