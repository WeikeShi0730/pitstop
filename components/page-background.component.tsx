import Image from "next/image";
import { TeamType } from "../interfaces/index";

interface Team {
  team: TeamType;
}

const PageBackground = ({ team }: Team) => {
  const { photos, fullname } = team;
  const photo = photos[Math.floor(Math.random() * photos.length)];

  return (
    <div className="relative bg-slate-50 flex p-10 shadow-2xl">
      <div className="text-center text-3xl text-slate-50 bg-slate-700 p-5 rounded-lg backdrop-blur-md bg-opacity-30 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-inner hover:text-slate-200 hover:bg-slate-500 hover:backdrop-blur-md hover:bg-opacity-30 hover:shadow-lg">
        {fullname}
      </div>
      <div className="relative w-full h-96">
        <Image
          // priority
          src={photo}
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
