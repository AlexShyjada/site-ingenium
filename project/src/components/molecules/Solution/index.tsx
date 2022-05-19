import Image from "next/image";
import styled from "styled-components";
import { Button, Paragrath } from "../..";
import { H3 } from "../../atoms/H3";
import { Tag } from "../../atoms/Tag";

interface iSolutionProps {
  id: number;
  title: string;
  tags: {
    id: number;
    name: string;
  }[];
  paragraths: {
    id: number;
    text: string;
  }[];
  link: string;
}

interface iStyledSolutionProps {
  isFlexReverse: number;
}

const StyledSolution = styled.div<iStyledSolutionProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  gap: 10px;
  background: ${(props) => props.isFlexReverse % 2 == 0? "#455CC7" : "#FFFFFF"};
  .container {
    align-items: center;
    flex-direction: ${(props) => props.isFlexReverse % 2 == 0? "row-reverse" : "row"};
    padding: 0px;
    gap: 48px;
    .textcontainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;
      max-width: 588px;
      .titleContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .tagContainer {
          display: flex;
          gap: 1rem;
        }
      }
    }
  }
`;

export function Solution(props: iSolutionProps) {
  const { title, tags, paragraths, link, id } = props;

  return (
    <StyledSolution isFlexReverse={id}>
      <div className="container">
        <div className="textcontainer">
          <div className="titleContainer">
            <H3 text={title} />
            <div className="tagContainer">
              {tags.map((tag) => (
                <Tag key={tag.id} text={tag.name} />
              ))}
            </div>
          </div>

          {paragraths.map((paragrath) => (
            <Paragrath key={paragrath.id} text={paragrath.text} />
          ))}
          <Button
            text="Saiba mais"
            link={link}
            background={id % 2 == 0 ? "#FFFFFF" : "#455CC7"}
            color={id % 2 == 0 ? "#455CC7" : "#FFFFFF"}
          />
        </div>

        <Image
          src="/NossasSolucoes/placeHolder.png"
          alt="Placeholder"
          width={588}
          height={537}
        />
      </div>
    </StyledSolution>
  );
}
