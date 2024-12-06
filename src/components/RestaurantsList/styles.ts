import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 50px;
  margin-top: 40px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`
