// Namespace
const NAMESPACE = 'FAVORITE'

//Action Types
export const SET_ENTRIES = `${NAMESPACE}_SET_ENTRIES`
export const LOCAL_DATA = `${NAMESPACE}_LOCAL_DATA`

//Action Creator
export const setEntriesFavorite = (value: any) => ({
    type: SET_ENTRIES,
    payload: value
})
