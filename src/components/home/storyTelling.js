import React from 'react'
import glamorous from 'glamorous'
import { scale, rhythm } from '../../utils/typography'

import Row from '../row'

const { P } = glamorous

const Container = glamorous.section(({ theme: { colors, fonts } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'justify',
  paddingTop: '5vh',
  paddingBottom: '15vh',

  '& blockquote': {
    borderColor: 'white'
  },

  '& p': {
    color: 'white',
    fontFamily: fonts.primary,
    ...scale(0.5),
    lineHeight: rhythm(1.4),
    marginBottom: rhythm(2)
  }
}))

const StoryTelling = ({ content }) => (
  <Container>
    <Row>
      <P
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Row>
  </Container>
)

export default StoryTelling
