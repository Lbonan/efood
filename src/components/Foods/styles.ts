import styled from 'styled-components'
import { breakpoint, color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const FoodCard = styled.div`
  background-color: ${color.principal};
  color: ${color.bege};
  border-radius: 8px;
  padding: 8px;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    width: 100%;
    border: none;
    background-color: ${color.bege};
    color: ${color.principal};
    cursor: pointer;
    margin-top: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 6px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: ${color.bege};

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  z-index: 1;
  background-color: ${color.principal};

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 90%;
  }

  > div {
    display: flex;
    padding: 0 0 32px 32px;

    > img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
      margin-top: 34px;
    }

    div {
      display: block;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 21px;
          font-weight: 900;
          margin-top: 32px;
        }

        img {
          height: 16px;
          width: 16px;
          margin: 8px;
          cursor: pointer;
        }
      }

      p {
        margin: 16px 0;
        font-size: 14px;
      }

      button {
        border: none;
        padding: 4px 7px;
        font-size: 14px;
        font-weight: 700;
        background-color: ${color.bege};
        color: ${color.principal};
        cursor: pointer;
      }
    }

    @media (max-width: ${breakpoint.tablet}) {
      display: block;

      img {
        width: 90%;
        align-self: center;
      }

      p {
        font-size: 12px;
        max-width: 94%;
        text-align: justify;
      }
    }
  }
`
