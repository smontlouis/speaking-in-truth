import Link from 'gatsby-link'
import glamorous from 'glamorous'

const Container = glamorous.div({
  background: 'white'
})

const IndexPage = ({ data }) => (
  <Container>
    <h1>Hi piple</h1>
    <p>
      Welcome to your new Gatsby site. <br /> Now go build something great.
    </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <h2>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h2>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Container>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
