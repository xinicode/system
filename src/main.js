import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';
import router from './router';
Vue.use(ElementUI)
Vue.config.productionTip = false


Vue.prototype.url = 'http://139.196.42.209:5004';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
