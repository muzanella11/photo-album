//Action Types
export const SET_COUNTER = "SET_COUNTER"
export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"


//Action Creator
export const setCounter = (value: any) => ({
    type: SET_COUNTER,
    payload: value
})

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
})