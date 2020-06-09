<template>
    <div class="modelShowWrap">
        <HomeHeader></HomeHeader>
        <div class="modelShow">
            <h1>模型展示页</h1>
        </div>
    </div>
</template>

<script>
    import HomeHeader from '../../components/header/HomeHeader'
    export default {
        name: "modelShow_index",
        components: {
            HomeHeader,
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .modelShowWrap{
        height: 100%;
        .modelShow{
            padding-top: .65rem;
            height: 100%;
        }
    }

</style>
