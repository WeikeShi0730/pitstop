import { TeamType } from "../interfaces";
import TeamBanner from "./team-banner.component";
interface TeamsType {
  teams: TeamType[];
}

const TeamsBanners = ({ teams }: TeamsType) => {
  return (
    <div className="flex flex-col justify-center relative">
      {teams.map(
        ({
          name,
          id,
          backgroundImg,
        }: {
          backgroundImg: string;
          name: string;
          id: string;
        }) => {
          return (
            <TeamBanner
              key={id}
              id={id}
              backgroundImg={backgroundImg}
              name={name}
            />
          );
        }
      )}
    </div>
  );
};

export default TeamsBanners;