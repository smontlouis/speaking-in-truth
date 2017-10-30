import { Provider } from 'redux-zero/react'
import { ThemeProvider } from 'glamorous'
import theme from '../utils/theme'
import store from '../redux/store'

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
