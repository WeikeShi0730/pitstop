import { TeamType } from "../interfaces";
import TeamOnTeamsPage from "./team-on-teamspage.component";
interface TeamsType {
  teams: TeamType[];
}

const TeamsOnTeamsPage = ({ teams }: TeamsType) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {teams.map(
        (team: { backgroundImg: string; name: string; id: string }) => {
          return (
            <TeamOnTeamsPage
              key={team.name}
              id={team.id}
              backgroundImg={team.backgroundImg}
              name={team.name}
            />
          );
        }
      )}
    </div>
  );
};

export default TeamsOnTeamsPage;
