import styled from "styled-components";

interface iParagrathProps {
  text: string;
  color?: string;
}

interface iStyledParagrathProps {
  color?: string;
}

const StyledParagrath = styled.p<iStyledParagrathProps>`
  font-weight: 700;
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  color: ${(props) => props.color ? props.color : "#131313"};
`;

export function Paragrath(props: iParagrathProps) {
  const { text, color } = props;
  return <StyledParagrath color={color}>{text}</StyledParagrath>;
}