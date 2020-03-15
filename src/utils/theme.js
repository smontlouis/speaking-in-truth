const smallBreakpoint = 425
const mediumBreakpoint = 768
const largeBreakpoint = 1024
const xLargeBreakpoint = 1440
const xxLargeBreakpoint = 1440

const [, upperSmallRange] = [0, smallBreakpoint]
const [lowerMediumRange, upperMediumRange] = [smallBreakpoint + 1, mediumBreakpoint]
const [lowerLargeRange, upperLargeRange] = [mediumBreakpoint + 1, largeBreakpoint]
const [lowerXLargeRange, upperXLargeRange] = [largeBreakpoint + 1, xLargeBreakpoint]
const [lowerXXLargeRange, upperXXLargeRange] = [xLargeBreakpoint + 1, xxLargeBreakpoint]

const screen = 'only screen'

export const fonts = {
  primary: 'Libre Baskerville'
}

export const colors = {
  primary: '#143893'
}

export const mediaQueries = {
  smallUp: `@media ${screen}`,
  smallOnly: `@media ${screen} and (max-width: ${upperSmallRange}px)`,
  mediumUp: `@media ${screen} and (min-width: ${lowerMediumRange}px)`,
  mediumOnly: `@media ${screen} and (min-width: ${lowerMediumRange}px and (min-width: ${upperMediumRange}px)`,
  largeUp: `@media ${screen} and (min-width: ${lowerLargeRange}px)`,
  largeOnly: `@media ${screen} and (min-width: ${lowerLargeRange}px and (min-width: ${upperLargeRange}px)`,
  xLargeUp: `@media ${screen} and (min-width: ${lowerXLargeRange}px)`,
  xLargeOnly: `@media ${screen} and (min-width: ${lowerXLargeRange}px and (min-width: ${upperXLargeRange}px)`,
  xxLargeUp: `@media ${screen} and (min-width: ${lowerXXLargeRange}px)`,
  xxLargeOnly: `@media ${screen} and (min-width: ${lowerXXLargeRange}px and (min-width: ${upperXXLargeRange}px)`
}

export default { fonts, colors, mediaQueries }
