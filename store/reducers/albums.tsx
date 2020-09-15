import { HYDRATE } from 'next-redux-wrapper'
import { SET_ENTRIES } from '../actions/albums'

let initial = {
  entries: []
}

const albums = (state: any = initial, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload}
    case SET_ENTRIES:
      return {...state, entries: action.payload}
    default:
      return {...state}
  }
}

export default albums