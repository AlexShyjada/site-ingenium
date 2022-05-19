import styled from "styled-components";

interface iH4Props {
  text: string;
  color?: string;
}

interface iStyledH4Props {
  color?: string;
}

const StyledH4 = styled.h4<iStyledH4Props>`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.color ? props.color : "#455CC7"};
`;

export function H4(props: iH4Props) {
  const { text, color } = props;
  return <StyledH4 color={color}>{text}</StyledH4>;
}