import createStore from 'redux-zero'
import { state as ui } from './modules/ui'

const initialState = {
  ui
}

const store = createStore(initialState)

export default store
