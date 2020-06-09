import * as THREE from 'three'
import { AddObjectCommand } from './commands/AddObjectCommand'

class Add {
        constructor (editor) {
            this.editor = editor;
        }
        addBox = () => {
            var geometry = new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Box';
            // this.editor.execute( new AddObjectCommand( mesh ) );
        };
        addSphere = () => {
            var geometry = new THREE.SphereBufferGeometry( 1, 8, 6, 0, Math.PI * 2, 0, Math.PI );
            var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
            mesh.name = 'Sphere';
            // this.editor.execute( new AddObjectCommand( mesh ) );
        };
}
export { Add }
