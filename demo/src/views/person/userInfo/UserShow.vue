<template>
    <!--        个人信息-->
        <Row class="p-center">
            <div class="p-msg">
                <div class="p-btn">
                    <Button @click="todo">编辑</Button>
                </div>
                <div class="p-avatar">
                    <Avatar :src="person.imgUrl" alt="图片无法显示"></Avatar>
                </div>
                <p class="p-name">{{ person.name }}</p>
                <p class="p-profession">{{ person.profession}}</p>
                <Row type="flex" justify="space-around" class="p-other">
                    <div class="group group-address">
                        <Icon type="ios-pin-outline" />
                        <span class="address">{{ person.address}}</span>
                    </div>
                    <div class="group group-mail">
                        <Icon type="ios-mail-outline"/>
                        <span class="mail">{{ person.mail}}</span>
                    </div>
                </Row>
            </div>
        </Row>

</template>

<script>
    export default {
        name: 'userShow',
        components: {},
        data() {
            return {
                //当前用户数据
                person:{
                    imgUrl: require('../../../assets/images/logo.png'),
                    name: '闷油瓶',
                    profession: '建筑设计师',
                    address: '福建,厦门',
                    mail: 'Vampire@163.com',
                },
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            todo(){

            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .p-center{
            margin: auto;
            width: 96%;
            padding-bottom: .4rem;
            border-bottom: 1px solid #bfbfbf;
            .p-msg {
                margin: auto;
                margin-top: .4rem;
                width: 5rem;
                height: 3.3rem;
                .p-btn{
                    width: 0.45rem;
                    height: 0.25rem;
                    margin-left: 4rem;
                    >button{
                        width: 100%;
                        height: 100%;
                    }
                }

                .p-avatar{
                    /*margin-top: 0.2rem;*/
                    width: 1.7rem;
                    height: 1.7rem;
                    margin: auto;
                    overflow: hidden;
                    >span{
                        width: 100%;
                        height: 100%;
                    }
                }

                .p-name{
                    height: 0.3rem;
                    margin-top: 0.25rem;
                    font-size: 0.25rem;
                }

                .p-profession{
                    height: 0.17rem;
                    margin-top: 0.25rem;
                    font-size: 0.15rem;
                }

                .p-other{
                    height: 0.18rem;
                    margin-top: 0.2rem;
                    .group{
                        display: inline-block;
                        >i{
                            margin-right: 0.15rem;
                        }
                    }
                }
            }
        }
</style>
