import * as THREE from 'three'
import { EditorControls } from 'three/examples/jsm/controls/EditorControls'
import {Project} from './sider/props/project'

function Viewport ( editor,div ) {


    //定义参数
    let renderer = null;
    let signals = editor.signals;
    let camera = editor.camera;
    let scene = editor.scene;
    let sceneHelpers = editor.sceneHelpers;
    let container = div;



    //创建网格辅助线
    let grid = new THREE.GridHelper( 10, 10 );
    sceneHelpers.add( grid );

    // let transformControls = new THREE.TransformControls( camera, container );
    // transformControls.addEventListener( 'change', function () {
    //
    //     var object = transformControls.object;
    //
    //     if ( object !== undefined ) {
    //
    //         selectionBox.setFromObject( object );
    //
    //         if ( editor.helpers[ object.id ] !== undefined ) {
    //
    //             editor.helpers[ object.id ].update();
    //
    //         }
    //
    //         signals.refreshSidebarObject3D.dispatch( object );
    //
    //     }
    //
    //     // render();
    //
    // } );
    // transformControls.addEventListener( 'mouseDown', function () {
    //
    //     var object = transformControls.object;
    //
    //     objectPositionOnDown = object.position.clone();
    //     objectRotationOnDown = object.rotation.clone();
    //     objectScaleOnDown = object.scale.clone();
    //
    //     controls.enabled = false;
    //
    // } );
    // transformControls.addEventListener( 'mouseUp', function () {
    //
    //     var object = transformControls.object;
    //
    //     if ( object !== undefined ) {
    //
    //         switch ( transformControls.getMode() ) {
    //
    //             case 'translate':
    //
    //                 if ( ! objectPositionOnDown.equals( object.position ) ) {
    //
    //                     editor.execute( new SetPositionCommand( object, object.position, objectPositionOnDown ) );
    //
    //                 }
    //
    //                 break;
    //
    //             case 'rotate':
    //
    //                 if ( ! objectRotationOnDown.equals( object.rotation ) ) {
    //
    //                     editor.execute( new SetRotationCommand( object, object.rotation, objectRotationOnDown ) );
    //
    //                 }
    //
    //                 break;
    //
    //             case 'scale':
    //
    //                 if ( ! objectScaleOnDown.equals( object.scale ) ) {
    //
    //                     editor.execute( new SetScaleCommand( object, object.scale, objectScaleOnDown ) );
    //
    //                 }
    //
    //                 break;
    //
    //         }
    //
    //     }
    //
    //     controls.enabled = true;
    //
    // } );
    // sceneHelpers.add( transformControls );

    let controls = new EditorControls( camera, container );
    // controls.addEventListener( 'change', function () {
    //
    //     // transformControls.update();
    //     // signals.cameraChanged.dispatch( camera );
    //
    // } );




    // Signals

    /*
    * 添加或改变渲染器
    * params newRenderer:object
    * render
    * */
    signals.rendererChanged.add( function ( newRenderer ) {

        if ( renderer !== null ) {

            container.removeChild( renderer.domElement );

        }

        renderer = newRenderer;

        renderer.autoClear = false;
        renderer.autoUpdateScene = false;
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( container.offsetWidth, container.offsetHeight );

        container.append( renderer.domElement );

        render();
    } );

    /*
    * 展示网格
    * params showGrid:boolean
    * 参数 是否展示网格
    * */
    signals.showGridChanged.add( function ( showGrid ) {

        grid.visible = showGrid;
        // render();

    } );

    console.log(container);
    console.log(container.offsetWidth);
    console.log(container.offsetHeight);

    /**
     * 监听窗口变化
     */
    signals.windowResize.add(function () {

        console.log(333333333333333333);

        editor.DEFAULT_CAMERA.aspect = container.offsetWidth / container.offsetHeight;
        editor.DEFAULT_CAMERA.updateProjectionMatrix();

        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.offsetWidth, container.offsetHeight);

        // render();

    });


    signals.cameraChanged.add( function () {

        // render();

    } );


    //手动展示网格
    function update() {

        signals.showGridChanged.dispatch( true );

    }

    update();

    //手动更新画布
    let project = new Project(editor);
    console.log(project);
    project.updateRenderer();

    //渲染函数
     function render() {

         requestAnimationFrame( render );

         sceneHelpers.updateMatrixWorld();
         scene.updateMatrixWorld();

         renderer.render( scene, camera );
         renderer.render( sceneHelpers, camera );

     }

    render();

    return container;
}

export default Viewport;
