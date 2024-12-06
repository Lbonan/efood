import { Overlay, CartContaiener, SiderBar, CartItem } from './styles'
import pizza from '../../assets/images/marguerita.png'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { currencyBrl } from '../Foods'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acum, atual) => (acum += atual.preco), 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContaiener className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SiderBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{currencyBrl(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
                title="Remover pedido"
              />
            </CartItem>
          ))}
        </ul>
        <p>
          <i>
            <strong>{items.length}</strong> pedidos no carrinho
          </i>
        </p>
        <div>
          <p>Valor Total</p>
          <p>{currencyBrl(getTotalPrice())}</p>
        </div>
        <Button type="button" title="Clique para continuar com o pedido">
          Continuar com o pedido
        </Button>
      </SiderBar>
    </CartContaiener>
  )
}

export default Cart
