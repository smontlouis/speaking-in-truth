import React from 'react'
import glamorous from 'glamorous'
import { rhythm } from '../../utils/typography'

import PostsMenu from './postsMenu'
import OpenMenuButton from './openMenuButton'

const Container = glamorous.div({
  top: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '.with-menu-attached &': {
    position: 'fixed'
  }
  
})

const Header = ({ posts }) => (
  <Container>
    <OpenMenuButton />
    <PostsMenu posts={posts} />
  </Container>
)

export default Header
