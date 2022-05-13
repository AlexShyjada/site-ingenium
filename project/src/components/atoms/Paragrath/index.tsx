import styled from "styled-components";

interface iParagrathProps {
  text: string;
  color?: string;
}

interface iStyledParagrathProps {
  color?: string;
}

const StyledParagrath = styled.h1<iStyledParagrathProps>`
  font-weight: 700;
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  color: ${(props) => props.color ? props.color : "#131313"};
`;

export function H1(props: iParagrathProps) {
  const { text, color } = props;
  return <StyledParagrath color={color}>{text}</StyledParagrath>;
}