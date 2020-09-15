const errorPrefix = '[ERROR] '
const errorHandler = {
  somethingWrong () {
    console.error(errorPrefix, 'Something wrong :(')
  },

  badRequest () {
    console.error(errorPrefix, 'Bad Request :(')
  },

  unauthenticated () {
    console.error(errorPrefix, 'Unauthenticated :(')
  }
}

const handler = (error: any) => {
  const response = error.response

  if (typeof response === 'undefined' || typeof response.status === 'undefined') {
    errorHandler.somethingWrong()
    return Promise.reject(error)
  }

  switch (response.status) {
    case 400:
      errorHandler.badRequest()
      break
    case 401:
      errorHandler.unauthenticated()
      break
    default:
      break
  }

  return Promise.reject(error)
}

export default handler
