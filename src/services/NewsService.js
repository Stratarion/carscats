import api from '@/services/api'

export default {
  allNews () {
    return api().get('news')
  },
  addNews (params) {
    return api().post('news', params)
  },
}