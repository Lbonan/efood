import { BannerImg, Titulo, Tipo } from './styles'
import Loader from '../../Loader'

import { useEffect, useState } from 'react'

export type Props = {
  id: number
}

const Banner = ({ id }: Props) => {
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <Loader />
  }
  return (
    <BannerImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <Titulo>{restaurant.titulo}</Titulo>
        <Tipo>{restaurant.tipo}</Tipo>
      </div>
    </BannerImg>
  )
}
export default Banner
