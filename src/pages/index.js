import glamorous from 'glamorous'
import Helmet from 'react-helmet'
import MenuNav from '../components/menuNav'
import Container from '../components/container'
import Arrow from '../components/arrow'
import OpenMenuButton from '../components/openMenuButton'
import Link from 'gatsby-link'

import { scale, rhythm } from '../utils/typography'
import Post from '../components/post'

const { H1, Section, P, Div } = glamorous

const IndexPage = ({ data }) => (
  <Div>
    <Helmet title={data.site.siteMetadata.title} />
    <MenuNav items={data.allMarkdownRemark.edges} />
    <Container>
      <OpenMenuButton />
      <Section
        marginTop='20vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='flex-start'
      >
        <H1
          {...scale(1.9)}
          lineHeight={rhythm(2.2)}
        >
          Le <br />
          parler <br />
          en langues. <br />
        </H1>
        <P
          maxWidth={780}
          {...scale(-0.1)}
          lineHeight={rhythm(0.8)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac vulputate diam. Maecenas eget porttitor lorem. Nam finibus lacus a nunc luctus ornare. Vestibulum tempor scelerisque nisi, vitae tristique ipsum dignissim sed. Sed at vestibulum felis.
        </P>
      </Section>
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <Section key={node.id}>
          <Arrow />
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <Post
              title={node.frontmatter.title}
              html={node.html}
            />
          </Link>
        </Section>
      ))}
    </Container>
  </Div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
          html
        }
      }
    }
  }
`
