<template>
    <div class="wrap">
        <HomeHead></HomeHead>
        <HomeContent></HomeContent>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
    import HomeHead from '../../components/header/HomeHeader.vue'
    import HomeContent from './Content'
    import HomeFooter from './Footer'
    export default {
        name: "home",
        components:{
            HomeHead,HomeContent,HomeFooter
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

</style>
