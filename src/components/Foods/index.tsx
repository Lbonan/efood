import Button from '../Button'
import { FoodCard, Title, Description } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Food = ({ image, title, description }: Props) => (
  <FoodCard>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="button" title={'Adicionar ao carrinho'}>
      Adicionar ao carrinho
    </Button>
  </FoodCard>
)

export default Food
