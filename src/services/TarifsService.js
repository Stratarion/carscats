import api from '@/services/api'

export default {
  fetchTarifs () {
    return api().get('tarifs')
  },
  addTarif (params) {
    return api().post('tarifs', params)
  }
}