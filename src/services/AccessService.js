import api from '@/services/api'

export default {
    userAccess (params) {
      return api().get('access', params)
    },
    addAccess (params) {

        return api().post('access', params)
    }
}