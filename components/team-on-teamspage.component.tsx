import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imgLoader } from "./image-loader";
interface TeamOnTeamsPageType {
  key: string;
  id: string;
  backgroundImg: string;
  name: string;
}

const TeamOnTeamsPage = ({ backgroundImg, name, id }: TeamOnTeamsPageType) => {
  // const backfaceInvisible = {
  //   backfaceVisibility: "hidden",
  // } as const;

  // const DIV = styled.div`
  //   -webkit-backface-visibility: hidden; /* the magic ingredient */
  //   -webkit-transform: skew(0, -12deg);
  //   overflow: hidden;
  //   position: relative;
  // `;

  // const DIV2 = styled.div`
  //   -webkit-transform: skew(0, 12deg);
  //   position: relative;
  // `;

  return (
    // h ????????????
    // <div className="relative w-full h-72 m-5 rounded-large hover:shadow-2xl shadow-black">
    <div className="relative w-full h-24">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        loader={imgLoader}
        unoptimized
        src={backgroundImg}
        alt={`${name} background image`}
        layout="fill"
      />
      <div className="flex justify-center items-center absolute w-full h-full opacity-0 hover:opacity-100 hover:backdrop-blur-sm">
        <Link href={`/${id}`}>
          <a className="bg-slate-700 text-slate-200 w-1/4 p-3 text-center rounded-md shadow-slate-700 shadow-md">
            Shop {name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamOnTeamsPage;
