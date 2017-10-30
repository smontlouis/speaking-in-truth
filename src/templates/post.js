
import typography from '../utils/typography'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Post from '../components/post'

const { Div, H1 } = glamorous

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
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
    </div>
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
