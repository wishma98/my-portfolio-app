import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className={"relative flex justify-center items-center -mt-14"}>
      <div
        className={
          "border border-[#333333] rounded-full h-[200px] w-[200px] mt-[-400px] animate-ping"
        }
      />
      <div
        className={
          "border border-[#333333] rounded-full absolute h-[300px] w-[300px] mt-[-400px] animate-ping"
        }
      />
      <div
        className={
          "border border-[#333333] rounded-full absolute h-[500px] w-[500px] mt-[-400px] animate-ping"
        }
      />
      <div
        className={
          "rounded-full border border-cyan-600 opacity-20 w-[650px] h-[650px] absolute mt-[-400px] "
        }
      />
      <div
        className={
          "border border-[#333333] rounded-full absolute h-[800px] w-[800px] mt-[-400px] animate-ping"
        }
      />
    </div>
  );
};

export default BackgroundCircles;
