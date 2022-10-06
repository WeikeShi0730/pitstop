import Image from "next/image";
import NoScrollLink from "./no-scroll-link.component";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiAmericanexpress,
  SiVisa,
  SiMastercard,
  SiStripe,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-slate-700 text-slate-100 gap-y-10 pb-20 lg:pb-0 bg-opacity-90 text-sm md:text-base">
      <div className="logo flex justify-center mt-10">
        <div className="relative w-48 h-16 mx-10">
          <Image
            priority
            src="/pitstop-logos/pitstop.WebP"
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
        <NoScrollLink href="/">
          <a className="link-underline link-underline:hover">
            Home
          </a>
        </NoScrollLink>
        <NoScrollLink href="/teams">
          <a className="link-underline link-underline:hover">
            Teams
          </a>
        </NoScrollLink>
        <NoScrollLink href="/contact">
          <a className="link-underline link-underline:hover">
            Contact
          </a>
        </NoScrollLink>
        <NoScrollLink href="/about">
          <a className="link-underline link-underline:hover">
            About
          </a>
        </NoScrollLink>
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
