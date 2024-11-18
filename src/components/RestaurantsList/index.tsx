import Cards from "../Restaurants"
import { Container, List } from "./styles"

import Restaurant from "../../models/Restaurant"

type Props = {
  restaurants: Restaurant[]
}

const CardsList = ({ restaurants }: Props) => (
 <Container>
  <div className="container">
    <List>
      {restaurants.map((rest) => (
        <li>
          <Cards
            key={rest.id}
            image={rest.image}
            title={rest.title}
            infos={rest.infos}
            rate={rest.rate}
            description={rest.description}
          />
        </li>
      ))}
    </List>
  </div>
 </Container>
)

export default CardsList
