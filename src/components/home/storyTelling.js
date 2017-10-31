import React from 'react'
import glamorous from 'glamorous'
import { scale, rhythm } from '../../utils/typography'

import Row from '../row'

const { P } = glamorous

const Container = glamorous.section(({ theme: { colors } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'justify',
  paddingTop: '5vh',
  paddingBottom: '15vh',

  '& p': {
    color: 'white',
    fontFamily: 'TeX Gyre Schola',
    ...scale(0.7),
    lineHeight: rhythm(1.6),
    marginBottom: rhythm(2)
  }
}))

const StoryTelling = () => (
  <Container>
    <Row>
      <P>
        Hello, we are Priestley. But really, I am Davis. I am a storyteller. Priestley is my family, but we’re changing our name. Did you read that poem above? Please read it again, it’s very short, and it’s unlocked in me an idea that’s been dying to surface for the last few years. The name Priestley no longer feels big enough to hold our ambitions.
      </P>
      <P>
        As creators, strategists, and producers we’ve been guided by the ethos that life is too short for bad relationships, bad days, and bad content. We’ve built our reputation by defending the story, delivering excellence, and treating our clients with love - you know, how human beings enjoy being treated.
      </P>
    </Row>
  </Container>
)

export default StoryTelling
