import React from 'react'
import { connect } from 'redux-zero/react'
import glamorous from 'glamorous'
import { rgba } from 'polished'
import { rhythm } from '../../utils/typography'

const Li = glamorous.li(({ isActive, theme: { fonts, colors } }) => ({
  listStyleType: 'upper-roman',
  listStylePosition: 'inside',
  fontFamily: fonts.primary,
  fontSize: rhythm(2 / 5),
  lineHeight: rhythm(3 / 5),
  transform: 'translateX(30%)',
  transition: 'all 0.3s ease-in-out',
  color: rgba(colors.primary, 0.4),
  cursor: 'pointer',

  ':hover': {
    color: colors.primary
  },

  ...isActive ? {
    transform: 'translateX(0%)',
    color: colors.primary
  } : {}
}))

const Ul = glamorous.ul(({ theme: { mediaQueries } }) => ({
  [mediaQueries.smallOnly]: {
    display: 'none'
  },

  position: 'absolute',
  top: '50vh',
  transform: 'translateY(-50%) translateX(20px)',
  opacity: 0,
  transition: 'all 0.3s ease-in-out',
  display: 'block',
  width: 300,
  textAlign: 'left',
  margin: 0,

  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'linear-gradient(to right, transparent 80%, white 100%)',
    pointerEvents: 'none',
    zIndex: 1
  },

  '.with-menu-attached &': {
    transform: 'translateY(-50%) translateX(0)',
    opacity: 1
  }
}))

const PostMenu = ({ posts, currentBlog }) => (
  <Ul>
    {posts.map(({ node }, i) => (
      <Li
        key={i}
        isActive={i === currentBlog}
        onClick={() => require('velocity-animate')(document.getElementById(node.fields.slug), 'scroll', { duration: 500 })}
      >
        { node.frontmatter.title }
      </Li>
    ))}
  </Ul>
)

export default connect(({ currentBlog }) => ({ currentBlog }))(PostMenu)
