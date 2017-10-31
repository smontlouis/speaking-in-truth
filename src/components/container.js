import glamorous from 'glamorous'
import { connect } from 'redux-zero/react'
import { rhythm } from '../utils/typography'
import { actions } from '../redux/modules/ui'

const Container = glamorous.div(({ isMenuOpen, theme: { colors } }) => ({
  backgroundColor: colors.primary,
  transition: 'transform 0.5s, background-color 1s',
  transformOrigin: '50% 50vh',

  '.on-section &': {
    backgroundColor: 'white'
  },

  ...isMenuOpen ? {
    transform: 'scale(0.8)'
  } : {}
}))

export default connect(
  ({ isMenuOpen }) => ({ isMenuOpen }),
  actions
)(Container)
