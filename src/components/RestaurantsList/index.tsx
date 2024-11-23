import { useState } from 'react'
import { Restaurante } from '../../pages/Home'
import Cards from '../Restaurants'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurante[]
}

const CardsList = ({ restaurants }: Props) => {
  const [destaque] = useState('Destaque da semana')

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((rest) => (
            <Cards
              key={rest.id}
              id={rest.id}
              image={rest.capa}
              infos={[rest.destacado ? destaque : '', rest.tipo]}
              title={rest.titulo}
              rate={rest.avaliacao}
              description={rest.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CardsList
