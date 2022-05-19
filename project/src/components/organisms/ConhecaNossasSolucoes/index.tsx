import styled from "styled-components";
import { Solution, H2 } from "../..";

const StyledConhecaNossasSolucoes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 0px;
  gap: 60px;
  .solutionContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export function ConhecaNossasSolucoes() {
  const solution = [
    {
      id: 1,
      title: "ingDesk",
      tags: [
        {
          id: 1,
          name: "CRM",
        },
        {
          id: 2,
          name: "Omnichanel",
        },
      ],
      paragraths: [
        {
          id: 1,
          text: "Crie conexões significativas e personalizadas com seus clientes e, ao mesmo tempo, forneça resultados reais para seus negócios.",
        },
        {
          id: 2,
          text: "Aqui você terá acesso de forma unificada a clientes que estão no Whatsapp, Instagram, Google Business Mensages, Telegram, LinkedIn, Twitter, e-mail e chatbot.",
        },
      ],
      link: "#",
    },
    {
      id: 2,
      title: "Genium",
      tags: [
        {
          id: 1,
          name: "Relatórios",
        },
      ],
      paragraths: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum urna eleifend tortor pellentesque nibh urna dui. Cursus leo tortor egestas fringilla in amet porttitor faucibus.",
        },
        {
          id: 2,
          text: "Sit quis ornare aenean maecenas vitae aliquam at magna. Tristique ut mauris purus imperdiet. Commodo fringilla porta vitae fames ut elementum risus neque facilisi.",
        },
      ],
      link: "#",
    },
    {
      id: 3,
      title: "IngCorp",
      tags: [
        {
          id: 1,
          name: "Lorem ipsum",
        },
      ],
      paragraths: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum urna eleifend tortor pellentesque nibh urna dui. Cursus leo tortor egestas fringilla in amet porttitor faucibus.",
        },
        {
          id: 2,
          text: "Sit quis ornare aenean maecenas vitae aliquam at magna. Tristique ut mauris purus imperdiet. Commodo fringilla porta vitae fames ut elementum risus neque facilisi.",
        },
      ],
      link: "#",
    },
  ];

  return (
    <StyledConhecaNossasSolucoes>
      <H2 text="Conheça nossas soluções" />
      <div className="solutionContainer">
        {solution.map((solution) => (
          <Solution
            key={solution.id}
            id={solution.id}
            title={solution.title}
            tags={solution.tags}
            paragraths={solution.paragraths}
            link={solution.link}
          />
        ))}
      </div>
    </StyledConhecaNossasSolucoes>
  );
}
