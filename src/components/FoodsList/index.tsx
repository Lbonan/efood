import Food from '../../models/Food'
import Foods from '../Foods'
import { FoodList, CardContainer } from './styles'

type Props = {
  foods: Food[]
}

const FoodsList = ({ foods }: Props) => (
  <CardContainer>
    <div className="container">
      <FoodList>
        {foods.map((food) => (
          <Foods
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
          />
        ))}
      </FoodList>
    </div>
  </CardContainer>
)

export default FoodsList
