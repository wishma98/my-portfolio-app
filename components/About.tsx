import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const About = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["<About/>"],
    loop: true,
    typeSpeed: 400,
    delaySpeed: 3500,
  });
  return (
    <div className={"sticky justify-start flex flex-col"}>
      <h1 className={"font-montserrat font-bold text-3xl h-12 ml-20"}>
        {text}
      </h1>
      <div className={"mt-16 ml-28 flex flex-row items-start justify-between"}>
        <p className={"font-roboto font-normal text-18px max-w-lg"}>
          "Welcome to my portfolio! I'm a passionate frontend developer with a
          love for creating visually stunning and user-friendly web experiences.
          Through my diverse projects showcased here, you'll find a showcase of
          my skills in HTML, CSS, JavaScript, and various frontend frameworks.
          From responsive designs to interactive interfaces, each project
          demonstrates my dedication to crafting seamless, engaging websites.
          Let's collaborate and bring your ideas to life!"
        </p>
        <Image
          src={require("@/public/my-art.png")}
          className={
            " w-[570px] h-[570px] -mt-28 rotate-[-2deg] rounded-[64px] object-cover"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
