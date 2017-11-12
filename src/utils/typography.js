import Typography from 'typography'
import { colors, mediaQueries } from './theme'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  bodyFontFamily: [
    'Roboto',
    'Arial'
  ],
  bodyWeight: 300,
  bodyColor: '#222222',

  headerFontFamily: [
    'Libre Baskerville',
    'serif'
  ],
  headerColor: colors.primary,
  headerWeight: 'normal',
  scaleRatio: 2.1,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles) => ({
    '#___gatsby': {
      backgroundColor: '#ddd'
    },
    'html': {
      overflowX: 'hidden'
    },

    'html.is-menu-opened': {
      overflow: 'hidden'
    },

    'body': {
      overflowX: 'hidden'
    },

    [mediaQueries.mediumUp]: {
      'html': {
        ...adjustFontSizeTo('23px')
      }
    },

    [mediaQueries.largeUp]: {
      'html': {
        ...adjustFontSizeTo('24px')
      }
    },

    [mediaQueries.xLargeUp]: {
      'html': {
        ...adjustFontSizeTo('26px')
      }
    },

    [mediaQueries.xxLargeUp]: {
      'html': {
        ...adjustFontSizeTo('26px')
      }
    },

    'blockquote': {
      fontFamily: 'Libre Baskerville',
      fontStyle: 'normal',
      borderLeft: '3px solid',
      paddingLeft: '2rem',
      textAlign: 'left'
    },

    'small': {
      opacity: 0.6,
      fontSize: '70%',
      fontStyle: 'normal'
    },

    'em': {
      textShadow: '1px 1px 0 rgba(0,0,0,0.3)'
    }
  })
})

export default typography
