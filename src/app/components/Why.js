'use client'

// next image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// icons
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'


export default function Why() {
  return (
    <section className='section flex items-center' id='why'>
      <div className='container mx-auto'>
       <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
       className='h2 text-center'>Unmatched exellence and customer satisfaction
       </motion.h2>
       <motion.p 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
       className='max-w-[680px] text-center mx-auto mb-2'>
        Our dedication to providing exceptional services sets up apart from the
        competition. From the moment you engage with us, we strive to exeed your
        expectations in every interaction.
       </motion.p> 
       {/* car Image */}
       <motion.div 
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
       className='hidden md:flex justify-center mb-6 xl:mb-2 lg:mb-2'>
        <Image src={'/icons/whyus/whyP.png'} width={700} height={420} alt='why us pic' />
       </motion.div>
       {/* grid items */}
       <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}
       className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 lg:grid 
       lg:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]'>
        {/* item 1 */}
        <div className='flex flex-col items-center text-center max-w-[160px]
        xl:max-w-none lg:max-w-none p-2 xl:p-0 lg:p-0'>
          <MdKey className='text-[38px] text-accent mb-4' />
          <h3 className='h3'>Rent simplely and quickly</h3>
          <p className="hidden xl:flex lg:flex">We priroitize your needs and we go above and beyond to ensure
           your experience with us is nothing short of outstanding.
          </p>
        </div>
          {/* item 2 */}
          <div className='flex flex-col items-center text-center max-w-[160px]
        xl:max-w-none lg:max-w-none p-2 xl:p-0 lg:p-0'>
          <MdTrendingUp className='text-[38px] text-accent mb-4' />
          <h3 className='h3'>Modern & well maintained vehicles</h3>
          <p className="hidden xl:flex lg:flex">We priroitize your needs and we go above and beyond to ensure
           your experience with us is nothing short of outstanding.
          </p>
        </div>
         {/* item 3 */}
         <div className='flex flex-col items-center text-center max-w-[160px]
        xl:max-w-none lg:max-w-none p-2 xl:p-0 lg:p-0'>
          <MdHandshake className='text-[38px] text-accent mb-4' />
          <h3 className='h3'>Prompt and flexible services</h3>
          <p className="hidden xl:flex lg:flex">We priroitize your needs and we go above and beyond to ensure
           your experience with us is nothing short of outstanding.
          </p>
        </div>
       </motion.div>
      </div>
    </section>
  );
}
