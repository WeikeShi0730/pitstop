import type { GetStaticProps } from "next";
import { firestoreGetTeamsDocs } from "../../firebase/firebase.utils";
import { TeamType } from "../../interfaces";
import Layout from "../../components/layout.component";
import TeamsBanners from "../../components/teams-banners.component";
interface TeamsType {
  teams: TeamType[];
}

const TeamsPage = ({ teams }: TeamsType) => {
  return (
    <Layout title="Pitstop | Teams">
      <TeamsBanners teams={teams} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const teams: TeamsType["teams"] = await firestoreGetTeamsDocs();
    return {
      props: {
        teams,
      },
    };
  } catch (error: any) {
    console.error(error.message);
    const teams: TeamsType["teams"] = [];
    return {
      props: {
        teams,
      },
    };
  }
};

export default TeamsPage;
