import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import _ from 'lodash'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import router from './router'
import Tool from '@/utils/tools'

Vue.prototype.$tools = Tool;

Vue.prototype._ = _; //引入到全局


Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

