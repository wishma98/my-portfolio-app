import Image from "next/image";
import React from "react";

type Props = {};

const ProfileImage = (props: Props) => {
  return (
    <div
      className={
        "relative flex justify-center items-center w-64 h-64 border border-dashed border-cyan-600 p-5 rounded-full"
      }
    >
      <div className={" absolute bg-cyan-400/70 rounded-full animate-wave"} />
      <Image
        src={require("@/public/man-vector.png")}
        className={" relative w-48 h-48 rounded-full object-cover z-30"}
        alt=""
      />
    </div>
  );
};

export default ProfileImage;
