import styled from "styled-components";

interface iTagProps {
  text: string;
}

const StyledTag = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  background: #ebf2ff;
  border-radius: 2.4rem;
  color: #455cc7;
`;

export function Tag(props: iTagProps) {
  const { text } = props;
  return <StyledTag>{text}</StyledTag>;
}
