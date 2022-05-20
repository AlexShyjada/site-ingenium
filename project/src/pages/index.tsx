import type { NextPage } from "next";
import {
  ConhecaNossasSolucoes,
  NossosResultados,
  Depoimentos,
  AgendeUmaDemonstracao,
  Footer,
  Hero,
  Header,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <NossosResultados />
      <ConhecaNossasSolucoes />
      <Depoimentos />
      <AgendeUmaDemonstracao />
      <Footer/>
    </>
  );
};

export default Home;
