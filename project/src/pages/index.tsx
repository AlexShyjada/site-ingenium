import type { NextPage } from "next";
import {
  ConhecaNossasSolucoes,
  NossosResultados,
  Depoimentos,
  AgendeUmaDemonstracao,
  Footer,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <NossosResultados />
      <ConhecaNossasSolucoes />
      <Depoimentos />
      <AgendeUmaDemonstracao />
      <Footer/>
    </>
  );
};

export default Home;
