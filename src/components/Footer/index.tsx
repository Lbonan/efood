import { FooterContainer, List, Description } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Efood" />
    <List>
      <li>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </List>
    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </FooterContainer>
)

export default Footer
