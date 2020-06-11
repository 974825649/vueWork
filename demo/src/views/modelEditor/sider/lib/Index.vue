<template>
    <Row type="flex" class="modelLib">
<!--        模型预览-->
        <Row type="flex" justify="center" align="middle" class="preWrap">
            <div class="pre bd">
                模型预览    模型预览    模型预览    模型预览    模型预览
                模型预览    模型预览    模型预览    模型预览    模型预览
                模型预览    模型预览    模型预览    模型预览    

            </div>
        </Row>
<!--        图标-->
        <Row type="flex" class="content">
            <div class="content-L bd">
                <div class="iconWrap bd"
                     v-for="(item,value) in siderIconList"
                     :key="item.title">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
<!--            模型展示-->
            <div  class="content-R bd">
                <Row type="flex" justify="center" align="middle" class="search">
                    <Input suffix="ios-search" placeholder="搜索" />
                </Row>
                <Row type="flex" justify="start" align="middle" class="showModel">
                     <div class="showModelList"
                          v-for="(item,index) in siderModelList"
                          :key="item.title">
                         <ModelLibModelShow :siderModelList="item"></ModelLibModelShow>
                     </div>
                </Row>
            </div>
        </Row>
    </Row>
</template>

<script>
    import ModelLibModelShow from './ModelLibModelShow';
    export default {
        name: "modelLib",
        data() {
            return {
                // 图标数据
                siderIconList:[
              
                ],
                //模型数据
                siderModelList:[
                    {
                        title: '模型1',
                        imgUrl:  require('../../../../assets/images/index-intro1.png'),
                        modelUrl: ''
                    },
                    {
                        title: '模型2',
                        imgUrl:  require('../../../../assets/images/index-intro1.png'),
                        modelUrl: ''
                    },
                    {
                        title: '模型3',
                        imgUrl:  require('../../../../assets/images/index-intro1.png'),
                        modelUrl: ''
                    },
                    {
                        title: '模型4',
                        imgUrl:  require('../../../../assets/images/index-intro1.png'),
                        modelUrl: ''
                    },
                    {
                        title: '模型5',
                        imgUrl:  require('../../../../assets/images/index-intro1.png'),
                        modelUrl: ''
                    },
                ]

            }
        },
        components:{
            ModelLibModelShow,
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .bd{
        border: 1px solid #000;
    }
    .modelLib{
        .preWrap{
            width: 100%;
            .pre{
                width: 90%;
                height: 90%;
            }
        }
        .content{
            width: 100%;
            .content-L{
                width: 15%;
                .iconWrap{
                    margin: 0.15rem auto;
                    width: 0.3rem;
                    height: 0.3rem;
                    overflow: hidden;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .content-R{
                width: 85%;
                .search{
                    margin: 10px auto 0;
                    width: 90%;
                }
                .showModel{
                    width: 100%;
                    .showModelList{
                        width: 50%;
                        padding: 0.1rem;
                    }
                }
            }
        }
    }
</style>
