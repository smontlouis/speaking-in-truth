import React from 'react'
import glamorous from 'glamorous'
import { scale, rhythm } from '../../utils/typography'
const { Section, H1 } = glamorous

const Hero = () => (
  <Section
    height='100vh'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    <H1
      {...scale(1.8)}
      lineHeight={rhythm(2.4)}
      textAlign='center'
      color='white'
    >
      Le parler <br />
      en langues. <br />
    </H1>
  </Section>
)

export default Hero
