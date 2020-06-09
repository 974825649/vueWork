<template>
    <div class="tbs-wrap bdGray" >
        <Tabs value="prop" size="small" class="siderTabs">
            <TabPane label="属性面板" name="prop" icon="md-flower" >
                <ModelProperty></ModelProperty>
            </TabPane>
            <TabPane label="模型库" name="lib" icon="ios-home" >
                <ModelLib></ModelLib>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import ModelLib from './lib/Index'
    import ModelProperty from './Props/Index'
    export default {
        name: "siderbar_index",
        components:{
            ModelLib,ModelProperty
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .tbs-wrap{
        height: 97%;
        overflow-y: scroll;
        /deep/.siderTabs{
            text-align: left;
            .ivu-tabs-bar{
                margin: 0;
            }
        }
    }

</style>
