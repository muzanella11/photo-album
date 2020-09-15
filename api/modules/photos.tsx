import axios from 'axios'
import endpoint from '../endpoint'
import resource from '../resource'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'PHOTOS'

declare let window: any

export default {
  list (payload: any) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_LIST`
    const request = resource.get(`${endpoint.photos.index}?${payload}`, {
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
    const request = resource.get(`${endpoint.photos.index}/${id}`, {
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
    const request = resource.post(`${endpoint.photos.index}`, data, {
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
    const request = resource.put(`${endpoint.photos.index}/${payload.id}`, payload.data, {
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
    const request = resource.delete(`${endpoint.photos.index}/${id}`, {
      cancelToken: new AxiosCancelToken((cancelRequest: any) => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  }
}
