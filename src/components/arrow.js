import glamorous from 'glamorous'
import arrowSvg from './arrow.svg'
import { rhythm } from '../utils/typography'

const ImgContainer = glamorous.img({
  marginTop: rhythm(2),
  marginBottom: rhythm(2),
  width: rhythm(1.3)
})

const Arrow = () => (
  <ImgContainer
    src={arrowSvg}
  />
)

export default Arrow
