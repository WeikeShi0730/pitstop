import type { NextPage, GetStaticProps } from "next";
import { firestoreGetDocs } from "../firebase/firebase.utils";
import { Teams } from "../interfaces";
import Layout from "../components/layout.component";
import TeamsOnHomepage from "../components/teams-on-homepage.component";
interface TeamsType {
  teams: Teams[];
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
    const teams: Teams[] = await firestoreGetDocs();
    return {
      props: {
        teams,
      },
    };
  } catch (error: any) {
    console.error(error.message);
    const teams: Teams[] = [];
    return {
      props: {
        teams,
      },
    };
  }
};

export default Home;
