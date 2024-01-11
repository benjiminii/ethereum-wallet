"use client";
import { scrollAnimation } from "@/constants/motion.constant";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  // const closeDrawer = () => document?.getElementById("drawer")?.click();

  return (
    <header className="w-full py-2 fixed top-0 z-50  text-green1">
      <motion.div
        className={classNames(
          "relative flex items-center justify-center flex-col w-full z-10"
        )}
        initial="offscreen"
        whileInView="onscreen"
        variants={scrollAnimation}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="hover:text-gray-300 flex items-center gap-3">
            <Image src="/favicon.ico" alt="Logo Image" width={50} height={50} />
            <p className="text-lg">Etheruem Wallet</p>
          </a>
          <div className="flex items-center gap-x-3">
            <nav className="hidden md:flex text-lg font-light mr-6">
              <ul className="flex space-x-10">
                <li>
                  <button className="btn bg-main2 text-white border-none hover:text-main1 ">
                    Connect to Wallet
                  </button>
                </li>
                <li>
                  <button className="btn bg-main2 text-white border-none hover:text-main1 ">
                    <FaRegCircleUser size={25} color={"#e6e6e6"} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
