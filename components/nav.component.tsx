import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./cart-icon.component";
import { auth, subscribeToAuthState } from "../firebase/firebase.utils";
import { CurrentUserType } from "../interfaces";

const Nav = () => {
  const [currentUser, setCurrentUser] = useState<
    CurrentUserType["currentUser"]
  >(auth.currentUser as CurrentUserType["currentUser"]);

  useEffect(() => {
    const subscribe = subscribeToAuthState(
      (user: CurrentUserType["currentUser"]) => {
        setCurrentUser(user);
      }
    );
    return () => subscribe();
  });

  return (
    <nav>
      <div className="bg-slate-700 text-slate-200 flex items-center p-2">
        <Link href="/">
          <a>
            <div className="relative w-48 h-16 mx-10">
              <Image
                priority
                src="/pitstop.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
        <div className="mx-5">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="mx-5">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className="mx-5">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="mx-5 ml-auto">
          {/* <Link href="/">
            <a> */}
              <CartIcon currentUser={currentUser} />
            {/* </a>
          </Link> */}
        </div>
        <div className="mx-5">
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
      </div>
    </nav>
  );
};

export default Nav;
