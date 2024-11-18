import styled from 'styled-components'
import { color } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${color.bege};
  color: ${color.principal};
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const List = styled.ul`
  display: flex;
  margin-top: 32px;

  li {
    margin-right: 8px;
  }
`
export const Description = styled.p`
  font-size: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
`
