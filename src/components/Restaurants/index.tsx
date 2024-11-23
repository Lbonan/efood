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
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  rate: string
  id: number
}

const Cards = ({ title, image, description, rate, id, infos }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <Infos>
      {infos.map((info) => {
        if (info) {
          return <Tag key={info}>{info}</Tag>
        }
      })}
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
    <Button type="link" to={`/menu/${id}`} title="Clique pra ver mais">
      Saiba mais
    </Button>
  </Card>
)

export default Cards
