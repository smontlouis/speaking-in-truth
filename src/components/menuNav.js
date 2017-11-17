import glamorous from 'glamorous'
import { connect } from 'redux-zero/react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import CloseMenuButton from '../components/closeMenuButton'
import { actions } from '../redux/modules/ui'

const NavContainer = glamorous.div(({ isMenuOpen, theme: { colors } }) => ({
  position: 'fixed',
  zIndex: 3,
  background: colors.primary,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transform: 'scale(1.2)',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'all 0.5s',
  padding: rhythm(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  ...isMenuOpen ? {
    transform: 'scale(1)',
    opacity: 1,
    pointerEvents: 'auto'
  } : {}
}))

const StyledLink = glamorous(Link)(({ theme: { fonts } }) => ({
  ...scale(1.5),
  marginBottom: rhythm(1.5),
  color: 'white',
  fontFamily: fonts.primary,
  textDecoration: 'none'
}))

const StyledMailTo = StyledLink.withComponent('a')

const MenuNav = ({ isMenuOpen, items, closeMenu }) => (
  <NavContainer isMenuOpen={isMenuOpen}>
    <CloseMenuButton />
    <StyledLink onClick={closeMenu} to='/'>
      Accueil
    </StyledLink>
    <StyledLink onClick={closeMenu} to='/a-propos'>
      À propos
    </StyledLink>
    <StyledMailTo href='mailto:parlerenlangues@gmail.com'>
      Contact
    </StyledMailTo>
  </NavContainer>
)

export default connect(
  ({ isMenuOpen }) => ({ isMenuOpen }),
  actions
)(MenuNav)
