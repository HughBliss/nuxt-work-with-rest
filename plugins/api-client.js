export default function ({ $axios, store, redirect }, inject) {
  const api = $axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  api.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  api.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  inject('api', api)
}
