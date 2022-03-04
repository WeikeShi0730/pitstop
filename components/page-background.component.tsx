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
      {fullname && (
        <div className="text-center text-3xl text-slate-50 bg-slate-700 p-5 rounded-lg backdrop-blur-md bg-opacity-30 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-inner hover:text-slate-200 hover:bg-slate-500 hover:backdrop-blur-md hover:bg-opacity-30 hover:shadow-lg">
          {fullname}
        </div>
      )}
      <div className="relative w-full h-96 2xl:h-100">
        <Image
          // priority
          src={teamBackground}
          className="object-cover rounded-lg"
          unoptimized
          alt="background image"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PageBackground;
