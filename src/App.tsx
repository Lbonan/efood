import { BrowserRouter } from 'react-router-dom'
import CardsList from './components/RestaurantsList'
import { GlobalCss } from './styles'
import Hero from './components/Hero'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
