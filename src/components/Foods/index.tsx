import { useState } from 'react'
import Button from '../Button'
import { FoodCard, Title, Description, Modal, ModalContent } from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { currencyBrl, getDescription } from '../../utils'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
  id: number
}

const Food = ({ foto, nome, descricao, porcao, preco, id }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    const food = { id, nome, descricao, porcao, foto, preco }
    dispatch(add(food))
    setIsVisible(false)
    dispatch(open())
  }

  const showModal = () => {
    if (isVisible) {
      return 'visible'
    }
    return ''
  }

  return (
    <>
      <FoodCard>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
        <Button
          type="button"
          onClick={() => setIsVisible(true)}
          title={'Mais Detalhes'}
        >
          Mais detalhes
        </Button>
      </FoodCard>
      <Modal className={showModal()}>
        <ModalContent>
          <div>
            <img src={foto} alt="pizza" />
            <div>
              <div>
                <h2>{nome}</h2>
                <img
                  src={close}
                  onClick={() => setIsVisible(false)}
                  alt="Clique pra fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <button type="button" onClick={addToCart}>
                Adicionar ao carrinho - {currencyBrl(preco)}
              </button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Food
