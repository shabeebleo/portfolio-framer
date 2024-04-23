import React from "react";
import { animate, motion } from "framer-motion";
function Hero() {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
        duration: 1,
        staggerChildren: 0.1,
      },
    },

    scrollButton: {
      opacity: [1, 0],
      y: [0, 30],

      transition: {
        duration: 0.9,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "forward",
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.div className="hero h-screen  custom-gradient  flex justify-between overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-container text-center flex flex-col justify-center items-center w-1/2"
      >
        <motion.h2
          variants={textVariants}
          className=" font-bold text-5xl jersey-10-regular  z-[10] overflow-hidden text-violet-950"
        >
          Shabeeb PV
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className="font-bold text-6xl jersey-10-regular overflow-hidden  z-[10]"
        >
          MERN Stack developer
        </motion.h1>
        <motion.div className="flex mt-4 z-[10]">
          <motion.button
            variants={textVariants}
            className="border-white  button-color border-t-2 p-2 border-s-2 rounded-lg  mr-3"
          >
            Latest Works
          </motion.button>
          <motion.button
            variants={textVariants}
            className=" bg-white border-2 button-border-color p-2 text-black  rounded-lg"
          >
            Contact ME
          </motion.button>
        </motion.div>

        <motion.img
          variants={textVariants}
          animate="scrollButton"
          className=" mt-5 w-[50px] h-[35px] object-contain"
          src="/scroll.png"
          alt=""
        />
      </motion.div>

      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer min-w-max  absolute slinding-text overflow-hidden whitespace-nowrap nova-slim-regular w-full text-gray-600"
      >
        expertise in MongoDB, Express.js, React.js, and Node.js
      </motion.div>
      <motion.div
        variants={textVariants}
        className="imageContainer  h-full w-1/2  flex  justify-start items-center"
      >
        <motion.img
          className=" absolute w-1/2 h-3/4   object-contain overflow-hidden"
          src="/hero.png"
          alt="hero"
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
