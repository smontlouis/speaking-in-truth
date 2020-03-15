import glamorous from 'glamorous'
import { rhythm } from '../utils/typography'

const { Div, H1 } = glamorous

const Heading = glamorous.h1(({ theme: { mediaQueries } }) => ({
  maxWidth: 770,
  lineHeight: rhythm(5 / 3),

  [mediaQueries.largeUp]: {
    marginRight: '30%'
  },

  [mediaQueries.xLargeUp]: {
    marginRight: '25%'
  }
}))

const Text = glamorous.div(({ theme: { mediaQueries } }) => ({
  maxWidth: 770,

  [mediaQueries.largeUp]: {
    marginRight: '30%'
  },

  [mediaQueries.xLargeUp]: {
    marginRight: '25%'
  }
}))

const Post = ({title, html}) => (
  <article>
    <Heading>
      {title}
    </Heading>
    <Text
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </article>
)

export default Post
