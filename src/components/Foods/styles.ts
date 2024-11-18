import styled from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const FoodCard = styled.div`
  background-color: ${color.principal};
  color: ${color.bege};
  border-radius: 8px;
  padding: 8px;

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
