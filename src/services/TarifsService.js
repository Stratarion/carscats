import api from '@/services/api'

export default {
  fetchTarifs () {
    return api().get('tarifs')
  },
  addTarif (params) {
    return api().post('tarifs', params)
  },
  getPost (params) {
    return api().get(`tarifs/${params.id}`)
  },
  updatePost (params) {
    return api().put(`tarifs/${params.id}`, params)
  },
  deletePost (id) {
    return api().delete(`tarifs/${id}`)
  }
}