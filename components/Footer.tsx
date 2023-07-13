import { GetIconByName } from "@/utils/icons";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div
      className={
        " relative flex flex-col justify-between items-center py-3 px-6"
      }
    >
      <div className={"flex flex-row gap-5"}>
        {/* <div className="text-16px text-brand border-2 border-solid border-border-one rounded-[100px] p-12px cursor-pointer flex flex-row content-center items-center hover:shadow-icon">
          {GetIconByName("email")}
        </div>
        <div className="text-16px text-brand border-2 border-solid border-border-one rounded-[100px] p-12px cursor-pointer flex flex-row content-center items-center hover:shadow-icon">
          {GetIconByName("whatsapp")}
        </div>
        <div className="text-16px text-brand border-2 border-solid border-border-one rounded-[100px] p-12px cursor-pointer flex flex-row content-center items-center hover:shadow-icon">
          {GetIconByName("instagram")}
        </div>
        <div className="text-16px text-brand border-2 border-solid border-border-one rounded-[100px] p-12px cursor-pointer flex flex-row content-center items-center hover:shadow-icon">
          {GetIconByName("github")}
        </div> */}
        <motion.div
          initial={{
            x: -150,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
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
            duration: 1.5,
          }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/wishma-gamlath-315501242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlyrnI1XrRtKddqisM%2Fvoog%3D%3D"
            fgColor="gray"
            bgColor="black"
            title="Linkedin"
            className={"rounded-full hover:shadow-icon"}
          />
        </motion.div>
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
            duration: 1.5,
          }}
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
            duration: 1.5,
          }}
        >
          <SocialIcon
            url="https://mail.google.com/mail/kckwishma26@gmail.com"
            fgColor="gray"
            bgColor="black"
            title="Email"
            network="email"
            className={" rounded-full hover:shadow-icon"}
          />
        </motion.div>
      </div>
      <div
        className={
          "flex flex-col justify-center content-center items-center mt-42px"
        }
      >
        <div className="flex flex-col font-inter font-normal text-12px text-center">
          Copyright © 2023 | Developed by
          <span className={"pl-4px font-inter font-bold text-12px"}>
            Wishma Gamlath
          </span>
        </div>
      </div>
    </div>
  );
}
