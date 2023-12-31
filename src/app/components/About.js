"use client";

// next image
import Image from "next/image";
// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// count up
import CountUp from "react-countup";

// react intersections observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row lg:flex-row xl:justify-between lg:justify-between">
          {/* image */}
          <motion.div className='flex-1 mb-8 xl:mb-0 lg:mb-0'
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
          >
            <Image
              className="rounded-[20px]"
              src={"/icons/about/aboutP.png"}
              alt="About Pic"
              width={650}
              height={400}
            />
          </motion.div>
          {/* text & stats */}
          <div className='flex-1 flex items-center xl:justify-center lg:justify-center '>
            <div className='xl:max-w-[517px] lg:max-w-[500px]'>
              <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
              className='h2'>
                Car Services Simplified
              </motion.h2>
              <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
               className='md-[42px] max-w-md'>
                Rent, choose, and repair with ease, Our convential Location,
                Diverse cars types and reliable repair points and seemless car
                experience.
              </motion.p>
              {/* stats */}
              <motion.div 
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              className='flex items-center gap-x-8 mb-12'>
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                {/* rental outline */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>
                 {/* repair points */}
                 <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={36} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </div>
                </div>
                {/* btn */}
              </motion.div>
              <motion.button 
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
              className='hidden xl:block lg:block bg-accent hover:bg-accent-hover
              rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px]
              text-[13px] max-w-[184px]'>
                Sell All Cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
