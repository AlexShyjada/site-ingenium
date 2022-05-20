import React from 'react'
import styled from 'styled-components'
import { H1 } from '../../atoms/H1'
import { H2 } from '../../atoms/H2'
import { Paragrath2 } from '../../atoms/Paragrath2'

const StyledNossosResultados = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 60px;
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 48px 24px;
      gap: 24px;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 5px 5px 16px rgba(51, 60, 103, 0.1);
      border-radius: 16px;
      .textContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`

export function NossosResultados() {

  const resultados = [
    {
      id: 1,
      title: "+350mil",
      description: "Mensagens enviadas por dia",
    },
    {
      id: 2,
      title: "+5mil",
      description: "Pessoas impactadas",
    },
    {
      id: 3,
      title: "+10mil",
      description: "Mensagens enviadas por dia",
    },
  ]


  return (
    <StyledNossosResultados id="Nossos Resultados">
      <div className="container">
        <H2 text="Nossos Resultados"/>
        <div className="info">
          {resultados.map((resultado) => (
            <div key={resultado.id} className="textContainer">
              <H1 color="#455CC7" text={resultado.title}/>
              <Paragrath2 color="#131313" text={resultado.description}/>
            </div>
          ))}
        </div>
      </div>
    </StyledNossosResultados>
  )
}
