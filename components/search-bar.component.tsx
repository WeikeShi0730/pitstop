import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { useClickOutside } from "../utils/use-click-outside";

const SearchBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickOutside(ref, () => setOpen(() => !open));
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setInput(() => value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/products",
      query: { name: input },
    });
  };

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
              autoFocus={true}
              type="text"
              name="name"
              placeholder="Search..."
              onChange={handleChange}
            />
            <button type="submit">&rarr;</button>
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default SearchBar;
