import axios from 'axios'

const apiClientV1 = axios.create({
  baseURL: 'http://localhost:1337/api/v1/',
  headers: localStorage.getItem('token') && {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

export async function apiPostSignIn(data) {
  const response = await apiClientV1.post('auth/login', {
    email: data.email,
    password: data.password
  })

  localStorage.setItem('token', response.data.token)
  localStorage.setItem('email', data.email)

  return response.data
}

export async function apiPostSignUp(data) {
  const response = await apiClientV1.post('auth/register', {
    email: data.email,
    password: data.password
  })

  return response.data
}

export async function apiGetUser(userId) {
  const response = await apiClientV1.get(`user/${userId ? userId : ''}`)

  return response.data
}