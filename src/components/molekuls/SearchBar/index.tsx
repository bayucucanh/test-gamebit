import { IconCustom, InputCustom } from "@/components";
import { FiShoppingCart } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="p-4 flex gap-3 items-center">
      <InputCustom />
      <IconCustom isNotif />
      <IconCustom isNotif={false} customIcon={FiShoppingCart} />
    </div>
  );
};

export default SearchBar;
