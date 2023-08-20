"use client";


// next image
import Image from "next/image";

// frAMER motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// copyright
import CopyRight from "./CopyRight";

// link rect/scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id='contact'>
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <Image
                src={"/icons/logo.svg"}
                height={64}
                width={194}
                alt="car logo"
              />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Visit the Mercedes-Benz India website and discover your dream car.
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-x-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(92)306-5720833</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">zabihullahrajpoot39@gmail.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8'>Company</h3>
              <ul className='flex flex-col gap-y-4 font-semibold'>
                <li><a href=''>New york</a></li>
                <li><a href=''>Careers</a></li>
                <li><a href=''>Mobile</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>How we work</a></li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>Working Hours</h3>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Mon-Fri:</div>
                <div className='font-semibold'>09:00AM - 09:00PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Sat:</div>
                <div className='font-semibold'>09:00AM - 07:00PM</div>
              </div>
              <div className='flex gap-x-2'>
                <div className='text-secondary'>Sun:</div>
                <div className='font-semibold'>Closed</div>
              </div>
            </div>
          </div>
           {/* newsletter */}
           <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>News Letter</h3>
            <div className='mb-9 text-secondary'>
            Developed by #Zabihullah-Rajpoot 
            </div>
            {/* form */}
            <form 
            className="flex gap-x-2 h-14">
              <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Your email"
              className='outline-none bg-white h-full border rounded-lg pl-4
              focus:border-accent'
              />
              <button type='submit' className='btn btn-sm btn-accent w-24' >Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
      <CopyRight />
    </footer>
  );
}
