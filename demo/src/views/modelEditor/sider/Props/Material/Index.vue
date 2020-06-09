<template>
    <div class="mat-wrap">
        <MatMaterial></MatMaterial>
        <MatColor></MatColor>
        <MatTexture></MatTexture>
    </div>
</template>

<script>
    import MatMaterial from './MatMaterial'
    import MatColor from './MatColor'
    import MatTexture from './MatTexture'
    export default {
        name: 'material',
        components:{
            MatMaterial,MatColor,MatTexture,
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .mat-wrap{
        /deep/.mat-title {
            height: .35rem;
            line-height: .35rem;
            margin-top: .07rem;
            border-bottom: .01rem solid $borderGray;
        }
    }
</style>
