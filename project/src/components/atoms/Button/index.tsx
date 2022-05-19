import { ReactNode } from "react";
import styled from "styled-components";

interface iButtonprops {
  icon?: ReactNode;
  text: string;
  link: string;
  color: string;
  background: string;
  height: string;
}

interface iStyledButtonProps {
  height?: string;
  color: string;
  background: string;
}

const StyledButton = styled.button<iStyledButtonProps>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    color: ${(props) => props.color};
    height: ${(props) => props.height? props.height : "" };
    line-height: 24px;
    font-family: "Inter";
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px;
    background: ${(props) => props.background};
    box-shadow: 5px 5px 16px rgba(51, 60, 103, 0.1);
  }
`;

export function Button(props: iButtonprops) {
  const { icon, text, link, color, background,  height} = props;
  return (
    <StyledButton color={color} background={background} height={height}>
      <a href={link}>
        {text}
        {icon}
      </a>
    </StyledButton>
  );
}
