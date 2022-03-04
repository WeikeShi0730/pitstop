import Image from "next/image";
import { TeamType } from "../interfaces/index";

interface Team {
  info: TeamType;
}

const PageBackground = ({ info }: Team) => {
  const { teamBackgrounds, fullname } = info;
  const teamBackground =
    teamBackgrounds[Math.floor(Math.random() * teamBackgrounds.length)];

  return (
    <div className="relative bg-slate-50 flex p-10 shadow-2xl">
      <div className="flex relative w-full h-96 2xl:h-100">
        <Image
          // priority
          src={teamBackground}
          className="object-cover rounded-lg"
          unoptimized
          alt="background image"
          layout="fill"
        />
        <div className="w-full h-96 2xl:h-100 flex justify-center md:justify-end z-10">
          <div className="md:w-1/2 h-full flex justify-center md:justify-end items-center md:bg-gradient-to-l from-slate-50 via-slate-50">
            <div className="w-1/2 flex justify-center text-center md:text-right text-3xl text-slate-50 md:text-slate-700 bg-slate-700 p-3 rounded-lg backdrop-blur-md bg-opacity-30 md:backdrop-blur-none md:bg-opacity-100 md:bg-transparent hover:text-slate-100 hover:bg-slate-500 hover:backdrop-blur-md hover:bg-opacity-30 hover:shadow-lg md:hover:text-slate-500 md:hover:bg-transparent md:hover:backdrop-blur-none md:hover:bg-opacity-100 md:hover:shadow-none ">
              {fullname}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBackground;
