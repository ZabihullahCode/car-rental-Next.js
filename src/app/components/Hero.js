'use client';

// components 
import Search from "./Search";

// context
import { SearchContext } from "../context/search";
import { useContext } from "react";

// next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion"

// vatiants
import { fadeIn } from '/variants';


export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className='h-screen xl:h-[90vh] lg:h-[90vh] bg-[#b2b7c2]/10' id='home'>
      <div className='container mx-auto h-full xl:pt-10 lg:pt-10'>
        {/* text and image wrapper */}
        <div className='flex flex-col xl:flex-row lg:flex-row  justify-center items-center
        xl:justify-start lg:justify-start h-full'>
          {/* text */}
          <div className='text-center xl:max-w-xl lg:max-w-lg xl:text-left lg:text-left
          mt-16 xl:mt-0 lg:mt-0'>
            <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
            className='h1'>
            Explore the Finest <span className='text-accent'>Global</span>{' '}
            Offers
            </motion.h1>
            <motion.p 
             variants={fadeIn('down', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
            className='description max-w-[550] mx-auto xl:mx-0 lg:mx-0 mb-6 xl:mb-10
            lg:mb-10'>
              Find your ideal ride for any adventure with our diverse range of afordable and
              dependable car rentals
            </motion.p>
            {/* btn */}
            <motion.div 
             variants={fadeIn('down', 0.8)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
            className='flex gap-x-3 justify-center xl:justify-start lg:justify-start'>
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
          {/* image car */}
          <motion.div 
           variants={fadeIn('up', 0.6)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.6}}
          className='relative w-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[860px]
          lg:max-w-[860px] xl:max-h-[542px] lg:max-h-[542px] xl:absolute lg:absolute
           xl:-right-[100px] lg:-right-[100px] min-[1680px] items-center lg:ml-16 mt-12 lg:mt-8'>
             <Image
             src={'/icons/hero/hero-car.png'}
             width={600}
             height={500}
            // fill
             alt='car image for hero section'
             priority
             style={{objectFit: 'contain'}} 
             className='items-center lg:ml-12 sm:mt-8'
             />
          </motion.div>
        </div>
        </div>
    {searchActive ? ( 
    <motion.div 
    initial={{y: '-100%'}}
    animate={{y: 0}}
    transition = {{ease: easeInOut}}
    className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
        <Search />
        </motion.div>
        ) : ( 
        <div className='-mt-12 w-full max-w-[1200px] mx-auto'>
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Search />
        </motion.div>
        </div>
         )}
    </section>
  )
}
