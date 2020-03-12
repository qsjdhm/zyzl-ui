import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import YwVue from '@'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(YwVue)


new Vue({
  el: '#app',
  render: h => h(App)
})
