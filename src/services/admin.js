import api from '@/services/api'

export default {
    sendEmails (params) {
        return api().post('/mail-send', params)
    },
    
}