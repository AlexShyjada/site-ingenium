import styled from "styled-components";

interface iParagrath3Props {
  text: string;
  color?: string;
}

interface iStyledParagrath3Props {
  color?: string;
}

const StyledParagrath3 = styled.p<iStyledParagrath3Props>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center; 
  color: ${(props) => props.color};
`;

export function Paragrath3(props: iParagrath3Props) {
  const { text, color } = props;
  return <StyledParagrath3 color={color}>{text}</StyledParagrath3>;
}
