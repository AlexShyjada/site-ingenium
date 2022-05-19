import { ReactNode } from "react";
import styled from "styled-components";

interface iButtonprops {
  icon?: ReactNode;
  text: string;
  link: string;
  color: string;
  background: string;
}

interface iStyledButtonProps {
  color: string;
  background: string;
}

const StyledButton = styled.button<iStyledButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 12px;
  box-shadow: 5px 5px 16px rgba(51, 60, 103, 0.1);
  border-radius: 5px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;

export function Button(props: iButtonprops) {
  const { icon, text, link, color, background } = props;
  return (
    <StyledButton color={color} background={background}>
      <a href={link}>
        {text}
        {icon}
      </a>
    </StyledButton>
  );
}
