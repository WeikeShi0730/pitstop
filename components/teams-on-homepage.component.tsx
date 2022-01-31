import { Teams } from "../interfaces";
import TeamOnHomepage from "./team-on-homepage.component";
interface TeamsType {
  teams: Teams[];
}

const TeamsOnHomepage = ({ teams }: TeamsType) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {teams.map((team: { backgroundImg: string; name: string }) => (
        <TeamOnHomepage
          key={team.name}
          backgroundImg={team.backgroundImg}
          name={team.name}
        />
      ))}
    </div>
  );
};

export default TeamsOnHomepage;
