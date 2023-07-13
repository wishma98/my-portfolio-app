import { GetIconByName } from "@utils/icons";

const ArrowDownIcon: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <div
      className={
        " sm:w-[24px] sm:h-[24px] sm:text-[14px] md:w-[36px] md:h-[36px] md:text-[21px] lg:w-[36px] lg:h-[36px] lg:text-[21px] xl:w-[36px] xl:h-[36px] xl:text-[21px] 2xl:w-[36px] 2xl:h-[36px] 2xl:text-[21px] bg-brand-icon-bg " +
        "text-font-child1 rounded-full flex justify-center items-center"
      }
    >
      {GetIconByName("chevronDown")}
    </div>
  );
};

export default ArrowDownIcon;
