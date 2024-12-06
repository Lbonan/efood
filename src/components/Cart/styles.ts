import styled from 'styled-components'
import { color } from '../../styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContaiener = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${color.bege};

  &.is-open {
    display: flex;
  }
`
export const SiderBar = styled.aside`
  background-color: ${color.principal};
  z-index: 1;
  padding: 32px 8px 12px 8px;
  max-width: 360px;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    cursor: pointer;
    background-color: ${color.bege};
    color: ${color.principal};
    width: 100%;
    border: none;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${color.bege};
  margin-bottom: 16px;
  padding: 8px 12px 12px 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${color.principal};
    margin-bottom: 18px;
  }

  span {
    display: block;
    font-weight: bold;
    color: ${color.principal};
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 70px;
    right: 8px;
    cursor: pointer;
  }
`
