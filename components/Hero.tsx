import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./layouts/BackgroundCircles";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Wishma Gamlath"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className={
        "flex flex-col h-screen overflow-hidden justify-center items-center"
      }
    >
      <div className={"flex flex-col justify-center items-center z-30"}>
        <Image
          src={require("@/public/man-vector.jpg")}
          className={" w-36 h-36 rounded-[64px] object-cover"}
          alt=""
        />
        <p
          className={
            "flex flex-row mt-8 font-spartan font-semibold text-font-child3-primary text-[28px]"
          }
        >
          Hi there! I'm{" "}
          <span
            className={
              " ml-2 font-lobster font-semibold text-font-brand-primary"
            }
          >
            {text}
            <Cursor cursorColor={"#F7AB0A"} />
          </span>
        </p>
        <p
          className={
            "mt-5 ml-2 font-spartan uppercase scroll-px-10 tracking-[0.3em] font-semibold text-font-child3 text-3xl"
          }
        >
          Software Developer
        </p>
      </div>
      <BackgroundCircles />
    </div>
  );
}
