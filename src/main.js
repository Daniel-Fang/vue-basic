import Vue from 'vue'
import App from './App.vue'
import EventBus from '@/plugins/eventBus.js';

Vue.config.productionTip = false
Vue.use(EventBus);

new Vue({
  render: h => h(App),
}).$mount('#app')
