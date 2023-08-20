'use client'

//import swiper styles
import 'swiper/css';

// next image
import Image from 'next/image';

// icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

// motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../../../variants';
import { Swiper, SwiperSlide } from 'swiper/react';


const cars = [
  {
    type: 'Honda',
    name: 'Civic',
    price: 29,
    start: 3.5,
    image: '/icons/slider/civic2.png',
    info: [
    {
      icon: '/icons/slider/gear.png',
      text: 'Auto'
    },

    {
      icon: '/icons/slider/seats.png',
      text: '5 Seats'
    },

    {
      icon: '/icons/slider/gas.png',
      text: 'Gas'
    },

    {
      icon: '/icons/slider/engine.png',
      text: '1600 HP'
    },

    {
      icon: '/icons/slider/wheel.png',
      text: 'Front'
    },
    ]
  },
  {
    type: 'Honda',
    name: 'Rebirth 6-Gen',
    price: 32,
    start: 3.5,
    image: '/icons/slider/rebirth1.png',
    info: [
    {
      icon: '/icons/slider/gear.png',
      text: 'Auto'
    },

    {
      icon: '/icons/slider/seats.png',
      text: '5'
    },

    {
      icon: '/icons/slider/gas.png',
      text: 'Hybrid'
    },

    {
      icon: '/icons/slider/engine.png',
      text: '6.5'
    },

    {
      icon: '/icons/slider/wheel.png',
      text: 'Front'
    },
    ]
  },
  {
    type: 'Corolla',
    name: 'Mark-x',
    price: 25,
    start: 3.5,
    image: '/icons/slider/civicBlack.png',
    info: [
    {
      icon: '/icons/slider/gear.png',
      text: 'Manual'
    },

    {
      icon: '/icons/slider/seats.png',
      text: '5 Seats'
    },

    {
      icon: '/icons/slider/gas.png',
      text: 'Fuel'
    },

    {
      icon: '/icons/slider/engine.png',
      text: '1500 HP'
    },

    {
      icon: '/icons/slider/wheel.png',
      text: 'Front'
    },
    ]
  },
  {
    type: 'Baic',
    name: 'Baic SVG',
    price: 40,
    start: 3.5,
    image: '/icons/slider/baic.png',
    info: [
    {
      icon: '/icons/slider/gear.png',
      text: 'Auto'
    },

    {
      icon: '/icons/slider/seats.png',
      text: '7 Seats'
    },

    {
      icon: '/icons/slider/gas.png',
      text: 'Fuel'
    },

    {
      icon: '/icons/slider/engine.png',
      text: '3500 HP'
    },

    {
      icon: '/icons/slider/wheel.png',
      text: '4 Wheel'
    },
    ]
  }
 
];




export default function CarsSlider() {
  return (
    <motion.div className='container mx-auto pt-[50px]'
    variants={fadeIn('up', 0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.6}}
    >
     <Swiper
      breakpoints={{
        320: {slidesPerView: 1, spaceBetween: 15},
        640: {slidesPerView: 2, spaceBetween: 32},
        1260: {slidesPerView: 3, spaceBetween: 32},
      }}
     >
     {cars.map((car, index) => {
        return (
        <SwiperSlide key={index}>
          <div className='max-w-[385px] mx-auto sm:mx-0 bg-gray-100'>
            <Image src={car.image} width={380} height={284} alt='civic' />
          <div className='flex justify-between'>
            <div>
              <div className='ml-3'>
                <div className='text-[13px] text-secondary uppercase'>
                  {car.type}
                </div>
                <h3 className='text-lg uppercase font-bold'>
                  {car.name}
                </h3>
                <h3 className='mb-10 text-accent font-semibold uppercase'>
                  {car.price}/day
                </h3>
              </div>
            </div>
            {/* stars */}
            <div className='flex gap-x-2 text-accent h-max mr-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            </div>
            {/* car info */}
            <div className='flex gap-x-3 xl:gap-x-4 lg:gap-x-4 w-max mb-10'>
              {car.info.map((item, index) => {
               return (
                <div key={index} className='flex flex-col items-center'>
                 <div className='bg-slate-400 w-10 h-10 rounded-full flex justify-center
                 items-center mx-auto ml-1 mb-2'>
                  <Image 
                  src={item.icon}
                  width={20}
                  height={20}
                  alt='icons'
                  className=''
                  />
                 </div>
                 <div className='text-[12px] uppercase'>{item.text}</div>
                </div>
               )
              })}
            </div>
            <button className='btn btn-accent btn-lg'>See Details</button>
          </div> 
        </SwiperSlide>
        )
     })}
     </Swiper>
    </motion.div>
  )
}
