"use client";

import { useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import Cookies from "js-cookie";

import backgroundImage from "@/public/background.png";
import { Header, HeroSection, UserModal } from "@/components";
import { authStore } from "@/store/authStore";
import { fetchUser } from "@/services/userService";
import { openModal } from "@/components/Header";
import { userStore } from "@/store/userStore";

export default function Home() {
  const { setLoggedIn, loggedIn } = authStore();
  const { setUser } = userStore();

  async function getUserData(walletAddress: string) {
    const res = await fetchUser(walletAddress);
    if (res && res?.firstName) {
      setUser(res);
    } else openModal();
  }

  useEffect(() => {
    const walletAddress = Cookies.get("wallet_address");
    if (loggedIn && walletAddress) {
      getUserData(walletAddress);
    }
  }, [loggedIn]);

  useEffect(() => {
    const walletAddress = Cookies.get("wallet_address");
    if (walletAddress) {
      setLoggedIn(true);
      getUserData(walletAddress);
    }
  }, []);

  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center overflow-clip relative"
      )}
    >
      {/* Web header component */}
      <Header />
      <HeroSection />
      <UserModal />
      {/* Displaying a background image */}
      <Image
        src={backgroundImage.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </main>
  );
}
