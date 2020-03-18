import axios from 'axios'

const baseURL = 'http://localhost:1337/api/v1/'
export const apiClientV1 = axios.create({
  baseURL,
  headers: localStorage.getItem('token') && {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

export async function apiPostSignIn(data) {
  const response = await apiClientV1.post('auth/login', {
    email: data.email,
    password: data.password
  })

  return response.data.token
}

export async function apiPostSignUp(data) {
  const response = await apiClientV1.post('auth/register', {
    email: data.email,
    password: data.password
  })

  return response.data
}

export async function apiGetUser(userId) {
  const response = await apiClientV1.get(`user/${userId}`)

  return response.data
}

export async function apiGetProfile() {
  const response = await axios({
    method: 'get',
    url: `${baseURL}profile`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  return response.data
}