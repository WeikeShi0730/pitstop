import { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { FiSearch } from "react-icons/fi";
import { useClickOutside } from "../utils/use-click-outside";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(() => !open));
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  //   useEffect(() => {
  //     const searchbar = document.getElementsByClassName("searchbar");
  //     console.log(searchbar);
  //     if (open) {
  //       searchbar[0].classList.add("translate-x-0");
  //       searchbar[0].classList.remove("translate-x-28");
  //     } else if (!open) {
  //       searchbar[0].classList.add("translate-x-28");
  //       searchbar[0].classList.remove("translate-x-0");
  //     }
  //   }, [open]);

  return (
    <div className="flex justify-center items-center gap-2 overflow-hidden">
      <button onClick={handleOnClick}>
        <FiSearch />
      </button>
      <Transition
        show={open}
        enter="transition duration-500 ease-in-out transform"
        enterFrom="translate-x-36"
        enterTo="translate-x-0"
        leave="transition duration-500 ease-in-out transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-36"
      >
        <div ref={ref} className="flex justify-center items-center gap-2">
          <form>
            <input
              className="bg-transparent outline-none border-b border-orange-theme w-36"
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Search..."
            />
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default SearchBar;
