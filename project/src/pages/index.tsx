import type { NextPage } from "next";
import {
  ConhecaNossasSolucoes,
  NossosResultados,
  Depoimentos,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <NossosResultados />
      <ConhecaNossasSolucoes />
      <Depoimentos />
    </>
  );
};

export default Home;
