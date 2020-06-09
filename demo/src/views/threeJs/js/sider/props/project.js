
import * as THREE from 'three'

class Project {
    constructor (editor) {

        this.config = editor.config;
        this.signals = editor.signals;

    }

    // Renderer / Antialias
    // rendererAntialias = () => function () {
    //
    //     // config.setKey( 'project/renderer/antialias', this.getValue() );
    //     this.updateRenderer();
    //
    // };

    /*
    * 更新渲染器
    * params antialias：boolean shadows：boolean
    * 参数 抗锯齿 阴影
    * */
    updateRenderer = () => {
        this.createRenderer(true,false);
    };

    /*
    * 生成或改变渲染器
    * params antialias：boolean shadows：boolean
    * 参数 是否抗锯齿 是否用阴影
    * */
    createRenderer = (  antialias, shadows ) => {
         let renderer = new THREE.WebGLRenderer({ antialias: antialias });// 渲染器
         this.signals.rendererChanged.dispatch( renderer );
    };

    // createRenderer( true, false );
}
export { Project }
