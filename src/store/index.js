import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

Vue.use(Vuex);

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
