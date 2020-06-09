<template>
    <Row type="flex" justify="start" align="middle" class="options">
        <div class="common"
             v-for="(item,index) in optionsList"
             :key="item.title"
        >
            <Row type="flex" justify="center" align="middle"
                 @click.native="modOperate(item.key)"
                 @mouseover.native="enter(index)" ref="imgs"
            >
                <img :src="item.imgUrl" alt="error" >
            </Row>
            <p>{{ item.title }}</p>
        </div>
        <Button type="primary" style="width: 20px;height: 20px;" @click="test"></Button>
    </Row>
</template>

<script>
    import {toolConfig} from './config'
    export default {
        name: 'tools',
        components: {},
        data() {
            return {
                optionsList: toolConfig.optionsList,
            }
        },
        created() {},
        mounted() {},
        methods: {
            test(){
              console.log(toolConfig);
            },
            //模型操作
            modOperate(key){
                handleAdd( key, this.$editor.editor );
            },

            //鼠标移入样式
            enter(index){
                // console.log(this.$refs.imgs[index]);
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .options{
        width: 100%;
        height: $modelEditorOption-height;
        @media (max-width: 992px) {
            width: 992px;
        };

        .common{
            width: 0.5rem;
            height: 0.5rem;
            margin: 0.1rem;
            overflow: hidden;
            >div{
                height: 60%;
            }
            >p{
                cursor: default;
                line-height: 0.2rem;
                height: 40%;
            }
        }
    }
</style>
