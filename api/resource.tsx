import axios from 'axios'
import handler from './handler'

function createResource () {
  const baseUrl = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'

  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 100000 // Too slow response from server :(
  })

  instance.interceptors.request.use((config: any) => {
    // for intercept request or header request
    return config
  }, (error: any) => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use((response: any) => {
    return Promise.resolve(response)
  }, (error: any) => {
    return handler(error)
  })

  return instance
}

export default createResource()
