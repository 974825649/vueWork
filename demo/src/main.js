import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './registerServiceWorker'

//样式重置
import 'normalize.css'

//导入公共样式
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/styles/index.scss'
import '@/styles/global.scss'


// 导入http连接
import http from './api/http.js'
// 导入公共方法
import fun from './utils/commonFun.js'
// 导入全局API接口
import api from './api/globalApi.js'

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$fun = fun;
Vue.prototype.$api = api;

// Vue.prototype.$editor = Editor;

Vue.use( iView );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
