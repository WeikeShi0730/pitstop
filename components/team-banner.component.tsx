import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { imgLoader } from "./image-loader";
interface TeamOnTeamsPageType {
  key: string;
  id: string;
  backgroundImg: string;
  name: string;
}

const TeamBanner = ({ backgroundImg, name, id }: TeamOnTeamsPageType) => {
  return (
    // h ????????????
    // <div className="relative w-full h-72 m-5 rounded-large hover:shadow-2xl shadow-black">
    <div className="relative w-full h-24">
      <Image
        className="object-cover"
        loader={imgLoader}
        unoptimized
        src={backgroundImg}
        alt={`${name} background image`}
        layout="fill"
      />
      <div className="flex justify-center items-center absolute w-full h-full opacity-0 hover:opacity-95 hover:backdrop-blur-sm">
        <Link href={`/${id}`}>
          <a className="bg-slate-700 text-slate-200 w-1/4 p-3 text-center rounded-md shadow-slate-700 shadow-md hover:bg-slate-600 hover:text-slate-50">
            Shop {name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamBanner;