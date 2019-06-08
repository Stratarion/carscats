import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';


//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner as fasSpinner, faUser as fasUser, faCog, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser, faIdBadge as farIdBadge} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(fasUser, fasSpinner, farUser, farIdBadge, faCog, faAngleDoubleDown)


Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
