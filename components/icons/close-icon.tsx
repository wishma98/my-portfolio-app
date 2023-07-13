import { GetIconByName } from "@utils/icons";

const CloseIcon: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <div
      className={
        "w-[56px] h-[56px] text-[24px] bg-black text-font-white rounded-full flex justify-center items-center"
      }
    >
      {GetIconByName("cross")}
    </div>
  );
};

export default CloseIcon;
