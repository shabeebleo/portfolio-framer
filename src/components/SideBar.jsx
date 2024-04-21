import React, { useState } from "react";
import LinkSideBar from "./LinkSideBar";
import ToggleButtonSideBar from "./ToggleButtonSideBar";
import { motion, spring } from "framer-motion";

function SideBar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sideBar  flex flex-col items-center justify-center text-black ">
      <ToggleButtonSideBar setOpen={setOpen} />
      <motion.div
        animate={open ? "open" : "closed"}
        className="bg  h-screen fixed flex items-center justify-center  rounded-r-2xl  top-0 left-0 w-[310px] bg-white"
        variants={variants}
      >
        <LinkSideBar />
      </motion.div>
    </motion.div>
  );
}

export default SideBar;
