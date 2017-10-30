import glamorous from 'glamorous'
import { connect } from 'redux-zero/react'
import { rhythm } from '../utils/typography'
import { actions } from '../redux/modules/ui'

const Container = glamorous.div(({ isMenuOpen }) => ({
  padding: rhythm(1),
  background: 'white',
  transition: 'transform 0.5s',
  transformOrigin: '50% 50vh',

  ...isMenuOpen ? {
    transform: 'scale(0.8)'
  } : {}
}))

export default connect(
  ({ isMenuOpen }) => ({ isMenuOpen }),
  actions
)(Container)
