import { useState } from 'react'
import Button from '../Button'
import { FoodCard, Title, Description, Modal, ModalContent } from './styles'

import close from '../../assets/images/close.png'

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
  id: number
}

export const currencyBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ image, title, description, porcao, preco }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => {
    if (isVisible) {
      return 'visible'
    }
    return ''
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }

    return descricao
  }

  return (
    <>
      <FoodCard>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricao(description)}</Description>
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
            <img src={image} alt="pizza" />
            <div>
              <div>
                <h2>{title}</h2>
                <img
                  src={close}
                  onClick={() => setIsVisible(false)}
                  alt="Clique pra fechar"
                />
              </div>
              <p>{description}</p>
              <p>Serve: {porcao}</p>
              <button type="button">
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
