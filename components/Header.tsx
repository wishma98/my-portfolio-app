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
        className={`sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto pt-3 pb-2  px-3 ${
          isScroller
            ? "pb-4 fixed bg-[rgb(36,36,36)]/[.95] top-0 left-0 right-0 z-50 shadow-fill-dropdown-hover"
            : ""
        }`}
      >
        {!isScroller && (
          <div
            className={
              "fixed opacity-60 top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]" +
              " bg-brand blur-[150px] z-100 "
            }
          />
        )}

        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <TbMoonOff className={" cursor-pointer w-8 h-8 rotate-[30deg]"} />
          ) : (
            <RiMoonLine className={" cursor-pointer w-8 h-8 rotate-[40deg]"} />
          )}
        </div>
        <div
          // initial={{
          //   x: -100,
          //   opacity: 0,
          //   scale: 0.5,
          // }}
          // animate={{
          //   x: 0,
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className={
            " flex-row gap-5 ml-16 sm:flex max-sm:flex md:flex lg:flex xl:flex 2xl:flex"
          }
        >
          <Link href={"#home"}>
            <div
              // initial={{
              //   x: -200,
              //   opacity: 0,
              //   scale: 0.5,
              // }}
              // animate={{
              //   x: 0,
              //   opacity: 1,
              //   scale: 1,
              // }}
              // transition={{
              //   duration: 1,
              // }}
              className={
                "font-bold font-montserrat text-16px cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Home
            </div>
          </Link>
          <Link href={"#about"}>
            <div
              // initial={{
              //   x: -100,
              //   opacity: 0,
              //   scale: 0.5,
              // }}
              // animate={{
              //   x: 0,
              //   opacity: 1,
              //   scale: 1,
              // }}
              // transition={{
              //   duration: 1.25,
              // }}
              className={
                "font-bold font-montserrat text-16px cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              About
            </div>
          </Link>
          <Link href={"#expiriences"}>
            <div
              // initial={{
              //   x: 200,
              //   opacity: 0,
              //   scale: 0.5,
              // }}
              // animate={{
              //   x: 0,
              //   opacity: 1,
              //   scale: 1,
              // }}
              // transition={{
              //   duration: 1.6,
              // }}
              className={
                "font-bold font-montserrat text-16px cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Expiriences
            </div>
          </Link>
          <Link href={"#contact"}>
            <div
              // initial={{
              //   x: 100,
              //   opacity: 0,
              //   scale: 0.5,
              // }}
              // animate={{
              //   x: 0,
              //   opacity: 1,
              //   scale: 1,
              // }}
              // transition={{
              //   duration: 1.9,
              // }}
              className={
                "font-bold font-montserrat text-16px cursor-pointer rounded hover:shadow-menu hover:underline-offset-4"
              }
            >
              Contact
            </div>
          </Link>
        </div>
        {/* <div
        className={
          "block sm:block max-sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        }
        // onClick={handleMobileMenu}
      >
        <MenuIcon />
      </div> */}
      </div>
    </header>
  );
}
