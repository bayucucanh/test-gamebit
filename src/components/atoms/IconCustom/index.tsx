import { FiBell } from "react-icons/fi";
import { IconType } from "react-icons";

interface IconCustomProps {
  isNotif: boolean;
  customIcon?: IconType;
}

const IconCustom: React.FC<IconCustomProps> = ({
  isNotif,
  customIcon: CustomIcon = FiBell,
}) => {
  return (
    <div className="relative">
      <CustomIcon className="text-2xl text-[#6B7078]" />
      {isNotif && (
        <div className="absolute bg-[#1fcb91] rounded w-2 h-2 top-0 right-0"></div>
      )}
    </div>
  );
};

export default IconCustom;
