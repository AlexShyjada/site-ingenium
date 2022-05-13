import styled from "styled-components";

interface iParagrath2Props {
  text: string;
  color?: string;
}

interface iStyledParagrath2Props {
  color?: string;
}

const StyledParagrath2 = styled.p<iStyledParagrath2Props>`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center; 
  color: ${(props) => props.color};
`;

export function Paragrath2(props: iParagrath2Props) {
  const { text, color } = props;
  return <StyledParagrath2 color={color}>{text}</StyledParagrath2>;
}
