import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { imgLoader } from "../utils/image-loader";
import Tilt from "react-parallax-tilt";
interface TeamOnTeamsPageType {
  id: string;
  backgroundImg: string;
  name: string;
}

const TeamBanner = ({ backgroundImg, name, id }: TeamOnTeamsPageType) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div className="relative w-full h-32 rounded-lg my-3 hover:h-36 hover:scale-105 hover:z-10 transition-all duration-200 ease-in-out">
        <Image
          className="object-cover rounded-md"
          loader={imgLoader}
          unoptimized
          src={backgroundImg}
          alt={`${name} background image`}
          layout="fill"
        />
        <div className="flex justify-center items-center absolute w-full h-full opacity-0 hover:opacity-95 hover:backdrop-blur-sm rounded-md">
          <Link href={`/${id}`}>
            <a className="bg-slate-700 text-slate-50 w-48 p-3 text-center rounded-md shadow-slate-700 shadow-md hover:bg-slate-600 hover:text-white">
              Shop {name}
            </a>
          </Link>
        </div>
      </div>
    </Tilt>
  );
};

export default TeamBanner;
