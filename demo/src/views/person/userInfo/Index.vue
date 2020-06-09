<template>
        <div class="user-info">
            <userShow></userShow>
        </div>
</template>

<script>
    import userShow from './UserShow'
    export default {
        name: 'user_index',
        components: {
            userShow,
        },
        data() {
            return{}
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .user-info{
    }
</style>
