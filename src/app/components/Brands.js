'use client'

// image
import Image from "next/image";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";


export default function Brands() {
  return (
    <section className='xl:pt-16 xl:h-[200px] lg:pt-52 bg-white flex flex-col justify-center'>
     <motion.div className='container mx-auto'
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.6}}
     >
      {/* brands wrapper */}
      <div className='grid grid-cols-3 gap-6 place-items-end xl:flex lg:flex xl:flex-wrap
      lg:flex-wrap xl:gap-x-6 lg:gap-x-6 xl:justify-between lg:justify-between'>
        <div>
          <Image 
          src={'/icons/brands/mitsu.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/bmw.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/merc.png'} 
          height={80} 
          width={100} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/lexus.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/vw.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/audi.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/corola.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      <div>
          <Image 
          src={'/icons/brands/kia.png'} 
          height={32} 
          width={85} 
          alt='ford logo' />
      </div>
      </div>
     </motion.div>
     
    </section>
  )
}
