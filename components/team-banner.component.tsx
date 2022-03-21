import { useEffect, useRef } from "react";
import NoScrollLink from "./no-scroll-link.component";
import Image from "next/image";
import { imgLoader } from "../utils/image-loader";
import VanillaTilt from "vanilla-tilt";
interface TeamOnTeamsPageType {
  id: string;
  backgroundImg: string;
  name: string;
}

const Tilt = ({
  options,
  children,
  ...otherProps
}: {
  options: {
    scale: number;
    speed: number;
    max: number;
  };
  children: React.ReactNode;
}) => {
  const tilt = useRef<HTMLDivElement>(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current as HTMLDivElement, options);
  }, [options]);

  return (
    <div ref={tilt} {...otherProps}>
      {children}
    </div>
  );
};

const TeamBanner = ({ backgroundImg, name, id }: TeamOnTeamsPageType) => {
  const options = {
    scale: 1.1,
    speed: 500,
    max: 10,
  };
  return (
    <Tilt options={options}>
      <div className="relative w-full h-32 rounded-lg my-3 transition-all duration-200 ease-in-out">
        <Image
          priority
          className="object-cover rounded-md"
          loader={imgLoader}
          unoptimized
          src={backgroundImg}
          alt={`${name} background image`}
          layout="fill"
        />
        <div className="flex justify-center items-center absolute w-full h-full opacity-0 hover:opacity-95 hover:backdrop-blur-sm rounded-md">
          <NoScrollLink href={`/${id}`}>
            <a className="bg-slate-700 text-slate-100 w-48 p-3 text-center rounded-md shadow-slate-700 shadow-md hover:bg-slate-600 hover:text-white transition-all ease-in-out duration-200">
              Shop {name}
            </a>
          </NoScrollLink>
        </div>
      </div>
    </Tilt>
  );
};

export default TeamBanner;
