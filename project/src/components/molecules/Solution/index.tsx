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
            <H3 text={title} color={ id%2 == 0? "#FFF" : "#455CC7"}/>
            <div className="tagContainer">
              {tags.map((tag) => (
                <Tag key={tag.id} text={tag.name} />
              ))}
            </div>
          </div>

          {paragraths.map((paragrath) => (
            <Paragrath key={paragrath.id} text={paragrath.text} color={id%2 == 0? "#FFFFFF99" : "#474747" } />
          ))}
          <Button
            text="Saiba mais"
            link={link}
            height="40px"
            background={id % 2 == 0 ? "#FFFFFF" : "#455CC7"}
            color={id % 2 == 0 ? "#455CC7" : "#FFFFFF"}
            icon={
              id%2 ? 
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 19.3201C14.2401 19.3201 14.0501 19.2501 13.9001 19.1001C13.6101 18.8101 13.6101 18.3301 13.9001 18.0401L19.4401 12.5001L13.9001 6.96012C13.6101 6.67012 13.6101 6.19012 13.9001 5.90012C14.1901 5.61012 14.6701 5.61012 14.9601 5.90012L21.0301 11.9701C21.3201 12.2601 21.3201 12.7401 21.0301 13.0301L14.9601 19.1001C14.8101 19.2501 14.6201 19.3201 14.4301 19.3201Z" fill="white"/>
                <path d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75H20.33C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z" fill="white"/>
              </svg> :

              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 19.3201C14.2401 19.3201 14.0501 19.2501 13.9001 19.1001C13.6101 18.8101 13.6101 18.3301 13.9001 18.0401L19.4401 12.5001L13.9001 6.96012C13.6101 6.67012 13.6101 6.19012 13.9001 5.90012C14.1901 5.61012 14.6701 5.61012 14.9601 5.90012L21.0301 11.9701C21.3201 12.2601 21.3201 12.7401 21.0301 13.0301L14.9601 19.1001C14.8101 19.2501 14.6201 19.3201 14.4301 19.3201Z" fill="#455CC7"/>
                <path d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75H20.33C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z" fill="#455CC7"/>
              </svg>
            }
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
