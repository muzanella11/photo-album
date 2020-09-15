import { combineReducers } from 'redux'
import counter from './counter'
import albums from './albums'

const rootReducer = combineReducers({
  counter,
  albums
})

export default rootReducer