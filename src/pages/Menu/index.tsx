import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetFoodsQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Menu = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetFoodsQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner id={restaurant.id} />
      <FoodsList foods={restaurant.cardapio} />
      <Footer />
      <Cart />
    </>
  )
}

export default Menu
