
// const http = `http://192.168.1.130:8531`;
const http = `http://192.168.1.148:8071`;
const globalApi = {
    /*
    登录和注册界面
    */
    //注册码
    validate: `${http}/api/verify/mixcode`,
    //检测用户名重复
    checkLoginName: `${http}/api/account/checkusername`,
    //注册表提交
    regist: `${http}/api/account/register`,
    //登录表提交检测
    randKey: `${http}/api/account/randkey`,
    //登录表提交
    login: `${http}/api/account/encrplogin`,

};

export default globalApi
