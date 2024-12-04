import { Overlay, CartContaiener, SiderBar, CartItem } from './styles'
import pizza from '../../assets/images/marguerita.png'
import Button from '../Button'

const Cart = () => (
  <CartContaiener>
    <Overlay />
    <SiderBar>
      <ul>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome da Comida</h3>
            <span>R$ 60,00</span>
          </div>
          <button type="button" title="Remover pedido" />
        </CartItem>
      </ul>
      <div>
        <p>Valor Total</p>
        <p>R$ 60,00</p>
      </div>
      <Button type="button" title="Clique para continuar com o pedido">
        Continuar com a entrega
      </Button>
    </SiderBar>
  </CartContaiener>
)

export default Cart
