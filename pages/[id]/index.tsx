import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout.component";
import TeamBackground from "../../components/team-background.component";
import ProductsList from "../../components/products-list.component";
import {
  firestoreGetTeamsDocs,
  firestoreGetTeamsDoc,
} from "../../firebase/firebase.utils";
import { TeamType, ProductType } from "../../interfaces";

interface Team {
  team: TeamType;
}

const TeamHomePage = ({ team }: Team) => {
  return (
    <Layout title={`Pitstop | ${team.name}`}>
      <div>
        <TeamBackground team={team} />
      </div>
      <div>
        <ProductsList productsList={team.productsList} />
      </div>
    </Layout>
  );
};

export default TeamHomePage;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const teams: TeamType[] = await firestoreGetTeamsDocs();
    const ids = teams.map((team) => team.name);
    const paths = ids.map((id) => ({ params: { id: id } }));
    return {
      paths,
      fallback: "blocking", //??????!?!?!??!??!!?
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id as string;
    const team: ProductType[] | TeamType = await firestoreGetTeamsDoc(id);
    return {
      props: { team },
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      props: {},
    };
  }
};
