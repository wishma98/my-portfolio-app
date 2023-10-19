import { GetIconByName } from "@/utils/icons";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Footer({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:kckwishma26@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <motion.div
      className={
        " top-44 h-screen px-10 flex flex-col justify-between items-center"
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={"mt-44 w-auto"}>
        <h3
          className={
            " -mt-24 uppercase tracking-[20px] pl-10 text-gray-500 font-montserrat font-bold text-3xl h-12 lg:ml-12 max-lg:ml-12 xl:ml-12 md:ml-12 max-md:ml-12 sm-x:pl-0 sm:mx-auto max-sm:mx-auto md:mx-auto lg:text-start max-lg:text-start max-md:text-start sm:text-center md:text-center max-sm:text-center sm:pl-0 sm:ml-5"
          }
        >
          Contact me
        </h3>
        <div
          className={
            "flex flex-col sm:mt-20 space-y-10 xl:space-y-10 lg:space-y-10"
          }
        >
          <h4
            className={
              "text-xl lg:text-3xl xl:text-3xl font-semibold text-center sm:ml-2 font-roboto mt-5"
            }
          >
            I have just what you need.{" "}
            <span className={"decoration-[#F7AB0A]/50 underline"}>
              Lets Talk.
            </span>
          </h4>
          <div className={"space-y-10 xl:space-y-10 lg:space-y-10"}>
            <div
              className={"flex flex-row items-center space-x-5 justify-center"}
            >
              <div
                className={
                  "text-[#F7AB0A] text-[16px] lg:text-[24px] xl:text-[24px] animate-pulse "
                }
              >
                {GetIconByName("phone")}
              </div>
              <p className={"text-lg lg:text-2xl xl:text-2xl text-white"}>
                +94778899593
              </p>
            </div>{" "}
            <div
              className={"flex flex-row items-center space-x-5 justify-center"}
            >
              <div
                className={
                  "text-[#F7AB0A] text-[16px] lg:text-[24px] xl:text-[24px] animate-pulse "
                }
              >
                {GetIconByName("email")}
              </div>
              <p className={"text-2xl lg:text-2xl xl:text-2xl text-white"}>
                kckwishma26@gmail.com
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={
              "flex flex-col space-y-2 mx-auto sm:w-auto sm-x:w-auto w-fit min-w-fit"
            }
          >
            <div
              className={
                "flex sm-x:flex-col lg:space-y-0 lg:space-x-2 xl:space-y-0 xl:space-x-2 sm-x:space-x-0 sm-x:space-y-2 lg:flex-row xl:flex-row "
              }
            >
              <input
                {...register("name")}
                placeholder="Name"
                className={"contactinput sm:w-full sm-x:w-full lg:w-full "}
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className={"contactinput sm:w-full sm-x:w-full lg:w-full "}
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className={"contactinput"}
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className={"contactinput"}
            />
            <button
              type="submit"
              className={
                "bg-[#F7AB0A] py-5 px-10 sm:py-3 sm-x:py-3 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/40 hover:text-white cursor-pointer"
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className={
          "flex flex-col font-inter font-normal text-12px text-center pb-7"
        }
      >
        Copyright © 2023 | Developed by
        <span className={"pl-4px font-inter font-bold text-12px"}>
          Wishma Gamlath
        </span>
      </div>
    </motion.div>
  );
}
