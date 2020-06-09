<template>
    <div class="editor-header">
        <Row type='flex' align="middle">
<!--            logo-->
            <Row type="flex" justify="center" align="middle" class="logo">
                <img src="../../assets/images/logo.png" alt="图片无法显示">
            </Row>
<!--            导航栏-->
            <Row type="flex" justify="start" align="middle" class="menu-nav">
                <Menu mode="horizontal"  active-name="1">
                    <menu-item name="1" @click.native="toIndex">
                        首页
                    </menu-item>
                </Menu>
            </Row>

<!--            登录和注册-->
            <Row type="flex" justify="end" align="middle" class="user-login">
                <Avatar class="login-btns" @click.native="toPersonInfo" v-if="showLoginState()"></Avatar>
                <!--                退出登录界面-->
                <div v-if="showLoginState()">
                    <Button @click="changeLoginState">退出登录</Button>
                </div>
                <div class="login-btns" v-else="showLoginState()">
                    <Button class="login" @click= 'showLoginModal' type='text' size="small" shape="circle" >
                        登录
                    </Button>
                    <Button class="regist" @click= 'showLoginModal' type='text' size="small" shape="circle">
                        注册
                    </Button>
                </div>
            </Row>
<!--                登录界面-->
                <Modal v-model="isLoginModal" :mask-closable="false" footer-hide>
                    <LoginIndex @closeModel="isLoginModal=!isLoginModal"></LoginIndex>
                </Modal>

        </Row>
    </div>
</template>

<script>
    import LoginIndex from '../../views/login/Index'
    export default   {
        name: 'home_header',
        components: {
            LoginIndex,
        },
        data() {
            return {
                //登录弹窗是否打开
                isLoginModal: false,
            }
        },
        computed: {
            //监听登录状态
            hasLogin(){
                return this.$store.state.login.loginState;
            }
        },
        watch: {
            //登录成功关闭登录界面
            hasLogin(){
                this.isLoginModal = false;
            }
        },
        created () {
            //解决vuex刷新状态消失问题
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("store") ) {
                this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
                sessionStorage.removeItem('store');
            }
            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload",()=>{
                sessionStorage.setItem("store",JSON.stringify(this.$store.state))
            })
        },
        methods: {
            // => 跳转个人信息页
            toPersonInfo(){
                this.$router.push({ name: 'person_index'});
            },
            // => 跳转首页
            toIndex(){
                this.$router.push({ name: 'home'})
            },
            // 显示登陆界面
            showLoginModal(){
                this.isLoginModal = true;
            },
            //返回登录的状态 true/false
            showLoginState(){
                return this.$store.state.login.loginState;
            },
            //改变登录状态
            changeLoginState(){
                this.$store.dispatch("changeLoginStateFun");
            }
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    #app .editor-header{
        z-index: 999;
        top: 0;
        left: 0;
        position: fixed;
        height: 0.65rem;
        background: #fff;
        @media (max-width: 768px){
            width: 768px!important;
        }
        .ivu-row-flex {
            /*行高*/
            height: 100%;
            /*logo*/
            .logo{
                width: 1.55rem;
                height: 0.45rem;
                >img{
                }
            }
            /*菜单栏*/
            .menu-nav{
                flex: auto;
                .ivu-menu{
                    color: black;
                }
                .ivu-menu-horizontal{
                    height: 0.5rem;
                }
                .ivu-menu-horizontal:after{
                    display: none;
                }
            }
            /*登录按钮组*/
            .user-login{
                width: 1.3rem;
                .login-btns{
                    margin-right: 0.2rem;
                    text-align: right;
                    >button{
                         width: 0.55rem;
                    }
                }
            }
        }
    }

    /*登录框弹窗*/
    /deep/.ivu-modal{
        width: 7rem;
        height: 4.6rem;
        .ivu-modal-content{
            height: 100%;
            .ivu-modal-close{
                display: none;
            }
            .ivu-modal-body{
                height: 100%;
                padding: 0;
            }
        }
    }
</style>
