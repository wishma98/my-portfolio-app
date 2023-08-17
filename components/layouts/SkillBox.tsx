import React from "react";
import { motion } from "framer-motion";

type Props = {
  imgUrl?: string;
  yPosition?: any;
};

function SkillBox({ imgUrl, yPosition }: Props) {
  return (
    <div className={"group relative flex cursor-pointer"}>
      <motion.img
        initial={{
          y: yPosition,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={imgUrl}
        className={
          " hover:shadow-icon rounded-[25px] object-cover w-36 h-36 sm:w-24 md:w-28 sm:h-24 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
        }
      />
    </div>
  );
}

export default SkillBox;
