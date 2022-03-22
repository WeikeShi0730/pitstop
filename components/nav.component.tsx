import NoScrollLink from "./no-scroll-link.component";
import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import CartIcon from "./cart-icon.component";
import SearchBar from "./search-bar.component";
import { CurrentUserType, CartItemType } from "../interfaces";
import withSubscribtion from "./hoc.component";
import { useClickOutside } from "../utils/use-click-outside";

interface UserAndCart {
  currentUser: CurrentUserType["currentUser"];
  cartItems: CartItemType[] | null;
}

const Nav = ({ currentUser, cartItems }: UserAndCart) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(() => !open));

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  return (
    <nav>
      <div className="bg-slate-700 text-slate-200 flex items-center p-2 h-20 text-sm md:text-base">
        <NoScrollLink href="/">
          <a>
            <div className="relative w-40 h-16 mx-5">
              <Image
                priority
                src="/pitstop-logos/pitstop.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </NoScrollLink>
        <div className="mx-5 hidden lg:flex">
          <NoScrollLink href="/">
            <a className="hover:underline-primary hover:underline-offset-4">Home</a>
          </NoScrollLink>
        </div>
        <div className="mx-5 hidden lg:flex">
          <NoScrollLink href="/products">
            <a className="hover:underline-primary hover:underline-offset-4">Products</a>
          </NoScrollLink>
        </div>
        <div className="mx-5 hidden lg:flex">
          <NoScrollLink href="/teams">
            <a className="hover:underline-primary hover:underline-offset-4">Teams</a>
          </NoScrollLink>
        </div>
        <div className="mx-5 hidden lg:flex">
          <NoScrollLink href="/contact">
            <a className="hover:underline-primary hover:underline-offset-4">Contact</a>
          </NoScrollLink>
        </div>
        <div className="mx-5 hidden lg:flex">
          <SearchBar />
        </div>
        <div className="mx-5 ml-auto flex ">
          <CartIcon cartItems={cartItems} />
        </div>
        <div className="mx-5 hidden lg:flex">
          {currentUser ? (
            <NoScrollLink href={`/account/${currentUser?.uid as string}`}>
              <a className="hover:underline-primary hover:underline-offset-4">{currentUser.displayName}</a>
            </NoScrollLink>
          ) : (
            <NoScrollLink href="/login">
              <a className="hover:underline-primary hover:underline-offset-4">Sign In</a>
            </NoScrollLink>
          )}
        </div>
        <div className="flex items-center justify-between lg:hidden mx-5">
          <button
            onClick={handleOnClick}
            className="flex h-6 w-6 items-center space-x-2 focus:outline-none font-light"
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={`hamburger ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`hamburger ${
                  open ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>
              <span
                className={`hamburger ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${
          open &&
          "absolute w-full -z-50 top-0 h-screen backdrop-brightness-75 backdrop-blur-sm"
        }`}
      ></div>
      <div className="absolute h-screen top-0 right-0 -z-50 pt-20">
        <Transition
          className="h-full"
          show={open}
          enter="transition duration-200 ease-in-out"
          enterFrom="translate-x-52"
          enterTo="translate-x-0"
          leave="transition duration-200 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-52"
        >
          <div
            ref={ref}
            className="h-full flex flex-col items-end overflow-hidden divide-y divide-slate-400 bg-slate-200 text-slate-700"
          >
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <SearchBar />
            </div>
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <NoScrollLink href="/">
                <a>Home</a>
              </NoScrollLink>
            </div>
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <NoScrollLink href="/products">
                <a>Products</a>
              </NoScrollLink>
            </div>
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <NoScrollLink href="/teams">
                <a>Teams</a>
              </NoScrollLink>
            </div>
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              {currentUser ? (
                <NoScrollLink href={`/account/${currentUser?.uid as string}`}>
                  <a>My account</a>
                </NoScrollLink>
              ) : (
                <NoScrollLink href="/login">
                  <a>Sign In</a>
                </NoScrollLink>
              )}
            </div>
            <div className="w-52 py-5 text-center mt-auto hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <NoScrollLink href="/about">
                <a>About</a>
              </NoScrollLink>
            </div>
            <div className="w-52 py-5 text-center hover:shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200">
              <NoScrollLink href="/contact">
                <a>Contact</a>
              </NoScrollLink>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default withSubscribtion(Nav);
