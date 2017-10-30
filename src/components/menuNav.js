import glamorous from 'glamorous'
import { connect } from 'redux-zero/react'
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

  ...isMenuOpen ? {
    transform: 'scale(1)',
    opacity: 1,
    pointerEvents: 'auto'
  } : {}
}))

const Link = glamorous.div(() => ({
  ...scale(1),
  marginBottom: rhythm(1),
  color: 'white',
  fontFamily: 'TeX Gyre Schola'
}))

const MenuNav = ({ isMenuOpen, items }) => (
  <NavContainer isMenuOpen={isMenuOpen}>
    <CloseMenuButton />
    <Div
      maxWidth={770}
      marginTop='20vh'
    >
      {items.map(({ node }, i) => (
        <Link
          key={i}
          maxWidth={770}
          lineHeight={rhythm(5 / 3)}
        >
          {node.frontmatter.title}
        </Link>
      ))}
    </Div>
  </NavContainer>
)

export default connect(
  ({ isMenuOpen }) => ({ isMenuOpen })
)(MenuNav)
