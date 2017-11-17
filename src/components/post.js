import glamorous from 'glamorous'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'

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

const StyledLink = glamorous(Link)({
  textDecoration: 'none',

  ':hover': {
    opacity: 0.7
  }
})

const HeadingLink = ({ slug, children }) => {
  if (slug) {
    return (
      <StyledLink to={slug}>
        <Heading>
          { children }
        </Heading>
      </StyledLink>
    )
  }

  return (
    <Heading>
      { children }
    </Heading>
  )
}

const Post = ({slug, title, html}) => (
  <article>
    <HeadingLink slug={slug}>
      {title}
    </HeadingLink>
    <Text
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </article>
)

export default Post
