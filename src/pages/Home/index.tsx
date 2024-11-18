import CardsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import vita from '../../assets/images/vita.png'
import Footer from '../../components/Footer'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar melhor com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: vita,
    title: 'La Dolce Vita Trattoria',
    rate: '4.7',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: []
  },
  {
    id: 3,
    image: sushi,
    title: 'Hioki Sushi',
    rate: '4.6',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 4,
    image: vita,
    title: 'La Dolce Vita Trattoria',
    rate: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Destaque da semana', 'Italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <CardsList restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
