import { Provider } from 'redux-zero/react'
import { ThemeProvider } from 'glamorous'
import theme from '../utils/theme'
import store from '../redux/store'

require('typeface-roboto')
require('typeface-libre-baskerville')

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        {children()}
      </div>
    </Provider>
  </ThemeProvider>
)

export default TemplateWrapper
