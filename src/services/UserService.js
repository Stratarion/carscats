import api from '@/services/api'


export default {
    registerUser (params) {
        return api().post('/register', params)
    },
    authUser (params) {
        return api().post('/login', params)
    }
}