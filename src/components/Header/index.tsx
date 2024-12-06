import { HeaderContainer, LinkRestaurants, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import carrinho from '../../assets/images/cart-svgrepo-com.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderContainer>
      <div className="container">
        <LinkRestaurants href="/">Restaurantes</LinkRestaurants>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <LinkCart onClick={openCart}>
          {items.length} produto(s) <img src={carrinho} alt="Carrinho" />
        </LinkCart>
      </div>
    </HeaderContainer>
  )
}

export default Header
