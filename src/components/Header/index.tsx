import { HeaderContainer, LinkRestaurants, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <LinkRestaurants href="/">Restaurantes</LinkRestaurants>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </div>
  </HeaderContainer>
)

export default Header
