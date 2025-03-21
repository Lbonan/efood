import styled from 'styled-components'
import { breakpoint, CartButton, color } from '../../styles'

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

export const PaymentContainer = styled.div`
  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .buttomContainer {
    margin-top: 16px;
  }

  ${CartButton} {
    margin-bottom: 12px;
  }

  .fieldContainer {
    display: flex;
    column-gap: 34px;

    #cardNumber {
      width: 228px;
    }
    #expiresMonth {
      width: 150px;
    }

    @media (max-width: ${breakpoint.tablet}) {
      display: block;

      #cardNumber {
        width: 100%;
      }
      #expiresMonth {
        width: 100%;
      }
    }
  }
`

export const ConfirmedContainer = styled.div`
  .buttomContainer {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 400;

    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
