import { TeamType } from "../interfaces";
import TeamBanner from "./team-banner.component";
interface TeamsType {
  teams: TeamType[];
}

const TeamsBanners = ({ teams }: TeamsType) => {
  return (
    <div className="flex flex-col justify-center m-auto p-10 relative w-4/5">
      {/* <div className=""> */}
      {teams.map((team) => {
        return (
          <TeamBanner
            key={team.id}
            id={team.id!}
            backgroundImg={team.backgroundImg!}
            name={team.name!}
          />
        );
      })}
    </div>
  );
};

export default TeamsBanners;
