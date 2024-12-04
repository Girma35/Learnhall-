import React from 'react';
import Navbar from '../navbar/Navbar';
import { IoMdArrowRoundForward } from "react-icons/io";
import Blob from '../../assets/blob.svg';
import HeroPng from '../../assets/HeroPng.png';
import { motion } from "framer-motion";




export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: delay,
        ease: 'easeInOut',
      }
    }
  }
}

const Hero = () => {
  return (
    <section className="bg-light dark:bg-black overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug mb-4"
            >
              Empowering Tomorrow's <span className="text-secondary">Tech Leaders</span>
            </motion.h1>
            <motion.button
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn flex items-center gap-2 group"
            >
              Get Started
              <IoMdArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="drop-shadow w-[500px] relative z-10 xl:w-[500px]"
          />
          <img src={Blob} className="absolute bottom-32 w-[800px] md:w-[100px] hidden md:block" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
 