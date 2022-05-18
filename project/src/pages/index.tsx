import type { NextPage } from 'next'
import { ConhecaNossasSolucoes, NossosResultados } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <NossosResultados/>
      <ConhecaNossasSolucoes/>
    </>
  )
}

export default Home
