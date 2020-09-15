import { HYDRATE } from 'next-redux-wrapper'
import {DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER} from './../actions/counter'

let initial = {
  value: 0
}

const counter = (state: any = initial, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload}
    case SET_COUNTER:
      return {...state, value: action.payload}
    case INCREMENT_COUNTER:
      return {...state, value: state.value + 1}
    case DECREMENT_COUNTER:
      return {...state, value: state.value - 1}
    default:
      return {...state}
  }
}

export default counter