// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入外部组件
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

//引入公共css
import './assets/css/reset.css'

//引入自定义全局指令
import directives from '@/utils/directives.js'
Vue.use(directives)

//引入请求接口函数
import $axios from '@/utils/api.js';
Vue.prototype.$axios=$axios;


Vue.config.productionTip = false

Vue.prototype.$echarts = echarts 
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
