import React from "react";
import { motion } from "framer-motion";

type Props = {
  imgUrl?: string;
  yPosition?: any;
  className?: string;
};

function SkillBox({ imgUrl, yPosition, className }: Props) {
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
          ` hover:shadow-icon rounded-[25px] object-cover w-36 h-36 sm:w-24 md:w-28 sm-x:w-24 sm:h-24 md:h-28 sm-x:h-24 group-hover:grayscale transition duration-300 ease-in-out` +
          className
        }
      />
    </div>
  );
}

export default SkillBox;
