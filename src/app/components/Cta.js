'use client'

// next image
import Image from "next/image";

// frAMER motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";


export default function Cta() {
  return (
    <section className='pt-24 xl:pt-48 lg:pt-48 flex items-end pb-0 bg-[#b2b7c2]/7 
    overflow-hidden' id='contact'>
      <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row xl:items-center lg:items-center'>
        {/* text */}
        <div className='flex-1 xl:ml-24 lg:ml-20 text-center md:text-left mb-12 md:mb-0'>
          <div className='max-w-[520px] mx-auto order-2 xl:order-none lg:order-none'>
            <motion.h2 
             variants={fadeIn('right', 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
              className='h2'>
              Download our App now and hit the road with ease
            </motion.h2>
            <motion.p
             variants={fadeIn('right', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
             className='mb-10'
            >
              Visit the Mercedes-Benz India website and discover your dream Mercedes-Benz 
              car. Get to know more about our vehicles, features, prices and more. Active 
            </motion.p>
            <motion.div 
             variants={fadeIn('right', 0.6)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
            className='flex gap-x-3 justify-center xl:justify-start lg:justify-start 
            md:justify-start'>
            <button>
                <Image
                src={'/icons/buttons/app-store.png'}
                width={132}
                height={36}
                alt='google play logo'
                className='w-[153px] h-[45px]'
                 />
              </button>
              <button >
                <Image
                src={'/icons/buttons/google-play.png'}
                width={132}
                height={36}
                alt='google play logo'
                className='w-[153px] h-[45px]'
                
                 />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <motion.div 
            variants={fadeIn('left', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
          className='flex-1 flex justify-center order-1 md:order-none'>
          <Image src={'/icons/cta/ctaPic.png'} 
           width={230}
           height={450}
           alt=''
          />
        </motion.div>
      </div>
      </div>
     
    </section>
  )
}
