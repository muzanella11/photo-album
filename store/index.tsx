import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const makeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

const store = createWrapper(makeStore, {debug: true})

export default store