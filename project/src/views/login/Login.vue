<template>
    <!--                        登录表单-->
    <Form ref="userData" :model="userData" :rules="rule" >
<!--        登录名-->
        <FormItem prop="loginName">
            <Input type="text" v-model="userData.loginName" placeholder="登录名" clearable
                   @on-enter="handleSubmit('userData')">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
<!--        密码-->
        <FormItem prop="password">
            <Input type="password" v-model="userData.password" placeholder="密码" clearable
                   @on-enter="handleSubmit('userData')">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
<!--        验证码-->
        <FormItem prop="verifyCode" class="verifyCode">
            <Input type="text" v-model="userData.verifyCode" placeholder="验证码"
                   @on-enter="handleSubmit('userData')" >
                 <span slot="append"  class="vCode-img">
                     <img title="点击刷新" :src="vcUrl" alt="验证码" @click="refreshVCode" />
                 </span>
            </Input>
        </FormItem>
<!--        提交按钮-->
        <FormItem class="sub">
            <Button type="primary" :loading="isLoading" @click="handleSubmit('userData')" >{{ showLoading }}</Button>
            <Button type="primary" @click="handleReset('userData')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>

<script>
    import md5 from 'js-md5'
    export default {
        name: 'login',
        data() {
            // 验证登录名
            const valideteLoginName = (rule, value, callback) => {
                let params = {
                    loginName: this.userData.loginName,
                };
                /*
                * 实时判断用户名是否重复
                * params 判断用户名的接口 用户名
                * */
                this.$http.post( this.$api.checkLoginName, params )
                    .then( res => {
                        if( res.data.code === 0 ){  //为0时，数据库没有该用户
                            callback(new Error('登录名不存在，请重新输入'));
                        }else {
                            callback()
                        }
                    });
            };
            return {
                // 验证码地址
                vcUrl: '',
                // 用户数据
                userData: {
                    loginName: '',
                    password: '',
                    verifyCode: '',
                },
                // 表单验证规则
                rule: {
                    loginName: [
                        {required: true, message: '用户名不能为空', trigger: 'blur' },
                        {validator: valideteLoginName, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码不能小于6位数', trigger: 'blur'}
                    ],
                    verifyCode: [
                        {required: true, message: '验证码不能为空', trigger: 'blur'},
                    ]
                },
                //是否登录中
                isLoading: false,
            }
        },
        computed: {
            // 根据是否登录中状态显示登录按钮的值
            showLoading: function () {
                return this.isLoading ? "登录中..." : "登录";
            }
        },
        created(){
            // 获取验证码
            this.refreshVCode();
        },
        methods: {
            /*
            * 重置表单
            *  params 表单名
            * */
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            /*
            * 判断是否可以提交
            * params 表单名
            * */
            handleSubmit ( name ) {
                // vaild为true,可以提交 false,拒绝提交
                this.$refs[name].validate((valid) => {
                    if ( valid ) {
                        this.isLoading = true;   //更改是否登录中的状态
                        let paramsVcode = {
                            loginName: this.userData.loginName,
                            verifyCode: this.userData.verifyCode,
                        };
                        /*
                        * 判断验证码是否正确
                        * params 判断验证码接口  用户名，验证码
                        * */
                        this.$http.post( this.$api.randKey, paramsVcode)
                            .then( res => {
                                if( res.data.code === 0){
                                    return res.data.data;    //成功返回加密秘钥
                                }else {
                                    this.loginDef(res.data.errmsg);
                                }
                            }).then( res => {
                                if ( res ) {
                                    let paramsUserData = {
                                        loginName: this.userData.loginName,
                                        //md5 加密密码
                                        password: md5(md5(this.userData.password + res) + this.userData.verifyCode),
                                    };
                                    /*
                                    * 判断是否能登录
                                    * params 判断能否登录的接口 用户名，加密后的密码
                                    * */
                                    this.$http.post(this.$api.login, paramsUserData)
                                        .then(res => {
                                            if (res.data.code === 0) {
                                                this.loginSuc('登录成功');
                                            }else {
                                                this.loginDef(res.data.errmsg);
                                            }
                                        })
                                }
                            })
                    } else {
                        this.loginDef();
                    }
                })
            },

            //刷新验证码
            refreshVCode(){
                this.vcUrl = this.$api.validate + '?' + Math.random();
                this.userData.verifyCode = null;
            },

            // 登陆成功显示
            loginSuc(msg){
                this.$store.dispatch('changeLoginStateFun');  //改变登录状态
                this.$Message.success(msg);
                this.isLoading = false;
            },

            // 登录失败显示
            loginDef(msg){
                msg ? this.$Message.error(msg): this.$Message.error('登录失败');
                this.refreshVCode();   //失败刷新验证码
                this.isLoading = false;
            },
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
</style>
