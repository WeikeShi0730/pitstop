import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./cart-icon.component";
import { CurrentUserType, CartItemType } from "../interfaces";
import withSubscribtion from "./hoc.component";

interface UserAndCart {
  currentUser: CurrentUserType["currentUser"];
  cartItems: CartItemType[] | null;
}

const Nav = ({ currentUser, cartItems }: UserAndCart) => {
  const [open, setOpen] = useState(false);
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };

  const underlineStyle =
    "hover:underline decoration-orange-theme underline-offset-4 decoration-1";
  const hamburgerStyle = "transform transition w-full h-px bg-current absolute";

  return (
    <nav>
      <div className="bg-slate-700 text-slate-200 flex items-center p-2 h-auto">
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
        <div className={`mx-5 hidden md:flex ${underlineStyle}`}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={`mx-5 hidden md:flex ${underlineStyle}`}>
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className={`mx-5 flex ml-auto ${underlineStyle}`}>
          <CartIcon cartItems={cartItems} />
        </div>
        <div className={`mx-5 hidden md:flex ${underlineStyle}`}>
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
        <div className="flex items-center justify-between md:hidden mx-5">
          <button
            onClick={handleOnClick}
            className="flex h-6 w-6 items-center space-x-2 focus:outline-none"
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={`${hamburgerStyle} ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`${hamburgerStyle} ${
                  open ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>
              <span
                className={`${hamburgerStyle} ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "w-48 bg-opacity-80 backdrop-blur-md" : "w-0"
        } absolute right-0 flex flex-col overflow-x-hidden divide-y divide-slate-400 bg-slate-100 text-slate-700 h-screen transform-gpu transition-all duration-200 ease-in-out`}
      >
        <div className="w-full py-5 text-center">
          <Link href="/">
            <a className="w-48">Home</a>
          </Link>
        </div>
        <div className="w-full py-5 text-center">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className="w-full py-5 text-center">
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
      </div>
    </nav>
  );
};

export default withSubscribtion(Nav);
