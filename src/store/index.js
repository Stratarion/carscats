import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(Vuex);
Vue.use(VueQuillEditor, /* { default global options } */)
export default new Vuex.Store({
    state: {
        test: 'test',
        user
    },
    modules: {
        user,
    },
    getters: {
        isUserLogIn() {
            return this.user ? true : false
        }
    }
})
