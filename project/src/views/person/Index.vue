<template>
    <div class="person-info">
<!--        公共头部-->
        <HomeHeader></HomeHeader>
<!--        个人信息-->
        <UserIndex></UserIndex>
<!--        模型列表-->
        <div class="model-show">
            <Row class="s-center">
                <Row type="flex" justify="start" class="s-btns">
                    <Button class="my-design" shape="circle">我的设计</Button>
                    <Button class="new-design" shape="circle"
                    @click="toModelEditor">新的设计</Button>
                </Row>
                <Row type="flex" justify="start" class="s-model">
                        <Col span="6"
                             v-for="(item,index) in modelList"
                             :key="index">
                            <modelShowCard :modelList="item"></modelShowCard>
                        </Col>
                </Row>
            </Row>
        </div>

    </div>
</template>

<script>
    import HomeHeader from '../../components/header/HomeHeader.vue'
    import modelShowCard from '../../components/common/card/ModelShowCard.vue'
    import UserIndex from './userInfo/Index'
    export default {
        name: 'person_index',
        components: {
            UserIndex,HomeHeader,modelShowCard,
        },
        data(){
            return{
                // 模型卡片
                modelList:[
                    {
                        imgUrl: require('../../assets/images/index-intro1.png'),
                        title: '博物馆',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '闷油瓶',
                        time: '1997-9-21',
                        isDesign: true,
                    },
                    {
                        imgUrl: require('../../assets/images/index-intro2.png'),
                        title: '楼观剑',
                        avatarUrl: require('../../assets/images/index-intro1.png'),
                        name: '魂魄1',
                        time: '1997-9-21',
                        isDesign: true,
                    },
                ],
            }
        },
        methods: {
            // => 模型编辑页
            toModelEditor(){
                this.$router.push({ name: 'modelEditor_index'});
            },
        },
    };
</script>

<style lang="scss" type="text/scss" scoped>
    .person-info {
        background: #fff;
        margin-top: 0.65rem;
        .model-show{
            .s-center{
                margin: auto;
                width: 96%;
                padding-bottom: 0.4rem;
                padding-top: 0.2rem;
                border-bottom: 1px solid #bfbfbf;
                .s-btns{
                    >button{
                        width: 0.8rem;
                    }
                }
                .s-model{
                    /*margin-top: 0.2rem;   */
                    .ivu-col{
                        padding: 1%;
                    }
                }
            }
        }

    }
</style>
