import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
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
          <Link href="/">
            <a>
              <FiShoppingCart />
            </a>
          </Link>
        </div>
        <div className="mx-5">
          <Link href="/login">
            <a>Sign In</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
