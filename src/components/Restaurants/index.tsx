import Tag from '../Tag'
import {
  Card,
  Description,
  Infos,
  Titulo,
  TitleContainer,
  Rating
} from './styles'
import star from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  title: string
  infos: string[]
  image: string
  description: string
  rate: string
}

const Cards = ({ title, infos, image, description, rate }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>

    <TitleContainer>
      <Titulo>{title}</Titulo>
      <Rating>
        <span>{rate}</span>
        <div>
          <img src={star} alt="Estrela Amarela" />
        </div>
      </Rating>
    </TitleContainer>
    <Description>{description}</Description>
    <Button type="link" to="menu" title="Clique pra ver mais">
      Saiba mais
    </Button>
  </Card>
)

export default Cards
