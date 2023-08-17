import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./layouts/BackgroundCircles";
import Image from "next/image";
import ProfileImage from "./layouts/profileImage";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Wishma Gamlath"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <div
      className={
        "flex flex-col h-screen overflow-hidden justify-center items-center"
      }
    >
      <div className={"flex flex-col justify-center items-center z-30"}>
        <ProfileImage />
        <p
          className={
            "flex flex-row mt-8 z-30 font-spartan font-semibold text-font-child3-primary lg:text-[28px] md:text-[28px] sm:text-[22px] max-sm:text-[22px] "
          }
        >
          Hi there! I'm{" "}
          <span className={" ml-2 font-lobster font-semibold text-sky-600"}>
            {text}
            <Cursor cursorColor={"#F7AB0A"} />
          </span>
        </p>
        <p
          className={
            "mt-5 ml-2 z-30 font-spartan uppercase lg:scroll-px-10 max-lg:scroll-px-10 md:scroll-px-10 sm:scroll-px-3 max-sm:scroll-px-3 tracking-[0.3em] font-semibold text-font-child3 text-3xl lg:text-3xl md:text-2xl sm:text-[20px] max-sm:text-[20px] "
          }
        >
          Software Developer
        </p>
      </div>
      <BackgroundCircles />
    </div>
  );
}
