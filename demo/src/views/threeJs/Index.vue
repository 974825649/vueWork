<template>
    <div ref="viewport" id="viewport">
    </div>
</template>

<script>
    import * as THREE from 'three'
    import  Editor  from './js/Editor'
    import Viewport from './js/Viewport'
    export default {
        name: "three_index",
        date(){
            return {

                renderer: '',
                scene: '',
                camera: '',
                light: '',

            }
        },
        methods:{
            init(){

                //editor实例化一次
                if( !this.$editor.editor ){
                    this.$editor.editor = new Editor();
                }

                new Viewport( this.$editor.editor, this.$refs.viewport );

                //窗口自适应
                let onWindowResize = ( ) =>{
                    this.$editor.editor.signals.windowResize.dispatch();
                };
                window.addEventListener( 'resize', onWindowResize, false );

                // onWindowResize();

                console.log(this.$editor.editor);

            },

        },
        created() {
            setTimeout(() => {
                this.$nextTick(() => {
                    this.init()
                })
            }, 0);
        },
    }
</script>

<style lang="scss" type="text/scss" scoped>
    #viewport{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
