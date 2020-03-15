import glamorous from 'glamorous'
import MenuIcon from 'react-icons/lib/md/menu'
import { connect } from 'redux-zero/react'
import { lighten } from 'polished'
import { actions } from '../../redux/modules/ui'
import { rhythm } from '../../utils/typography'

const MenuWrapper = glamorous.div(({ theme: { colors } }) => ({
  cursor: 'pointer',
  marginTop: rhythm(1),
  marginRight: rhythm(1),

  '& svg': {
    width: rhythm(1.5),
    height: rhythm(1.5),
    transition: 'all 0.5s',
    '& path': {
      transition: 'all 0.5s',
      fill: colors.primary
    }
  },

  ':hover': {
    '& svg': {
      transform: 'translateY(-5px)',
      '& path': {
        fill: lighten(0.1, colors.primary)
      }
    }
  }
}))

const Menu = ({ openMenu }) => (
  <MenuWrapper onClick={openMenu}>
    <MenuIcon />
  </MenuWrapper>
)

export default connect(null, actions)(Menu)
