<template>
    <div class="content">
        <div class="content-canvas">
            <ThreeEditor></ThreeEditor>
        </div>
    </div>
</template>

<script>
    import ThreeEditor from '../../threeJs/Index'
    export default {
        name: "content_index",
        components: {
            ThreeEditor,
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .content{
        flex: auto;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .content-canvas{
            width: 100%;
            height: 100%;
        }
    }
</style>
