<template >
    <Layout>
        <Header>
            <MenuHeader></MenuHeader>
        </Header>
        <Layout>
            <i-content>
                <ContentIndex></ContentIndex>
            </i-content>
            <Sider :class="{shrinkSider: isShrinkSider,}">
                <Button @click="toggleSider">test</Button>
                <div v-if="isShrinkSider">显示缩小侧边栏</div>
                <SiderIndex v-else="isShrinkSider"></SiderIndex>
            </Sider>
        </Layout>
    </Layout>
</template>

<script>
    import MenuHeader from '../../components/header/menuHeader/MenuHeader.vue'
    import SiderIndex from './sider/Index'
    import ContentIndex from './content/Index'
    export default {
        name: "modelEditor_index",
        components:{
            MenuHeader,SiderIndex,ContentIndex
        },
        data () {
            return {
                //缩小后侧边栏样式
                isShrinkSider: false,
            };
        },
        methods:{
            //改变侧边栏伸缩状态
            toggleSider(){
                this.isShrinkSider = !this.isShrinkSider;
            }
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    $newSiderWidth: 0.4rem;
    .ivu-layout{
        height: 100%;
        overflow: hidden;
        .ivu-layout-header{
            background: #fff;
            height: $modelEditorNav-height;
            line-height: 100%;
            padding: 0;
        }

        .ivu-layout-sider{
            width: $modelEditorSider-width!important;
            min-width: $modelEditorSider-width!important;
            max-width: $modelEditorSider-width!important;
            flex: 0 0 $modelEditorSider-width!important;
            background: #fff;
        }

        .shrinkSider{
            width: $newSiderWidth!important;
            min-width: $newSiderWidth!important;
            max-width: $newSiderWidth!important;
            flex: 0 0 $newSiderWidth!important;
            background: #fff;
        }
    }


</style>
