import glamorous from 'glamorous'
import { connect } from 'redux-zero/react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import CloseMenuButton from '../components/closeMenuButton'

const { Div } = glamorous

const NavContainer = glamorous.div(({ isMenuOpen, theme: { colors } }) => ({
  position: 'fixed',
  background: colors.primary,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
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

const StyledLink = glamorous(Link)(() => ({
  ...scale(1.8),
  marginBottom: rhythm(1.5),
  color: 'white',
  fontFamily: 'TeX Gyre Schola',
  textDecoration: 'none'
}))

const MenuNav = ({ isMenuOpen, items }) => (
  <NavContainer isMenuOpen={isMenuOpen}>
    <CloseMenuButton />
    <StyledLink to='/'>
      Accueil
    </StyledLink>
    <StyledLink to='/about'>
      À propos
    </StyledLink>
    <StyledLink to='/contact'>
      Contact
    </StyledLink>
  </NavContainer>
)

export default connect(
  ({ isMenuOpen }) => ({ isMenuOpen })
)(MenuNav)
