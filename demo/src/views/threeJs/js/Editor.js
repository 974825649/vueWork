import * as THREE from 'three'
import signals from 'signals'
import { History } from "./History";
import { EditorControls } from 'three/examples/jsm/controls/EditorControls'

function Editor(){

    //设置默认相机
    this.DEFAULT_CAMERA = new THREE.PerspectiveCamera(70, 1, 0.01, 5000000);
    this.DEFAULT_CAMERA.name = 'Camera';
    this.DEFAULT_CAMERA.position.set(10, 10, 10);
    this.DEFAULT_CAMERA.lookAt(0,0,0);

    let Signal = signals.Signal;

    this.signals = {
        //更改渲染器
        rendererChanged: new Signal(),

        //展示网格
        showGridChanged: new Signal(),

        //相机变化
        cameraChanged: new Signal(),

        //窗口变化
        windowResize: new Signal(),
    };

    this.camera = this.DEFAULT_CAMERA.clone();

    this.scene = new THREE.Scene();
    this.scene.name = 'Scene';
    this.scene.background = new THREE.Color( 0xaaaaaa );

    this.light = new THREE.AmbientLight(0xfff);
    this.scene.add(this.light);

    this.history = new History( this );
    this.sceneHelpers = new THREE.Scene();

}
Editor.prototype = {

    //设置场景
    // setScene: function ( scene ) {
    //
    //     this.scene.uuid = scene.uuid;
    //     this.scene.name = scene.name;
    //
    //     if ( scene.background !== null ) this.scene.background = scene.background.clone();
    //     if ( scene.fog !== null ) this.scene.fog = scene.fog.clone();
    //
    //     this.scene.userData = JSON.parse( JSON.stringify( scene.userData ) );
    //
    //     // avoid render per object
    //
    //     this.signals.sceneGraphChanged.active = false;
    //
    //     while ( scene.children.length > 0 ) {
    //
    //         this.addObject( scene.children[ 0 ] );
    //
    //     }
    //
    //     this.signals.sceneGraphChanged.active = true;
    //     this.signals.sceneGraphChanged.dispatch();
    //
    // },

    // addObject: function ( object ) {
    //
    //     var scope = this;
    //
    //     object.traverse(function (child) {
    //
    //         if (child.geometry !== undefined) scope.addGeometry(child.geometry);
    //         if (child.material !== undefined) scope.addMaterial(child.material);
    //
    //         scope.addHelper(child);
    //
    //     });
    // },

    execute: function ( cmd, optionalName ) {
        console.log(cmd);
        this.history.execute( cmd, optionalName );

    },
};

export default Editor;
