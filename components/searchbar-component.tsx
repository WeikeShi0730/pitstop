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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <button
        className="flex justify-center items-center py-2"
        onClick={handleOnClick}
      >
        <FiSearch />
      </button>
      <Transition
        show={open}
        enter="transition duration-500 ease-in-out transform"
        enterFrom="scale-x-90 opacity-0"
        enterTo="scale-x-100 opacity-100"
        leave="transition duration-500 ease-in-out transform"
        leaveFrom="scale-x-100 opacity-100"
        leaveTo="scale-x-90 opacity-0"
      >
        <div ref={ref} className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="bg-transparent outline-none border-b border-orange-theme w-36"
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Search..."
            />
            <button type="submit">&rarr;</button>
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default SearchBar;
