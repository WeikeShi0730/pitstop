import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
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
      <div className="bg-slate-700 text-slate-200 flex items-center p-2 h-20">
        <Link href="/">
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
        </Link>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          <Link href="/products">
            <a>Products</a>
          </Link>
        </div>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          <SearchBar />
        </div>
        <div className="mx-5 ml-auto flex hover:underline-primary hover:underline-offset-4">
          <CartIcon cartItems={cartItems} />
        </div>
        <div className="mx-5 hidden lg:flex hover:underline-primary hover:underline-offset-4">
          {currentUser ? (
            <Link href={`/account/${currentUser?.uid as string}`}>
              <a>{currentUser.displayName}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          )}
        </div>
        <div className="flex items-center justify-between lg:hidden mx-5">
          <button
            onClick={handleOnClick}
            className="flex h-6 w-6 items-center space-x-2 focus:outline-none"
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
          open
            ? "absolute w-full -z-50 top-0 h-screen backdrop-brightness-75 backdrop-blur-sm"
            : ""
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
            <div className="w-52 py-5 text-center">
              <SearchBar />
            </div>
            <div className="w-52 py-5 text-center">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className="w-52 py-5 text-center">
              <Link href="/products">
                <a>Products</a>
              </Link>
            </div>
            <div className="w-52 py-5 text-center">
              <Link href="/teams">
                <a>Teams</a>
              </Link>
            </div>
            <div className="w-52 py-5 text-center">
              {currentUser ? (
                <Link href={`/account/${currentUser?.uid as string}`}>
                  <a>My account</a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>Sign In</a>
                </Link>
              )}
            </div>
            <div className="w-52 py-5 text-center mt-auto">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default withSubscribtion(Nav);
