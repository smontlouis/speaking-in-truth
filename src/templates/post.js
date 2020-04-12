
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Post from '../components/post'
import Row from '../components/row'
import OpenMenuButton from '../components/header/openMenuButton'
import { rhythm } from '../utils/typography'

const Container = glamorous.section(({ theme: { colors, fonts } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: rhythm(4),
  paddingBottom: rhythm(4)
}))

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <OpenMenuButton fixed />
      <Row>
        <Helmet
          title={post.frontmatter.title}
          meta={[
            { name: 'description', content: post.frontmatter.description }
          ]}
          />
        <Post
          title={post.frontmatter.title}
          html={post.html}
          />
      </Row>
    </Container>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
