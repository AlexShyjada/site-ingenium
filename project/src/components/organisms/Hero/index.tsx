import Image from "next/image";
import styled from "styled-components";
import { H1, Paragrath } from "../..";

const StyledHero = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
  gap: 10px;
  background-image: url("/Hero/hero-1920-1080.png");
  background-color: #F4F4F4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    width: 100%;
    max-width: 543px;
  }
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 80px;
    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`;

export function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <div className="textContainer">
          <H1 text={`Nós somos a Ingenium Systems`} color="#455CC7" />
          <Paragrath
            text="Soluções focadas em Atendimento Ominichanel, CRM e Relatórios"
            color="#757575"
          />
        </div>
        <Image src="/Hero/previa.png" alt="Preview" width={1016} height={635} />
      </div>
    </StyledHero>
  );
}
