import glamorous from 'glamorous'

const Row = glamorous.section(({ theme: { mediaQueries } }) => ({
  width: '85%',
  position: 'relative',

  [mediaQueries.largeUp]: {
    width: '85%'
  },

  [mediaQueries.xLargeUp]: {
    width: '72%'
  }
}))

export default Row
