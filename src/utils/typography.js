import Typography from 'typography'
import { colors, mediaQueries } from './theme'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  bodyFontFamily: [
    'Roboto',
    'Arial'
  ],
  bodyWeight: 'lighter',
  bodyColor: '#222222',

  headerFontFamily: [
    'TeX Gyre Schola',
    'serif'
  ],
  headerColor: colors.primary,
  headerWeight: 'normal',
  scaleRatio: 2.1,
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles) => ({
    '#___gatsby': {
      backgroundColor: '#ddd'
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
    }
  })
})

export default typography
