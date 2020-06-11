<template>
    <div class="content">
        <div class="content-canvas">
        </div>
    </div>
</template>

<script>
    export default {
        name: "content_index",
        components: {
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
