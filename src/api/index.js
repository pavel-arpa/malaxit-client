import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authRequestInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

// const authResponseInterceptor = response => {
//     console.log(response)
//     const { data } = response
//     localStorage.setItem('token', data.token)
//     return response
// }

$authHost.interceptors.request.use(authRequestInterceptor)
// $authHost.interceptors.response.use(authResponseInterceptor)

export {
    $host, $authHost
}