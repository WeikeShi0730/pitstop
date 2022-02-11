import { TeamType } from "../interfaces";
import TeamOnTeamsPage from "./team-on-teamspage.component";
interface TeamsType {
  teams: TeamType[];
}

const TeamsOnTeamsPage = ({ teams }: TeamsType) => {
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
            <TeamOnTeamsPage
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

export default TeamsOnTeamsPage;
