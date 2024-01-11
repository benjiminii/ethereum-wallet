import classNames from "classnames";
import Image from "next/image";

import backgroundImage from "@/public/background.png";
import { Header, HeroSection, UserModal } from "@/components";

export default function Home() {
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
