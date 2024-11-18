import { HeroContaiener, Title } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Hero = () => (
  <HeroContaiener style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="Efood" />
      <Title>
        Viva experiências gastronômicasno
        <br />
        conforto da sua casa
      </Title>
    </div>
  </HeroContaiener>
)

export default Hero
