import styled from "styled-components";

interface iH2Props {
  text: string;
  color?: string;
}

interface iStyledH2Props {
  color?: string;
}

const StyledH2 = styled.h1<iStyledH2Props>`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#455CC7")};
`;

export function H2(props: iH2Props) {
  const { text, color } = props;

  return <StyledH2 color={color}>{text}</StyledH2>;
}
