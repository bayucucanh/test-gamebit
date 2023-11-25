import { FiSearch } from "react-icons/fi";

const InputCustom = () => {
  return (
    <div className="relative w-full rounded-lg border border-slate-300">
      <FiSearch className="absolute left-0 m-3 text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Search any game, hero..."
        className="border-none w-full px-10 py-3 rounded-lg"
        id="search"
        name="search"
      />
    </div>
  );
};

export default InputCustom;
