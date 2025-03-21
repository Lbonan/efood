import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Overlay, CartContainer, SideBar, CartItem } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Checkout from '../../pages/Checkout'
import { CartButton, color } from '../../styles'
import { getTotalPrice, currencyBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'
import { ClipLoader } from 'react-spinners'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { isLoading }] = usePurchaseMutation()

  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length === 0 && (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um item para seguir com a
            compra
          </p>
        )}
        {!showCheckout && items.length > 0 && (
          <>
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
              <p>{currencyBrl(getTotalPrice(items))}</p>
            </div>
            <CartButton
              type="button"
              onClick={goToCheckout}
              title="Clique para continuar com o pedido"
            >
              {isLoading ? (
                <>
                  <ClipLoader size={16} color={color.principal} />
                </>
              ) : (
                'Continuar com o pedido'
              )}
            </CartButton>
          </>
        )}
        {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
