import { BeatLoader } from 'react-spinners'

import { Container } from './styles'
import { color } from '../styles'

const Loader = () => (
  <Container>
    <BeatLoader color={color.principal} />
  </Container>
)

export default Loader
