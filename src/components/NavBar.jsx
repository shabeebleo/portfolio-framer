import { motion } from "framer-motion";
import React from "react";
import SideBar from "./SideBar";
 
function NavBar() {
 
  return (
    <div className="navbar h-100px flex">
      <SideBar/>
      
      <div className="wrapper items-center h-14 flex  justify-around w-full">
      <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className="font-bold ">Its Me...</motion.span>
        <div className="social flex gap-1 "> 
          <a href=""> 
            <img src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
