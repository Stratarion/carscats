import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import moment from 'moment'


import router from './router';
import store from './store'



//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner as fasSpinner, faUser as fasUser, faCog, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser, faIdBadge as farIdBadge} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.prototype.moment = moment
 
library.add(fasUser, fasSpinner, farUser, farIdBadge, faCog, faAngleDoubleDown)

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(moment)
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  store,
   
}).$mount('#app');
