"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { scrollAnimation } from "@/constants/motion.constant";

function HeroSection() {
  return (
    <motion.div
      className={classNames(
        "flex items-center justify-center flex-col flex-grow z-10 relative"
      )}
      initial="offscreen"
      whileInView="onscreen"
      variants={scrollAnimation}
    >
      <div className="self-center text-[70px] md:text-[100px] text-[#F2F2F2]">
        <h1 className="relative top-6 md:top-9 text-center">Connect To</h1>
        <h1 className="relative bottom-6 md:bottom-9 text-center">
          The Future.
        </h1>
      </div>
    </motion.div>
  );
}

export default HeroSection;
