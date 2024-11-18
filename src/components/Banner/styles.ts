import styled from 'styled-components'
import { color } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    padding-top: 220px;
    z-index: 3;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  color: ${color.branca};
`
export const Tipo = styled.p`
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  color: #ffffff;
  margin-top: 24px;
  position: absolute;
  top: 32px;
`
