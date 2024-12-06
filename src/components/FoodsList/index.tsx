import { Cardapio } from '../../pages/Home'
import Foods from '../Foods'
import { FoodList, CardContainer } from './styles'

type Props = {
  foods: Cardapio[]
}

const FoodsList = ({ foods }: Props) => (
  <CardContainer>
    <div className="container">
      <FoodList>
        {foods.map((food) => (
          <Foods
            key={food.id}
            id={food.id}
            nome={food.nome}
            descricao={food.descricao}
            foto={food.foto}
            porcao={food.porcao}
            preco={food.preco}
          />
        ))}
      </FoodList>
    </div>
  </CardContainer>
)

export default FoodsList
