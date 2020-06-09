<template>
    <div>
        <Collapse simple v-model="initPanel">
            <Panel name="material" class="material">
                材质
                <div slot="content">
                    <!-- <Material></Material> -->
                </div>
            </Panel>
            <Panel name="prop1">
               属性一
                <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
            </Panel>
            <Panel name="prop2">
                属性二
                <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </Panel>
            <Panel name="other">
                其他属性
                <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
    // import Material from './material/Index'
    export default {
        name: "modelProperty",
        data(){
            return {
                // initPanel: 'Material', 初始开启界面
                initPanel: '',
            }
        },
        components:{
            // Material,
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

    /deep/.ivu-collapse-content{
        padding: 0 .1rem!important;
    }

</style>
