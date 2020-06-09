const SET_LOGINSTATE = 'SET_LOGINSTATE';  //登录状态
const login = {
    state: {
        loginState: false,
    },
    mutations: {
        [SET_LOGINSTATE](state){
            state.loginState = !state.loginState;
        },
    },
    actions: {
        changeLoginStateFun({commit}){
            commit(SET_LOGINSTATE);
        }
    }
};

export default login