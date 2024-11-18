import { BannerImg, Titulo, Tipo } from './styles'
import bannerVita from '../../assets/images/Banner_vita.png'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${bannerVita})` }}>
    <div className="container">
      <Titulo>La Dolce Vita Trattoria</Titulo>
      <Tipo>Italiana</Tipo>
    </div>
  </BannerImg>
)

export default Banner
