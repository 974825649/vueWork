<template>
    <div class="header">
        <Row type="flex" justify="start" class="nav-wrap">
            <Row type="flex" justify="center" align="middle" class="logo" @click.native="toIndex">
                <img src="" alt="logo">
            </Row>
            <Menu mode="horizontal"  active-name="1" class="nav">
                <Submenu name="1" class="file">
                    <template slot="title">
                        文件
                    </template>
                    <menu-item name="1-1">导入文件</menu-item>
                    <menu-item name="1-2">导出文件</menu-item>
                </Submenu>
                <menu-item name="2">
                    编辑
                </menu-item>
                <menu-item name="3">
                    视图
                </menu-item>
                <menu-item name="4">
                    相机
                </menu-item>
                <menu-item name="5">
                    绘图
                </menu-item>
                <menu-item name="6">
                    工具
                </menu-item>
                <menu-item name="7">
                    窗口
                </menu-item>
                <menu-item name="8">
                    帮助
                </menu-item>
            </Menu>
        </Row>
    </div>

</template>

<script>
    export default {
        name: "menuHeader",
        methods:{
            //  =》主页
            toIndex(){
                this.$router.push({ name: 'home'});
            },
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .active{
        border: .01rem solid yellow;
    }
    .header{
        z-index: 999;
        height: $modelEditorNav-height;
        background: #fff;
        width: 100%;
        .nav-wrap{
            .logo{
                width: 0.5rem;
            }
            >ul.ivu-menu{
                line-height: $modelEditorNav-height;
                >li {
                    border: none !important;
                }
            }
        }
    }
</style>

