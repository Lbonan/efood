import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu/:id" element={<Menu />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
