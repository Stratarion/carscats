import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.directive('scroll', {
  inserted: function (el, binding) {
      let f = function (evt) {
          if (binding.value(evt, el) ) {
              window.removeEventListener('scroll', f)
              console.log('if')
          } else {
              console.log('else')
          }
          
      }
      window.addEventListener('scroll', f)
  }

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
