import axios from 'axios'
import { camelize, decamelize } from '@ridi/object-case-converter'

const apiClientV1 = axios.create({
  baseURL: 'https://reqres.in/api/'
})

export async function apiPostSignIn(data) {
  const response = await apiClientV1.post('login', {
    email: data.email,
    password: data.password
  })

  return response.data.token
}

export async function apiPostSignUp(data) {
  const response = await apiClientV1.post('register', {
    email: data.email,
    password: data.password
  })

  return response.data.token
}