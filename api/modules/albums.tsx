import axios from 'axios'
import endpoint from '../endpoint'
import resource from '../resource'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'ALBUMS'

declare let window: any

export default {
  list (payload: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_LIST`
    const request = resource.get(`${endpoint.albums.index}?${payload}`, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  detail (id: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_DETAIL`
    const request = resource.get(`${endpoint.albums.index}/${id}`, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  create (data: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_CREATE`
    const request = resource.post(`${endpoint.albums.index}`, data, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  update (payload: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_UPDATE`
    const request = resource.put(`${endpoint.albums.index}/${payload.id}`, payload.data, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  delete (id: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_DELETE`
    const request = resource.delete(`${endpoint.albums.index}/${id}`, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  }
}
