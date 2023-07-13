import { GetIconByName } from "@utils/icons";

const MenuIcon: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <div
      className={
        "w-[36px] h-[36px] text-[16px] bg-brand-icon-bg text-font rounded-full flex justify-center items-center"
      }
    >
      {GetIconByName("menu")}
    </div>
  );
};

export default MenuIcon;
