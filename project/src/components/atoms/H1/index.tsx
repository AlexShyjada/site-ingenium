import styled from "styled-components";

interface iH1Props {
  text: string;
  color?: string;
}

interface iStyledH1Props {
  color?: string;
}

const StyledH1 = styled.h1<iStyledH1Props>`
  font-weight: 700;
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  color: ${(props) => props.color};
`;

export function H1(props: iH1Props) {
  const { text, color } = props;
  return <StyledH1 color={color}>{text}</StyledH1>;
}