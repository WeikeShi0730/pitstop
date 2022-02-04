import { Team } from "../interfaces";
import TeamOnHomepage from "./team-on-homepage.component";
interface TeamsType {
  teams: Team[];
}

const TeamsOnHomepage = ({ teams }: TeamsType) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {teams.map(
        (team: { backgroundImg: string; name: string; id: string }) => {
          return (
            <TeamOnHomepage
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

export default TeamsOnHomepage;
