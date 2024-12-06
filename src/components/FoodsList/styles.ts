import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const CardContainer = styled.div`
  padding: 32px 0;
`

export const FoodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`
