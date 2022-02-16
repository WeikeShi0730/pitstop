import Image from "next/image";
import { TeamType } from "../interfaces/index";

interface Team {
  team: TeamType;
}

const TeamBackground = ({ team }: Team) => {
  const { photos, fullname } = team;
  const photo = photos[Math.floor(Math.random() * photos.length)];

  return (
    <div className="relative bg-slate-50 flex p-10 shadow-2xl">
      <div className="text-3xl text-slate-50 bg-slate-700 p-5 rounded-lg backdrop-blur-md bg-opacity-30 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {fullname}
      </div>
      <div className="relative w-full h-96">
        <Image
          // priority
          src={photo}
          //   src="/team backgrounds/williams/2.jpeg"
          className="object-cover rounded-lg"
          unoptimized
          alt="background image"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default TeamBackground;