import { Provider } from 'redux-zero/react'
import { ThemeProvider } from 'glamorous'
import MenuNav from '../components/menuNav'
import theme from '../utils/theme'
import store from '../redux/store'

require('typeface-roboto')
require('typeface-libre-baskerville')

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <MenuNav />
        {children()}
      </div>
    </Provider>
  </ThemeProvider>
)

export default TemplateWrapper
