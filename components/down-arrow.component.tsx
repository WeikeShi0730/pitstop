import { BiDownArrow } from "react-icons/bi";
const DownArrow = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 animate-pulse text-sm md:text-base">
      <BiDownArrow />
    </div>
  );
};

export default DownArrow;
