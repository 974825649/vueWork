<template>
    <div class="color">
        <div class="mat-title">
            颜色
        </div>
        <Row type="flex" justify="center" align="middle" class="colorPickWrap">
            <div class="colorPick bd">
                <ColorPicker v-model="initColor" recommend alpha />
            </div>
        </Row>
     
    </div>
</template>

<script>
    export default {
        name: "m_color",
        data(){
            return {
                initColor: 'rgba(25, 190,107, .5)',
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .color{
        .colorPickWrap{
            width: 100%;
            height: 2.7rem;
            .colorPick{
                width: 86%;
                height: 90%;
                .ivu-select-dropdown.ivu-transfer-no-max-height{
                    display: block!important;
                    position: absolute;
                    will-change: top, left;
                    transform-origin: center top;
                    top: 372px;
                    left: 0!important;
                }
            }

        }
    }
</style>