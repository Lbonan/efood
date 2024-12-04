import { useEffect, useState } from 'react'
import CardsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

import Footer from '../../components/Footer'
import { useGetRestaurantsQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <CardsList restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
