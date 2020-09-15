import { combineReducers } from 'redux'
import counter from './counter'
import albums from './albums'
import favorite from './favorite'

const rootReducer = combineReducers({
  counter,
  albums,
  favorite
})

export default rootReducer