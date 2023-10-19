import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const About = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["<About/>"],
    typeSpeed: 800,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={" h-screen sticky justify-around items-center flex flex-col"}
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] pl-10 text-gray-500 font-montserrat font-bold text-3xl h-12 lg:ml-0 max-lg:ml-0 sm:mx-auto max-sm:mx-auto md:mx-auto lg:text-start max-lg:text-start max-md:text-start sm:text-center md:text-center max-sm:text-center"
        }
      >
        About
      </h3>
      <div
        className={
          " flex flex-col items-start lg:flex-row lg:justify-between max-lg:flex-row max-lg:justify-between sm:flex-col-reverse sm:justify-center sm-x:justify-center sm-x:mx-auto max-sm:flex-col-reverse sm:mt-36 sm-x:mt-24 max-sm:mt-36 max-sm:justify-center md:flex-col-reverse md:justify-center"
        }
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={
            "mt-16 ml-28 lg:ml-16 max-lg:ml-16 sm-x:mt-5 max-md:ml-16 sm:ml-0 sm:px-5 md:ml-0 md:px-6 max-sm:ml-0 max-sm:px-5"
          }
        >
          <p
            className={
              "font-roboto font-normal text-18px max-w-lg lg:text-18px lg:text-start max-lg:text-18px max-lg:text-start max-md:text-18px max-md:text-start sm:text-12px sm:text-center md:text-[14px] md:text-center max-sm:text-12px max-sm:text-center"
            }
          >
            "Welcome to my portfolio! I'm a passionate frontend developer with a
            love for creating visually stunning and user-friendly web
            experiences. Through my diverse projects showcased here, you'll find
            a showcase of my skills in HTML, CSS, JavaScript, and various
            frontend frameworks. From responsive designs to interactive
            interfaces, each project demonstrates my dedication to crafting
            seamless, engaging websites. Let's collaborate and bring your ideas
            to life!"
          </p>
        </motion.div>
        <div
          className={
            "mt-6 lg:mt-5 max-lg:mt-0 sm:-mt-0 sm:mx-auto sm:mb-7 sm-x:mb-0 sm-x:mt-7 max-sm:mb-7 max-sm:mx-auto max-sm:-mt-7 md:-mt-5 md:mx-auto"
          }
        >
          <motion.img
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            // src="https://keepbookadmin.s3.amazonaws.com/6530f5caf91ec52b592ca9b1.jpg"
            src="https://keepbookadmin.s3.amazonaws.com/6530f85af91ec52b592ca9b3.jpg"
            className={
              "w-[570px] h-auto bg-slate-700/30 sm:w-[200px] border-6 border-solid border-white/50 p-0 rounded-full max-sm:w-[200px] md:w-[230px] rotate-[-2deg] object-cover"
            }
          />
        </div>
      </div>
      <div
        className={
          "flex flex-row gap-5 ml-8 sm-x:ml-0 border-t sm-x:-mt-20 border-b py-4 px-3"
        }
      >
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SocialIcon
            url="https://www.github.com/wishma98"
            fgColor="gray"
            bgColor="black"
            title="Github"
            className={"rounded-full hover:shadow-icon"}
          />
        </motion.div>
        <motion.div
          initial={{
            y: -20,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/wishma-gamlath-315501242"
            fgColor="gray"
            bgColor="black"
            title="Linkedin"
            className={"rounded-full hover:shadow-icon"}
          />
        </motion.div>
        <motion.div
          initial={{
            y: -30,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SocialIcon
            url="https://wa.me/+94778899593"
            fgColor="gray"
            bgColor="black"
            title="Whatsapp"
            network="whatsapp"
            className={" rounded-full hover:shadow-icon"}
          />
        </motion.div>
        <motion.div
          initial={{
            y: -40,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SocialIcon
            url="https://mailto:kckwishma26@gmail.com"
            fgColor="gray"
            bgColor="black"
            title="Email"
            network="email"
            className={" rounded-full hover:shadow-icon"}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
