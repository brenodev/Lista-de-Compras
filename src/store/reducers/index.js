import { combineReducers } from 'redux'
import list from './List-Reducer'
import form from './Form-Reducer'

export default combineReducers({
  list,
  form
})