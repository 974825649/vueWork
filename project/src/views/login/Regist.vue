<template>

<!--    注册表单-->
    <Form ref="userData" :model="userData" :rules="rule" >
        <FormItem prop="loginName">
            <Input type="text" v-model="userData.loginName" placeholder="登录名" clearable
                   @on-enter="handleSubmit('userData')">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="name">
            <Input type="text" v-model="userData.name" placeholder="用户名" clearable
                   @on-enter="handleSubmit('userData')">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="userData.password" placeholder="密码" clearable
                   @on-enter.native="handleSubmit('userData')">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="passwordTwo">
            <Input type="password" v-model="userData.passwordTwo" placeholder="确认密码" clearable
                   @on-enter.native="handleSubmit('userData')">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="sub">
            <Button type="primary" :loading="isLoading" @click="handleSubmit('userData')">{{ showLoading }}</Button>
            <Button type="primary" @click="handleReset('userData')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>

</template>

<script>
    import md5 from 'js-md5'
    export default {
        name: 'regist',
        data() {
            //自定义验证：登录名是否重复
            const valideteLoginName = (rule, value, callback) => {
                let params = {
                    loginName: this.userData.loginName,
                };
                this.$http.post( this.$api.checkLoginName, params )
                    .then( res => {
                        if( res.data.code === 0 ){  //为0时 成功
                            callback();
                        }else {
                            callback(new Error('登录名已被注册，请重新输入'))
                        }
                    });
            };
            // 自定义验证：判断两次密码是否一样
            const validetepasswordTwo = (rule, value, callback) => {
                if( value !== this.userData.password ){
                    callback( new Error('两次密码不一致'));
                }else {
                    callback();
                }
            };
            return {
                // 用户数据
                userData: {
                    loginName: '',
                    name: '',
                    password: '',
                    passwordTwo: '',
                    verifyCode: '',
                },
                // 验证规则
                rule: {
                    loginName:[
                        {required: true, message: '登陆名不能为空', trigger: 'blur'},
                        {type: 'string', min: 4, message: '登陆名不能小于4位数', trigger: 'blur'},
                        {validator: valideteLoginName, trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'},
                        {type: 'string', min: 4, message: '用户名不能小于4位数', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码不能小于6位数', trigger: 'blur'}
                    ],
                    passwordTwo: [
                        {validator: validetepasswordTwo, trigger: 'blur'},
                    ],
                },
                //是否登录中
                isLoading: false,
            }
        },
        computed: {
            // 根据是否注册中状态显示注册按钮的值
            showLoading: function () {
                return this.isLoading ? "注册中..." : "注册";
            }
        },
        methods: {
            /*
           * 重置表单
           *  params 表单名
           * */
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            // 判断表单能否提交
            handleSubmit( formname ) {
                this.$refs[ formname ].validate(( valid ) => {
                    if ( valid ) {
                        this.isLoading = true; //更改注册按钮状态
                        //密码加密
                        this.userData.verifyCode = this.randCode(4);
                        let password = this.userData.password + this.userData.verifyCode;
                        let params = {
                            loginName: this.userData.loginName,
                            name: this.userData.name,
                            password: md5(password),
                            verifyCode: this.userData.verifyCode,
                        };
                        //提交表单
                        this.$http.post(this.$api.regist, params)
                            .then(res => {
                                if( res.data.code === 0 ){
                                    this.RegistSuc(res.data.data);
                                    this.toPerson(); //跳转个人页
                                } else {
                                    this.registDef(res.data.data);
                                }
                            });
                    } else {
                        this.registDef();
                    }
                });
            },

            //生成4位随机数(数字+字符）
            randCode(n){
                return  Math.random().toString(36).substr(2).slice(1, n + 1);
            },

            // 注册成功显示
            RegistSuc(msg){
                this.$store.dispatch('changeLoginStateFun');  //改变登录状态
                msg ? this.$Message.success(msg): this.$Message.success('注册成功');
                this.isLoading = false;
            },

            // 登录失败显示
            registDef(msg){
                msg ? this.$Message.error(msg): this.$Message.error('注册失败');
                this.isLoading = false;
            },

            // =》 个人页
            toPerson(){
                this.$router.push({name: 'person_index'})
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
</style>
