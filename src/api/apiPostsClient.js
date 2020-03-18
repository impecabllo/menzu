import { apiClientV1 } from './apiClient'

export async function apiCreatePost(data) {
  const response = await apiClientV1.post('post', data)

  return response.data
}
