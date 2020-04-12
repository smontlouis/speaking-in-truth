import glamorous from 'glamorous'
import CloseIcon from 'react-icons/lib/md/close'
import { connect } from 'redux-zero/react'
import { rhythm } from '../utils/typography'
import { actions } from '../redux/modules/ui'

const MenuWrapper = glamorous.div({
  position: 'absolute',
  top: rhythm(1),
  right: rhythm(1),
  cursor: 'pointer',
  '& svg': {
    width: rhythm(1.5),
    height: rhythm(1.5),
    '& path': {
      fill: 'white'
    }
  }
})

const CloseMenu = ({ closeMenu }) => (
  <MenuWrapper onClick={closeMenu}>
    <CloseIcon />
  </MenuWrapper>
)

export default connect(null, actions)(CloseMenu)
