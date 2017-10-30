export const state = {
  isMenuOpen: false
}

export const actions = (store) => ({
  openMenu: state => ({ isMenuOpen: true }),
  closeMenu: state => ({ isMenuOpen: false })
})
