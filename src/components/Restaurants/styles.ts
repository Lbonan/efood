import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${color.principal};
  color: ${color.principal};
  position: relative;
  padding-bottom: 12px;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 7px 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 6px;
  }

  img {
    height: 22px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 12px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 6px 8px 18px 8px;
`
