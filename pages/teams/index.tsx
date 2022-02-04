import type { GetStaticProps } from "next";
import { firestoreGetDocs } from "../../firebase/firebase.utils";
import { Team } from "../../interfaces";
import Layout from "../../components/layout.component";
import TeamsOnTeamsPage from "../../components/teams-on-teamspage.component";
interface TeamsType {
  teams: Team[];
}

const TeamsPage = ({ teams }: TeamsType) => {
  return (
    <Layout title="Pitstop | Home">
      <TeamsOnTeamsPage teams={teams} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const teams: Team[] = await firestoreGetDocs();
    return {
      props: {
        teams,
      },
    };
  } catch (error: any) {
    console.error(error.message);
    const teams: Team[] = [];
    return {
      props: {
        teams,
      },
    };
  }
};

export default TeamsPage;
