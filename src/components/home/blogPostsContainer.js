import glamorous from 'glamorous'

const BlogPostsContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '15vh',
  position: 'relative',
  transition: 'opacity .5s',
  opacity: 0,

  '.on-section &': {
    opacity: 1
  }
})

export default BlogPostsContainer
