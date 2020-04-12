import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'
import Waypoint from 'react-waypoint'
import { connect } from 'redux-zero/react'

import { rhythm } from '../../utils/typography'
import { actions } from '../../redux/modules/ui'

import Header from '../header/header'
import Post from '../post'
import Row from '../row'
import BlogPostsContainer from './blogPostsContainer'

const { Section } = glamorous

const BlogPosts = ({ posts, setCurrentBlog }) => (
  <BlogPostsContainer>
    <Header posts={posts} />
    <Row>
      {posts
        .map(({ node }, i) => (
          <Waypoint
            bottomOffset='60%'
            topOffset='60%'
            onEnter={() => setCurrentBlog(i)}
            key={node.id}
          >
            <Section
              id={node.fields.slug}
              paddingTop={rhythm(2)}
              paddingBottom={rhythm(2)}
            >
              {/* <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
              > */}
              <Post
                slug={node.fields.slug}
                title={node.frontmatter.title}
                html={node.html}
              />
              {/* </Link> */}
            </Section>
          </Waypoint>
        ))}
    </Row>
  </BlogPostsContainer>
)

export default connect(null, actions)(BlogPosts)
