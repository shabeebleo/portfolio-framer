import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function LinkSideBar() {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1, 
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 60,
      opacity: 0,
      // transition:{
      //   duration:.2
      // }
    },
  };
  let items = ["HomePage", "Services", "Porfolio", "Contact", "About"];
  return (
    <motion.div
    // exit={{ transition: { duration: 0.2 ,opacity:0} }}
      variants={variants}
      className="links w-[100%] h-[100%] flex flex-col mt-1 items-center justify-center gap-[20px] "
    >
      {items.map((item, index) => {
        console.log(item, "item");
        return (
          <motion.a 
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1 }}
          key={index}
          variants={itemVariants}
          href=""

          className="text-black"
          transition={{ duration: 0.2 }} 
          
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export default LinkSideBar;
