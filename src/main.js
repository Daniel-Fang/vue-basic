import Vue from 'vue';
import App from './App.vue';
import EventBus from 'eventbus-vue';

Vue.config.productionTip = false
Vue.use(EventBus);

new Vue({
  render: h => h(App),
}).$mount('#app')
