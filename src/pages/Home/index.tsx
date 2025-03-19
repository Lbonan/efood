import { useEffect, useState } from 'react'
import CardsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

import Footer from '../../components/Footer'
import { useGetRestaurantsQuery } from '../../services/api'

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
