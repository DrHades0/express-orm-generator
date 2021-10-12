const NameValidator	 			 = require("./name_argument/name_validator");
const FolderValidator 			 = require("./folder_argument/folder_validator");
const TypeValidator 		     = require("./type_argument/type_validator");
const OrmValidator 			     = require("./orm_argument/orm_validator");
const TerminalArgumentsValidator = require("./terminal-arguments_validator");
module.exports  = class InputManager{
	constructor(terminal_arguments){
		new TerminalArgumentsValidator(terminal_arguments);
		this.Input_name 	= new NameValidator(terminal_arguments.name);
		this.Input_folder 	= new FolderValidator(terminal_arguments.folder);
		this.Input_type 	= new TypeValidator(terminal_arguments.type);
		this.Input_orm		= new OrmValidator(terminal_arguments.orm);
	}

	getArray(){
		return {
			"name": this.Input_name,
			"folder":this.Input_folder,
			"type":this.Input_type,
			"orm":this.Input_orm
		};
	}
}
