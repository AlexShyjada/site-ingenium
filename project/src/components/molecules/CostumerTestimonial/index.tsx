import Image from "next/image";
import styled from "styled-components";
import { H4, Paragrath3 } from "../..";

interface iCostumerTestimonial {
  name: string;
  role: string;
  paragraths: {
    id: number;
    text: string;
  }[];
  img: string;
}

const StyledCostumerTestimonial = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  background: #ffffff;
  box-shadow: 5px 5px 16px rgba(51, 60, 103, 0.1);
  border-radius: 8px;
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
  }
  .testimonial{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      text-align: left;
    }
  }
`;

export function CostumerTestimonial(props: iCostumerTestimonial) {
  const { name, role, paragraths, img } = props;

  return (
    <StyledCostumerTestimonial>
      <div className="user">
        <Image
          src={img}
          alt={name}
          width={50}
          height={50}
        />
        <div className="nameAndRole">
          <H4 text="Lorem ipsum" />
          <span>{role}</span>
        </div>
      </div>

      <div className="testimonial">
        {paragraths.map((paragrath) => (
          <Paragrath3 key={paragrath.id} text={paragrath.text} color="#757575"/>
        ))}
      </div>
    </StyledCostumerTestimonial>
  );
}
