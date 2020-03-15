export const state = {
  isMenuOpen: false,
  currentBlog: 0
}

export const actions = (store) => ({
  openMenu: state => ({ isMenuOpen: true }),
  closeMenu: state => ({ isMenuOpen: false }),
  setCurrentBlog: (state, payload) => ({ currentBlog: payload })
})
