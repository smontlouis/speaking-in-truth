import glamorous from 'glamorous'

const Row = glamorous.section(({ theme: { mediaQueries } }) => ({
  width: '85%',

  [mediaQueries.largeUp]: {
    width: '72%'
  }
}))

export default Row
