<template>
    <Card class="modelShow"  >
 <!--            遮罩界面-->
        <div class="design"
             v-if="isShowBtns&&modelList.isDesign"
             @mouseleave="isShowBtns = false"
             @click="text1"
        >
            <Row type="flex" justify="space-between" align="middle" class="designIcon">
                <span class="circle"></span>
<!--                删除控制-->
                <span class="dots"
                      @mouseenter="isShowDots = true"
                      @mouseleave="isShowDots = false">
                    <img src="../../../assets/images/dots.png" alt="">
                </span>
            </Row>

            <Row type="flex" justify="center" class="designBtns">
                <Button class="designInfo" @click="toModelShow">设计详情</Button>
                <Button class="designAgain" @click="toModelEditor">再次编辑</Button>
            </Row>

<!--            删除界面-->
            <Row type="flex" justify="center" align="middle" class="dots-handel"
                 v-if="isShowDots||isCoverDots"
                 @mouseenter.native="isCoverDots=true"
                 @mouseleave.native="isCoverDots=false"
            >
                <div class="self">仅自己可见</div>
                <div class="del">删除</div>
            </Row>
        </div>

<!--        组件主体-->
<!--        遮罩控制-->
        <div class="showImg"  @mouseenter="isShowBtns = true" >
            <img :src=modelList.imgUrl alt="图片无法显示" >
        </div>

        <Row class="showTitle" type="flex" align="middle" justify="start">
            <p>{{ modelList.title }}</p>
        </Row>

        <Row type="flex" justify="space-between" align="middle" class="showInfo">
            <div class="showInfo-L">
                <Avatar v-if="modelList.isDesign"  :src="modelList.avatarUrl"  class="icon-person" />
                <Avatar  v-else icon="ios-person" class="icon-person"/>
                <span class="showName">{{ modelList.name }}</span>
            </div>
            <div class="showInfo-R" v-if="modelList.isDesign">
                <span class="showTime">{{ modelList.time }}</span>
            </div>
        </Row>
    </Card>


</template>
<script>
    export default {
        name: 'modelShowCard',
        props:[
            'modelList',
        ],
        data () {
            return {
                // 判断是否出现遮罩界面
                isShowBtns: false,
                // 两个一起判断是否出现删除界面
                isShowDots: false,
                isCoverDots: false,

                modelDate: {
                    imgUrl: '',
                    title: '佚名',
                    avatar: 'hhhh',
                    name: '闷油瓶',
                    time: '1997-9-21',
                    isDesigin: false,
                },
                modelListpa: this.modelList,
            }

        },
        methods: {
            text1(){
                console.log(111);
                console.log(this.isShowBtns);
            },
            toModelShow(){
                console.log(111111);
                this.$router.push({ name: 'modelShow_index', params: { name: 4444 }});
            },
            toModelEditor(){
                this.$router.push({ name: 'modelEditor_index', params: {userName: 'hunpo'}});
            },

        },
        mounted () {

        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .modelShow{
        height: 3rem;
        .ivu-card-head{
            padding: 0;
            border: none;
        }
        /deep/ .ivu-card-body{
            padding: 0;
            width: 100%;
            height: 100%;

            .showImg{
                height: 70%;
                overflow: hidden;
                >img{
                    width: 100%;
                    height: 100%;
                }
                /*background: cover;*/
            }

            .showTitle{
                height: 15%;
                margin-left: 4%;
                font-weight: bold;
                line-height: 100%;
            }

            .showInfo{
                height: 15%;
                margin: 0 4%;
                .showInfo-L{
                    .showName{
                        margin-left: 0.1rem;
                    }
                }
            }
        }
    }

    .design{
        background: rgba(0, 0, 0,  0.7);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 30%;
        .designIcon{
            height: 25%;
            margin: 0 4%;
            .circle{
                border: 1px solid #fff;
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 50%;
            }
        }
        .designBtns{
            height: 75%;
            >button{
                width: 65%;
                height: 25%;
            }
            .designInfo{

            }
            .designAgain{

            }
        }
        .dots-handel{
            position: absolute;
            top: 16%;
            right: -26px;
            background: #fff;
            z-index: 1;
            width: 1rem;
            height: 0.8rem;
            >div{
                width: 80%;
            }
            >div:hover{
                color: $theme-color;
                background: #b2ffff;
            }
        }
    }

</style>
