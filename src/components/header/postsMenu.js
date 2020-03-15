import React from 'react'
import { connect } from 'redux-zero/react'
import glamorous from 'glamorous'
import CloseIcon from 'react-icons/lib/md/close'
import OpenIcon from 'react-icons/lib/md/keyboard-arrow-left'
import { compose } from 'recompose'
import { rgba } from 'polished'
import { rhythm } from '../../utils/typography'

const Close = glamorous(CloseIcon)(({ theme: { mediaQueries, colors } }) => ({
  fontSize: rhythm(1.2),
  color: colors.primary,
  position: 'absolute',
  right: rhythm(0.5),
  top: rhythm(0.5),

  [mediaQueries.largeUp]: {
    display: 'none'
  }
}))

const Open = glamorous(OpenIcon)(({ theme: { mediaQueries, colors } }) => ({
  fontSize: rhythm(1.4),
  color: colors.primary,
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%) translateX(-100%)',
  height: '50px',
  background: 'white',
  borderRadius: '50% 0px 0px 50%',
  boxShadow: '-4px 0 7px 0 rgba(0, 0, 0, 0.15)',

  [mediaQueries.largeUp]: {
    display: 'none'
  }
}))

const Ul = glamorous.ul(({ theme: { mediaQueries } }) => ({
  padding: rhythm(2),
  margin: 0,
  height: '100%',
  overflow: 'auto',
  [mediaQueries.largeUp]: {
    height: 'auto',
    padding: 0,
    overflow: 'hidden'
  }
}))

const Li = glamorous.li(({ isActive, theme: { fonts, colors, mediaQueries } }) => ({
  listStyleType: 'upper-roman',
  listStylePosition: 'inside',
  fontFamily: fonts.primary,
  fontSize: rhythm(4 / 6),
  lineHeight: rhythm(1),
  transition: 'all 0.2s ease-in-out',
  color: rgba(colors.primary, 0.4),
  cursor: 'pointer',

  ':hover': {
    color: colors.primary
  },

  ...isActive ? {
    color: colors.primary
  } : {},

  [mediaQueries.largeUp]: {
    transform: 'translateX(7%)',
    fontSize: rhythm(2 / 6),
    lineHeight: rhythm(3 / 6),

    ...isActive ? {
      transform: 'translateX(0%)'
    } : {}
  },

  [mediaQueries.xLargeUp]: {
    fontSize: rhythm(2 / 6),
    lineHeight: rhythm(3 / 6)
  },

  [mediaQueries.xxLargeUp]: {
    fontSize: rhythm(2 / 5),
    lineHeight: rhythm(3 / 5)
  }
}))

const Container = glamorous.div(({ isOpened, theme: { mediaQueries } }) => ({
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: 'white',
  position: 'fixed',
  margin: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: '80vw',
  transform: 'translateX(100%)',

  '.is-menu-opened &': {
    boxShadow: '-15px 0px 15px 0 rgba(0, 0, 0, 0.1)',
    transform: 'translateX(0%)'
  },

  [mediaQueries.largeUp]: {
    boxShadow: 'none',
    padding: 0,
    position: 'absolute',
    background: 'transparent',
    bottom: 'auto',
    right: 0,
    top: '50vh',
    transform: 'translateY(-50%) translateX(20px)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    display: 'block',
    width: 250,
    textAlign: 'left',
    margin: 0,

    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      background: 'linear-gradient(to right, rgba(255,255,255, 0) 80%, white 100%)',
      pointerEvents: 'none',
      zIndex: 1
    },

    '.with-menu-attached &': {
      transform: 'translateY(-50%) translateX(0)',
      opacity: 1
    },

    '.is-menu-opened &': {
      boxShadow: 'none'
    }
  },

  [mediaQueries.xLargeUp]: {
    width: 300
  },

  [mediaQueries.xxLargeUp]: {
    width: 400
  }
}))

const togglePostsMenu = () => document.documentElement.classList.toggle('is-menu-opened')

const PostMenu = ({ posts, currentBlog }) => (
  <Container>
    <Close
      onClick={togglePostsMenu}
    />
    <Open
      onClick={togglePostsMenu}
    />
    <Ul
      overflow='auto'
    >
      {posts.filter(({ node }) => node.fields.slug !== '/').map(({ node }, i) => (
        <Li
          key={i}
          isActive={i === currentBlog}
          onClick={() => require('velocity-animate')(document.getElementById(node.fields.slug), 'scroll', { duration: 500 })}
        >
          { node.frontmatter.title }
        </Li>
      ))}
    </Ul>
  </Container>
)

export default compose(
  connect(({ currentBlog }) => ({ currentBlog }))
)(PostMenu)
