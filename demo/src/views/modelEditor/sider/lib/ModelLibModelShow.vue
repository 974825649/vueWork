<template>
    <Card>
        <div class="showList bd">
            <div class="imgWrap">
                <img :src="siderModelList.imgUrl" alt="err">
            </div>
            <Row type="flex" justify="center" align="middle" class="titleWrap">
                <p class="title">{{ siderModelList.title }}</p>
            </Row>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "modelLib_modelShow",
        props:[
            'siderModelList',
        ],
    }
</script>

<style lang="scss" type="text/scss" scoped>

    /deep/.ivu-card-body{
        padding: 0;
        .showList{
            width: 100%;
            height: 1rem;
            .imgWrap{
                width: 100%;
                height: 70%;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .titleWrap{
                height: 30%;
            }
        }
    }

</style>