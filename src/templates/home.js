import { Component } from 'react'
import glamorous from 'glamorous'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Container from '../components/container'
import StoryTelling from '../components/home/storyTelling'
import Hero from '../components/home/hero'
import BlogPosts from '../components/home/blogPosts'

const { Div } = glamorous

const onSectionEnter = () => document.documentElement.classList.remove('on-section')
const onSectionLeave = () => document.documentElement.classList.add('on-section')

const onFixMenu = ({ currentPosition, previousPosition }) => {
  if (currentPosition === 'inside' && previousPosition === 'above') {
    document.documentElement.classList.remove('with-menu-attached')
  }
}
const onUnfixMenu = ({ currentPosition, previousPosition }) => {
  if (currentPosition === 'above' && previousPosition === 'inside') {
    document.documentElement.classList.add('with-menu-attached')
  }
}

class IndexPage extends Component {
  componentDidMount () {
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  render () {
    const { data } = this.props
    return (
      <Div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description }
          ]}
        />
        <Container>
          <Waypoint
            topOffset={500}
            onEnter={onSectionEnter}
            onLeave={onSectionLeave}
          >
            <div>
              <Hero />
              <StoryTelling
                content={data.markdownRemark.html}
              />
            </div>
          </Waypoint>
          <Waypoint
            onEnter={onFixMenu}
            onLeave={onUnfixMenu}
          />
          <BlogPosts posts={data.allMarkdownRemark.edges} />
        </Container>
      </Div>
    )
  }
}
export default IndexPage

export const query = graphql`
query IndexQuery($slug: String!) {
    site {
      siteMetadata {
        title,
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC },
      filter: {
        frontmatter: {
          listedInHome: { eq: true }
        }
      }
    ) {
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
