import CardsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

import Footer from '../../components/Footer'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../Loader'

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
  return <Loader />
}

export default Home
