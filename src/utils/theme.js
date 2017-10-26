const smallBreakpoint = 768
const mediumBreakpoint = 1024
const mediumWideBreakpoint = 1366
const largeBreakpoint = 1440
const xLargeBreakpoint = 1920

const [, upperSmallRange] = [0, smallBreakpoint]
const [lowerMediumRange, upperMediumRange] = [smallBreakpoint + 1, mediumBreakpoint]
const [lowerMediumWideRange, upperMediumWideRange] = [mediumBreakpoint + 1, mediumWideBreakpoint]
const [lowerLargeRange, upperLargeRange] = [mediumBreakpoint + 1, largeBreakpoint]
const [lowerXLargeRange, upperXLargeRange] = [largeBreakpoint + 1, xLargeBreakpoint]

const screen = 'only screen'

export const fonts = {

}

export const colors = {

}

export const mediaQueries = {
  smallUp: `@media ${screen}`,
  smallOnly: `@media ${screen} and (max-width: ${upperSmallRange}px)`,
  mediumUp: `@media ${screen} and (min-width: ${lowerMediumRange}px)`,
  mediumOnly: `@media ${screen} and (min-width: ${lowerMediumRange}px and (min-width: ${upperMediumRange}px)`,
  mediumWideUp: `@media ${screen} and (min-width: ${lowerMediumWideRange}px)`,
  mediumWideOnly: `@media ${screen} and (min-width: ${lowerMediumWideRange}px and (min-width: ${upperMediumWideRange}px)`,
  largeUp: `@media ${screen} and (min-width: ${lowerLargeRange}px)`,
  largeOnly: `@media ${screen} and (min-width: ${lowerLargeRange}px and (min-width: ${upperLargeRange}px)`,
  xLargeUp: `@media ${screen} and (min-width: ${lowerXLargeRange}px)`,
  xLargeOnly: `@media ${screen} and (min-width: ${lowerXLargeRange}px and (min-width: ${upperXLargeRange}px)`
}

export default { fonts, colors, mediaQueries }
