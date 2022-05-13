import styled from "styled-components"

interface iH2Props {
  text: string;
  color: string;
}

interface iStyledH2Props {
  color: string;
}

const StyledH3 = styled.h3<iStyledH2Props>`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: ${(props) => props.color ? props.color : "#455CC7"};
`

export function H3(props: iH2Props) {
  const { text, color } = props;
  return (
    <StyledH3 color={color}>{text}</StyledH3>
  )
}
