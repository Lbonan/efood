import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { breakpoint, color } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoint.tablet}) {
      display: grid;
      justify-content: center;
      gap: 12px;
    }
  }
`
export const LinkRestaurants = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${color.principal};

  @media (max-width: ${breakpoint.tablet}) {
  }
`
export const LinkCart = styled(LinkRestaurants)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 16px;

  img {
    margin-left: 12px;
  }
`
