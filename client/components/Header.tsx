"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { scrollAnimation } from "@/constants/motion.constant";

function Header() {
  const openModal = () =>
    (document?.getElementById("user-modal") as HTMLDialogElement)?.showModal();

  return (
    <header className="w-full py-2 px-3 md:px-6 ixed top-0 z-50  text-green1">
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
            <p className="text-lg hidden md:block">Ethereum Wallet</p>
          </a>
          <div className="flex items-center gap-x-3">
            <nav className="flex text-lg font-light">
              <ul className="flex space-x-3 md:space-x-10">
                <li>
                  <button className="btn bg-main2 text-white border-none hover:text-main1">
                    Connect Wallet
                  </button>
                </li>
                <li>
                  <button
                    className="btn bg-main2 text-white border-none hover:text-main1"
                    onClick={() => openModal()}
                  >
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
