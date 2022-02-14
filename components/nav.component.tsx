import Link from "next/link";
import Image from "next/image";
import CartIcon from "./cart-icon.component";
import { CurrentUserType, CartItemType } from "../interfaces";
import withSubscribtion from "./hoc.component";

interface UserAndCart {
  currentUser: CurrentUserType["currentUser"];
  cartItems: CartItemType[];
}

const Nav = ({ currentUser, cartItems }: UserAndCart) => {
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
        <div className="mx-5 hover:underline decoration-orange-theme underline-offset-4 decoration-1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="mx-5 hover:underline decoration-orange-theme underline-offset-4 decoration-1">
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </div>
        <div className="mx-5 hover:underline decoration-orange-theme underline-offset-4 decoration-1">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="mx-5 ml-auto hover:underline decoration-orange-theme underline-offset-4 decoration-1">
          <CartIcon cartItems={cartItems} />
        </div>
        <div className="mx-5 hover:underline decoration-orange-theme underline-offset-4 decoration-1">
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

export default withSubscribtion(Nav);
