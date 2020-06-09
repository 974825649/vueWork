<template>
    <div class="material ">
        <div class="m-top">
            <div class="m-top-view bdGray">
                <img src="" alt="err">
            </div>
            <div class="m-top-other">
                <div class="other-top">
                    <input class="m-top-showTitle"></input>
                    <Icon type="ios-add" class="m-top-icon"/>
                    <Icon type="md-color-filter" class="m-top-icon"/>
                </div>
                <div class="other-bottom">
                    <Button type="primary" icon="ios-home" class="m-top-button" >材质库</Button>
                </div>
            </div>
        </div>
        <div class="m-content">
<!--            搜索材质图片-->
            <Row type="flex" justify="center" align="middle" class="selectWrap bdGray">
                <Select  size="small" style="width: 270px" class="mat-select">
                    <Option v-for="(item,index) in matList" :value="item.title" :key="index">{{ item.title }}</Option>
                </Select>
            </Row>
<!--            显示材质图片-->
            <Scroll :on-reach-bottom="showMoreMat" class="mat-scroll bdGray" height="115" loading-text="努力加载中">
                <Row type="flex" justify="center" align="middle" class="selectImg">
                    <Row type="flex" justify="start" align="top" class="materialImgWrap">
                        <div class="materialImg"
                             v-for="(item,index) in matList"
                             :key="index">
                            <img :src="item.imgUrl" alt="err">
                        </div>
                    </Row>
                </Row>
            </Scroll>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m_material",
        data(){
            return {
                matList:[
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '黄金'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '白金'
                    },

                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '钻石'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },

                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },
                    {
                        imgUrl: require('../../../../../assets/images/index-intro1.png'),
                        title: '水面'
                    },


                ],
            }
        },
        methods:{
            showMoreMat(){
                return new Promise(resolve =>{
                    setTimeout(() => {
                        console.log('还有');
                        // const last = this.matList[this.matList.length - 1];
                        // for (let i = 0; i < this.matList.length; i++) {
                        //     this.matList.push({imgUrl: ''})
                        // }
                        resolve();
                    },1000)
                })
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .material{
        /*选中图片预览*/
        .m-top{
            width: 100%;
            height: 0.8rem;
            .m-top-view{
                display: inline-block;
                width: 0.85rem;
                height: 100%;
                border: 1px solid $borderGray;
                vertical-align: top;
                >img{
                    width: 80%;
                    height: 100%;
                }
            }
            .m-top-other{
                display: inline-block;
                margin-left: 0.1rem;
                height: 100%;
                .other-top{
                    .m-top-showTitle{
                        width: 1.2rem;
                        height: .25rem;
                    }
                    .m-top-icon{
                        width: .2rem;
                        height: .25rem;
                    }
                }
                .other-bottom{
                    .m-top-button{
                        margin-top: 0.22rem;
                        width: .7rem;
                        height: .25rem;
                    }
                }


            }
        }
        /*显示所有图片*/
        .m-content{
            /*搜索材质图片*/
            .selectWrap{
                margin-top: 0.07rem;
                width: 100%;
                height: 0.4rem;
            }
            /*显示材质图片*/
            .selectImg {
                .materialImgWrap {
                    width: 93%;
                    height: 86%;
                    .materialImg {
                        width: 20%;
                        height: 0.5rem;
                        padding: 0.01rem;
                        > img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>