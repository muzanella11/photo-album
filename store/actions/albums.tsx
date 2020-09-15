import api from './../../api'

// Namespace
const NAMESPACE = 'ALBUMS'

//Action Types
export const SET_ENTRIES = `${NAMESPACE}_SET_ENTRIES`
export const FETCH_ENTRIES = `${NAMESPACE}_FETCH_ENTRIES`
export const FETCH_DETAIL = `${NAMESPACE}_FETCH_DETAIL`


//Action Creator
export const setEntries = (value: any) => ({
    type: SET_ENTRIES,
    payload: value
})

export const actionMethod = {
    [FETCH_ENTRIES] () {
        return new Promise((resolve, reject) => {
            const fetchAll = (async () => {
                try {
                    const albums = await api.albums.list('').then(res => res.data)

                    let result = albums.map(async (itemAlbum: any) => {
                        const photos = await api.photos.list(`albumId=${itemAlbum.id}`).then(res => res.data)
                        const userDetail = await api.users.detail(itemAlbum.userId).then(res => res.data)

                        const result = {
                            ...itemAlbum,
                            photos,
                            userDetail
                        }
        
                        return result
                    })
    
                    return Promise.all(result)
                } catch (error) {
                    console.info('error : ', error)
                    return error
                }
            })

            fetchAll()
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    },

    [FETCH_DETAIL] (id: any) {
        return new Promise((resolve, reject) => {
            const fetchAll = (async () => {
                try {
                    const albums = await api.albums.list(`id=${id}`).then(res => res.data)

                    let result = albums.map(async (itemAlbum: any) => {
                        const photos = await api.photos.list(`albumId=${itemAlbum.id}`).then(res => res.data)
                        const userDetail = await api.users.detail(itemAlbum.userId).then(res => res.data)

                        const result = {
                            ...itemAlbum,
                            photos,
                            userDetail
                        }
        
                        return result
                    })
    
                    return Promise.all(result)
                } catch (error) {
                    console.info('error : ', error)
                    return error
                }
            })

            fetchAll()
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }
}