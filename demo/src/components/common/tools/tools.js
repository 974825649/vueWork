import { Add } from '../../../views/threeJs/js/Add'
import { Editor } from '../../../utils/editor'
function handleAdd( opration, editor ) {

    let add = new Add(editor);
    switch (opration) {
        case 'select':
            add.addBox();
            break;
        case 'draw':
            add.addSphere();
    }
}

export { handleAdd }
