import classNames from "classnames";
import Image from "next/image";
import { Header, HeroSection } from "@/components";

export default function Home() {
  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center overflow-clip relative"
      )}
    >
      <Header />
      <HeroSection />
      {/* Displaying a background image */}
      {/* <div className="absolute"> */}
      <Image
        src="/background.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute"
      />
      {/* </div> */}
    </main>
  );
}
