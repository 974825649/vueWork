/**
 * @author dforrer / https://github.com/dforrer
 * Developed as part of a project at University of Applied Sciences and Arts Northwestern Switzerland (www.fhnw.ch)
 */

/**
 * @param editorRef pointer to main editor object used to initialize
 *        each command object with a reference to the editor
 * @constructor
 */


function Command ( editorRef ) {
	let _this = this;
	if( !_this ){
		_this = window;
	}
	_this.id = - 1;
	_this.inMemory = false;
	_this.updatable = false;
	_this.type = '';
	_this.name = '';

	if ( editorRef !== undefined ) {

		Command.editor = editorRef;

	}
	_this.editor = Command.editor;


}

Command.prototype.toJSON = function () {

	var output = {};
	output.type = this.type;
	output.id = this.id;
	output.name = this.name;
	return output;

};

Command.prototype.fromJSON = function ( json ) {

	this.inMemory = true;
	this.type = json.type;
	this.id = json.id;
	this.name = json.name;

};

export {Command};
