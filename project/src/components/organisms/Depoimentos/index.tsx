import styled from "styled-components";
import { H3 } from "../..";
import { CostumerTestimonial } from "../../molecules/CostumerTestimonial";

const StyledDepoimentos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  gap: 60px;
  background: #f4f4f4;

  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
    .subtitle {
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: #757575;
    }
  }
  .depoimentoContainer {
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
  }
`;

export function Depoimentos() {
  const CostumerTestimonialContent = [
    {
      id: 1,
      name: "Lorem Ipsum",
      role: "Diretor de vendas",
      image: "/Depoimentos/user1.png",
      paragraths: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus iaculis pellentesque scelerisque semper eu. Feugiat erat dolor eleifend faucibus fermentum, vitae aenean cras pretium. Nisi laoreet dui aliquet vitae augue. Nullam hendrerit nunc amet consectetur.",
        },
        {
          id: 2,
          text: "Lectus commodo quis gravida eu nulla pellentesque. Purus at aliquam nunc sed leo amet dolor scelerisque.",
        },
      ],
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      role: "Diretor de vendas",
      image: "/Depoimentos/user2.png",
      paragraths: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus iaculis pellentesque scelerisque semper eu. Feugiat erat dolor eleifend faucibus fermentum, vitae aenean cras pretium. Nisi laoreet dui aliquet vitae augue. Nullam hendrerit nunc amet consectetur.",
        },
        {
          id: 2,
          text: "Lectus commodo quis gravida eu nulla pellentesque. Purus at aliquam nunc sed leo amet dolor scelerisque.",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus iaculis pellentesque scelerisque semper eu.",
        },
      ],
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      role: "Diretor de vendas",
      image: "/Depoimentos/user3.png",
      paragraths: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus iaculis pellentesque scelerisque semper eu. Feugiat erat dolor eleifend faucibus fermentum, vitae aenean cras pretium. Nisi laoreet dui aliquet vitae augue. Nullam hendrerit nunc amet consectetur.",
        },
        {
          id: 2,
          text: "Lectus commodo quis gravida eu nulla pellentesque. Purus at aliquam nunc sed leo amet dolor scelerisque.",
        },
      ],
    },
  ];

  return (
    <StyledDepoimentos>
      <div className="titleContainer">
        <span className="subtitle">Lorem ipsum</span>
        <H3 text="O que nossos clientes falam de nós" />
      </div>
      <div className="depoimentoContainer container">
        {CostumerTestimonialContent.map((item) => (
          <CostumerTestimonial
            key={item.id}
            name={item.name}
            role={item.role}
            paragraths={item.paragraths}
            img={item.image}
          />
        ))}
      </div>
    </StyledDepoimentos>
  );
}
