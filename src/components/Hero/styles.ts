import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const HeroContaiener = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    margin-bottom: 160px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  align-items: center;
`
