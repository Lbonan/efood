import styled from 'styled-components'
import { CartButton, color } from '../../styles'

export const DeliveryContainer = styled.div`
  .CepAndNumber {
    display: flex;
    column-gap: 34px;
    margin-bottom: 16px;
  }

  h2 {
    margin-bottom: 24px;
  }

  .buttomContainer {
    margin-top: 16px;
  }

  ${CartButton} {
    margin-bottom: 12px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${color.bege};
    color: ${color.principal};
    border: none;
    margin: 8px 0;

    &.error {
      border: 2px solid red;
      background-color: rgb(248, 141, 141);
    }
  }
`

export const PaymentContainer = styled.div``
