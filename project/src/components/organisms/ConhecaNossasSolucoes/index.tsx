import styled from "styled-components";
import { Solution, H2 } from "../..";

const StyledConhecaNossasSolucoes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 0px;
  gap: 60px;
`;

export function ConhecaNossasSolucoes() {

  const solution = [
    {
      id: 1,
      title: "ingDesk",
      tags: [
        {
          id: 1,
          name: "CRM"
        },
        {
          id: 1,
          name: "Omnichanel"
        }
      ],
      paragraths: [
        {
          id: 1,
          text: "Crie conexões significativas e personalizadas com seus clientes e, ao mesmo tempo, forneça resultados reais para seus negócios."
        },
        {
          id: 2,
          text: "Aqui você terá acesso de forma unificada a clientes que estão no Whatsapp, Instagram, Google Business Mensages, Telegram, LinkedIn, Twitter, e-mail e chatbot."
        }
      ],
      link: "#"
    }
  ]

  return (
    <StyledConhecaNossasSolucoes>
      <H2 text="Conheça nossas soluções"/>
      <Solution/>
    </StyledConhecaNossasSolucoes>
  )
}
