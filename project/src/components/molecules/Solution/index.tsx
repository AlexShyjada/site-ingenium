import Image from "next/image";
import styled from "styled-components";
import { Paragrath } from "../..";
import { H3 } from "../../atoms/H3";
import { Tag } from "../../atoms/Tag";

const StyledSolution = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.6);
  .container {
    align-items: center;
    padding: 0px;
    gap: 48px;
    .textcontainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;
      max-width: 588px;
    }
  }
`;

export function Solution() {
  return (
    <StyledSolution>
      <div className="container">
        <div className="textcontainer">
          <div className="titleContainer">
            <H3 text="ingDesk" />
            <Tag text="CRM" />
          </div>

          <Paragrath
            text="Crie conexões significativas e personalizadas com seus clientes e,
            ao mesmo tempo, forneça resultados reais para seus negócios."
          />

          <Paragrath
            text="Aqui você terá acesso de forma unificada a clientes que estão no
            Whatsapp, Instagram, Google Business Mensages, Telegram, LinkedIn,
            Twitter, e-mail e chatbot."
          />
        </div>

        <Image
          src="/NossasSolucoes/placeHolder.png"
          alt="Placeholder"
          width={588}
          height={537}
        />
      </div>
    </StyledSolution>
  );
}
