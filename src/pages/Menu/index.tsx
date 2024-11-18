import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Food from '../../models/Food'

import margueritta from '../../assets/images/marguerita.png'

const pizza: Food[] = [
  {
    id: 1,
    image: margueritta,
    title: 'Pizza margueritta',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: margueritta,
    title: 'Pizza margueritta',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: margueritta,
    title: 'Pizza margueritta',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Menu = () => (
  <>
    <Header />
    <Banner />
    <FoodsList foods={pizza} />
    <Footer />
  </>
)

export default Menu
