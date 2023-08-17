import { GetIconByName } from "@/utils/icons";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import SkillBox from "./layouts/SkillBox";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        " h-screen sticky justify-center items-center flex flex-col text-center md:text-left xl:flex-row max-w-[2000px]" +
        " xl:px-10 min-h-screen xl:space-y-0 mx-auto"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] pl-10 text-gray-500 font-montserrat font-bold text-2xl h-12 lg:ml-0 max-lg:ml-0 sm:mx-auto max-sm:mx-auto md:mx-auto lg:text-start max-lg:text-start max-md:text-start sm:text-center md:text-center max-sm:text-center"
        }
      >
        Skills
      </h3>
      <div className={"grid grid-cols-4 gap-5"}>
        <SkillBox
          yPosition={-20}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-40}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-60}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-80}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-20}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-40}
          imgUrl="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
        />
        <SkillBox
          yPosition={-60}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-80}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />
        <div />
        <SkillBox
          yPosition={-20}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
        <SkillBox
          yPosition={-40}
          imgUrl="https://lakshanrasingolla.com/img/sql.png"
        />
        <div />
        {/* <SkillBox
          yPosition={-60}
          imgUrl="https://w7.pngwing.com/pngs/98/1006/png-transparent-microsoft-visual-studio-team-foundation-server-visual-basic-asp-net-studio-flex-design-purple-angle-violet.png"
        />
        <SkillBox
          yPosition={-80}
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        /> */}
      </div>
    </motion.div>
  );
}
