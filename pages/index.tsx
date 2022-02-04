import type { GetStaticProps } from "next";
import { firestoreGetDocs } from "../firebase/firebase.utils";
import { Team } from "../interfaces";
import Layout from "../components/layout.component";
import TeamsOnHomepage from "../components/teams-on-homepage.component";
interface TeamsType {
  teams: Team[];
}

const Home = ({ teams }: TeamsType) => {
  return (
    <Layout title="Pitstop | Home">
      <TeamsOnHomepage teams={teams} />
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

export default Home;
