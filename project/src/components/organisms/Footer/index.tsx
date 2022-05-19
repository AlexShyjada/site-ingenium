import styled from "styled-components";
import { Paragrath3 } from "../..";

const StyledFooter = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #455cc7;
`;

export function Footer() {
  return (
    <StyledFooter>
      <Paragrath3
        text="Copyright © 2022 - Todos os direitos reservados a Ingenium Systems"
        color="#FFFFFF"
      />
    </StyledFooter>
  );
}
