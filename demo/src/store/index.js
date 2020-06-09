import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'

Vue.use(Vuex);

//创建Vuex实例
const store = new Vuex.Store({
    modules:{
        login
    }
});

//导出store
export default store