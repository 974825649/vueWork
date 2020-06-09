<template>
    <div class="index-content">
<!--        网站宣传图-->
        <Row class="content-up">
            <div class="content-up-bg">
                <div class="content-up-center">
                    <div class="center-left">
                        <img src="../../assets/images/index-text.png" alt="图片无法显示" class="center-left-text">
                         <Button shape="circle" @click="toPerson" class="center-left-btn">马上试用</Button>
                    </div>
                    <div class="center-right">
                        <img src="../../assets/images/index-intro1.png" alt="图片无法显示" class="center-left-right">
                    </div>
                </div>
            </div>
<!--            模型展示卡片-->
            <div class="content-up-center">
                <img src="../../assets/images/index-intro2.png" alt="图片无法显示" class="center-up-bottom ">
            </div>
        </Row>
        <Row class="content-down">
            <div class="content-down-center">
                <Row type="flex" class="show-title" justify="start">
                    <span class="title-icon"></span>
                    <span class="title-text">优秀模型</span>
                </Row>
                <Row class="show-content" type="flex" justify="start">
                    <Col span="8"
                         v-for="(item,index) in modelList"
                         :key="index"
                    >
                        <modelShowCard :modelList="item" @click.native="toModelShow"></modelShowCard>
                    </Col>
                </Row>
            </div>
        </Row>
    </div>
</template>

<script>
    import modelShowCard from '../../components/common/card/ModelShowCard.vue'
    export default {
        name: "home_content",
        components:{
            modelShowCard,
        },
        data(){
            return{
                // 模型卡片数据
                modelList:[
                    {
                        imgUrl: require('../../assets/images/index-intro1.png'),
                        title: '博物馆',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '闷油瓶',
                        time: '1997-9-21',
                        isDesign: false,
                    },
                    {
                        imgUrl: require('../../assets/images/index-intro2.png'),
                        title: '楼观剑',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '魂魄1',
                        time: '1997-9-21',
                        isDesign: false,
                    },
                    {
                        imgUrl: require('../../assets/images/login-img.png'),
                        title: '楼观剑',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '魂魄2',
                        time: '1997-9-21',
                        isDesign: false,
                    },
                    {
                        imgUrl: require('../../assets/images/index-intro1.png'),
                        title: '楼观剑',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '魂魄3',
                        time: '1997-9-21',
                        isDesign: false,
                    },
                    {
                        imgUrl: '',
                        title: '楼观剑',
                        avatarUrl: '',
                        name: '魂魄4',
                        time: '1997-9-21',
                        isDesign: false,
                    },

                ],
            }
        },
        methods:{
            toPerson(){
                this.$router.push({ name: 'person_index' });
            },
            // => 模型展示页
            toModelShow(){
                this.$router.push({ name: 'modelShow_index' });
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .index-content {
        min-width: 7.68rem;
        background: #fff;
        margin-top: 0.65rem;
        /*网站宣传图*/
        .content-up {
            .content-up-bg{
                background-image: url("../../assets/images/index-bg.png");
                background-repeat:no-repeat;
                background-position: 0 0.2rem ;
                padding: 4% 0;
                .content-up-center {
                    .center-left{
                        width: 40%;
                        display: inline-block;
                        vertical-align: top;
                            .center-left-text {
                                width: 80%;
                            }
                            .center-left-btn {
                                display: flex;
                                width: 1.8rem;
                                height: 0.4rem;
                                margin-top: 3%;
                                margin-left: 12%;
                                color: #fff;
                                font-size: 0.2rem;
                                font-weight: 300;
                                background-color: $theme-color;
                                span{
                                    margin: auto;
                                }
                            }
                    }

                    .center-right {
                        display: inline-block;
                        width: 60%;
                        >img{
                            width: 100%;
                        }
                    }
                }
            }
            .content-up-center {
                margin-bottom: -2%;
                .center-up-bottom {
                    width: 100%;
                }
            }
        }
        /*模型卡片的主体*/
        .content-down {
            width: 100%;
            background: #f5f5f5;
            padding: 4% 0;

            .content-down-center {
                margin: auto;
                @media (max-width: 768px) {
                    width: 768px;
                }
                @media (min-width: 1200px) {
                    width: 1200px;
                }
                /*模型标题*/
                .show-title {
                    .title-icon {
                        display: inline-block;
                        width: 0.07rem;
                        height: 0.14rem;
                        margin-right: 0.1rem;
                        background: $theme-color;
                    }
                }

                .show-content{
                    .ivu-col{
                        padding: 1%;
                    }
                }
            }
        }
    }
    /*公共样式*/
    .content-up-center{
        margin: auto;
        @media (max-width: 768px) {
            width: 768px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
    }
</style>
