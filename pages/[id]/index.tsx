import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout.component";
import ProductsList from "../../components/products-list.component";
import {
  firestoreGetDocs,
  firestoreGetDoc,
} from "../../firebase/firebase.utils";
import { TeamType } from "../../interfaces";

interface Team {
  team: TeamType;
}

const TeamHomePage = ({ team }: Team) => {
  console.log(team);
  return (
    <Layout title={`Pitstop | ${team.name}`}>
      <ProductsList productsList={team.productsList} />
    </Layout>
  );
};

export default TeamHomePage;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const teams: TeamType[] = await firestoreGetDocs();
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
    const team: TeamType = await firestoreGetDoc(id);
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

// export const getStaticProps: GetStaticProps = async () => {
//     try {
//       const teams: Teams[] = await firestoreGetDocs();
//       return {
//         props: {
//           teams,
//         },
//       };
//     } catch (error: any) {
//       console.error(error.message);
//       const teams: Teams[] = [];
//       return {
//         props: {
//           teams,
//         },
//       };
//     }
//   };
