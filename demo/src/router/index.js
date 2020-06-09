import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/Index.vue'
import person_index from '@/views/person/Index.vue'
import login_index from '@/views/login/Index'
import modelEditor_index from '@/views/modelEditor/Index'
import modelShow_index from '@/views/modelShow/Index'



Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV);

//导出路由
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 路由数组
  routes: [
    { //主页
      path: '/', name: 'home', component: _import('views/home/Index'),
    },
    { //登录页
      path: '/login', name: 'login_index', component: _import('views/login/Index'),
    },
    { //个人页
      path: '/person', name: 'person_index', component: _import('views/person/Index'),
    },
    { //模型编辑页
      path: '/modelEditor', name: 'modelEditor_index', component: _import('views/modelEditor/Index'),
    },
    { //模型展示页
      path: '/modelShow', name: 'modelShow_index', component: _import('views/modelShow/Index'),
    },

  ]
})
