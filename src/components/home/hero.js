import React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'
import { scale, rhythm } from '../../utils/typography'
import Row from '../row'
import ScrollSymbol from './scroll-symbol.svg'
const { Section } = glamorous

const animationStyles = props => {
  const bounce = css.keyframes({
    '0%': { transform: 'translateY(20px)' },
    '100%': { transform: 'translateY(0)' }
  })

  return {
    animation: `${bounce} .5s infinite ease-in-out alternate`
  }
}

const ScrollSymbolImg = glamorous.img({
  position: 'absolute',
  bottom: '-20vh',
  left: 0,
  width: rhythm(1.3),
  height: rhythm(1.3)
}, animationStyles)

const Heading = glamorous.h1(({ theme: mediaQueries }) => ({
  color: 'white',
  ...scale(1.4),

  [mediaQueries.mediumUp]: {
    ...scale(1.8),
    lineHeight: rhythm(2.4)
  }
}))

const Container = glamorous.section({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(/images/background.png)',
  backgroundPosition: 'right bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
})

const Hero = () => (
  <Container>
    <Row>
      <Heading>
        Le <br />
        parler <br />
        en langues. <br />
      </Heading>
      <ScrollSymbolImg
        src={ScrollSymbol}
      />
    </Row>
  </Container>
)

export default Hero
