import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  principal: '#E66767',
  branca: '#FFF8F2',
  bege: '#FFEBD9'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
  list-style: none;
 }

 body{
  background-color: ${color.branca};
  color: ${color.principal};
 }

 .container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;


  @media (max-width: ${breakpoint.desktop}){
    max-width: 80%;
  }
 }
`
export const CartButtonLink = styled.a`
  background-color: ${color.bege};
  color: ${color.principal};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`

export const CartButton = styled.button`
  background-color: ${color.bege};
  color: ${color.principal};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`
