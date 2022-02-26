import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiAmericanexpress,
  SiVisa,
  SiMastercard,
  SiStripe,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-slate-700 text-slate-50 gap-y-10 bg-opacity-90 backdrop-blur-md shadow-2xl">
      <div className="logo flex justify-center mt-10">
        <div className="relative w-48 h-16 mx-10">
          <Image
            priority
            src="/pitstop-logos/pitstop.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="social-media flex justify-center gap-10">
        <div>
          <a
            target="_blank"
            href="https://github.com/WeikeShi0730"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/weike-shi/"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://twitter.com/vicshi97"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
      <div className="links flex justify-center gap-8">
        <Link href="/">
          <a className="hover:underline decoration-orange-theme underline-offset-4 decoration-1">
            Home
          </a>
        </Link>
        <Link href="/teams">
          <a className="hover:underline decoration-orange-theme underline-offset-4 decoration-1">
            Teams
          </a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline decoration-orange-theme underline-offset-4 decoration-1">
            Contact
          </a>
        </Link>
        <Link href="/about">
          <a className="hover:underline decoration-orange-theme underline-offset-4 decoration-1">
            About
          </a>
        </Link>
      </div>
      <div className="cards flex flex-col items-center justify-center">
        <div className="m-1">Supported payment systems</div>
        <div className="flex justify-start m-1 gap-2">
          <div className="text-2xl">
            <SiVisa />
          </div>
          <div className="text-2xl">
            <SiMastercard />
          </div>
          <div className="text-2xl">
            <SiAmericanexpress />
          </div>
          <div className="text-2xl">
            <SiStripe />
          </div>
        </div>
      </div>
      <div className="rights flex justify-center items-center gap-4 mb-10">
        <p>™ 2022 Pitstop, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
