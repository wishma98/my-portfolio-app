import { GetIconByName } from "@/utils/icons";
import React, { useEffect, useState } from "react";
import { TbMoonOff } from "react-icons/tb";
import { RiMoonLine } from "react-icons/ri";
import cn from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [isScroller, setIsScroller] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 10) {
        setIsScroller(true);
      } else {
        setIsScroller(false);
      }
    });
  }, []);
  return (
    <header>
      <div
        className={`sticky top-0 flex flex-row items-start lg:justify-end max-lg:justify-end xl:justify-end sm:justify-center max-w-7xl mx-auto pt-3 pb-2 ${
          isScroller
            ? "pb-4 fixed bg-[rgb(36,36,36)]/[.95] top-0 left-0 right-0 z-50 shadow-fill-dropdown-hover"
            : ""
        }`}
      >
        {!isScroller && (
          <div
            className={
              "fixed opacity-60 top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]" +
              " bg-brand blur-[190px] z-40 "
            }
          />
        )}

        {/* <motion.div
          initial={{
            x: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.6,
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <TbMoonOff className={" cursor-pointer w-8 h-8 rotate-[30deg]"} />
          ) : (
            <RiMoonLine className={" cursor-pointer w-8 h-8 rotate-[40deg]"} />
          )}
        </motion.div> */}
        <div
          className={
            " flex-row gap-5 ml-8 sm:flex max-sm:flex md:flex lg:flex xl:flex 2xl:flex"
          }
        >
          <Link href={"#hero"}>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className={
                "font-bold font-montserrat text-16px hover:text-cyan-300 cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Home
            </motion.div>
          </Link>
          <Link href={"#about"}>
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.25,
              }}
              className={
                "font-bold font-montserrat text-16px hover:text-cyan-300 cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              About
            </motion.div>
          </Link>
          <Link href={"#skills"}>
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.6,
              }}
              className={
                "font-bold font-montserrat text-16px hover:text-cyan-300 cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Skills
            </motion.div>
          </Link>
          <Link href={"#contact"}>
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.9,
              }}
              className={
                "font-bold font-montserrat text-16px hover:text-cyan-300 cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  );
}
