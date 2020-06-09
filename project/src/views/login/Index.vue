<template>
    <Row class="login-wrap">
<!--        侧边图-->
        <Col span="10" style="height: 100%">

            <div class="login-wrap-L">
                <img src="../../assets/images/login-img.png" alt="图片无法显示">
            </div>
        </Col>
<!--        登录主界面-->
        <Col span="14" style="height: 100%">
            <div class="login-wrap-R">
<!--                关闭按钮图标-->
                <Icon type="ios-close-circle-outline" size="20" class="close" @click="closeLoginModel"/>
                <Row type="flex" justify="center" align="middle" class="login-wrap-R-img">
                    <img src="../../assets/images/login-logo.png" alt="图片无法显示">
                </Row>
<!--                登录面板-->
                <Tabs :value="initLogin" class="login-wrap-R-tabs">
                    <TabPane label="登录" name="login">
                        <Login></Login>
                    </TabPane>
                    <TabPane label="注册" name="regist">
                        <Regist></Regist>
                    </TabPane>
                </Tabs>
            </div>
        </Col>
    </Row>
</template>

<script>
    import Login from './Login';
    import Regist from './Regist';
    export default {
        name: 'login_index',
        components:{
            Login,Regist
        },
        data(){
            return {
                // 默认面板
                initLogin: 'login',
            }
        },
        mounted() {
            /*
            * 判断默认面板
            * oprate = 1 login，= 2 regist*/
            this.initTab( this.$route.params.oprate );
        },
        methods:{
            //向父元素发射关闭登录·弹出框
            closeLoginModel(){
                this.$emit('closeModel');
            },
            //定位初始标签
            initTab(n){
                if( n === 1 ){
                    this.initLogin = 'login'
                }else if( n === 2 ){
                    this.initLogin = 'regist'
                }
            },

        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .login-wrap {
        width: 100%;
        height: 100%;

        .login-wrap-L {
            height: 100%;
            overflow: hidden;

            > img {
                height: 100%;
            }
        }

        .login-wrap-R {
            height: 100%;

            .close{
                position: absolute;
                right: 0;
            };
            .close:hover{
                cursor: pointer;
            }

            .login-wrap-R-img {
                height: 30%;

                > img {
                    height: 100%;
                }
            }

            /*子组件 登录框 样式*/
            .login-wrap-R-tabs {
                height: 70%;

                /deep/.ivu-tabs-nav-scroll{
                    display: flex;
                    justify-content: center;
                }

                /deep/.ivu-tabs-content{
                    .ivu-form-item {
                        display: block;
                        text-align: center;
                        margin: auto;
                        margin-top: 7%;
                        width: 60%;
                    }

                    /*验证码样式*/
                    .verifyCode{
                        .ivu-input-group-append{
                            padding: 0!important;
                            width: .8rem;
                            border: none;
                            .vCode-img{
                                display:inline-block;
                                width: 100%!important;
                                >img{
                                    width: 100%!important;
                                }
                            }
                        }
                    }
                }



            }
        }
    }




</style>

