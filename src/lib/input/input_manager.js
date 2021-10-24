const NameValidator	 			 = require("./name_argument/name_validator");
const FolderValidator 			 = require("./folder_argument/folder_validator");
const TypeValidator 		     = require("./type_argument/type_validator");
const OrmValidator 			     = require("./orm_argument/orm_validator");
const TerminalArgumentsValidator = require("./terminal-arguments_validator");
module.exports  = class InputManager{
	/* take all terminal_arguments and validate all */
	constructor(terminal_arguments){
		/* Validate entrys and get value*/
		new TerminalArgumentsValidator(terminal_arguments);
		this.Input_name 	= new NameValidator(terminal_arguments.name).Name;
		this.Input_folder 	= new FolderValidator(terminal_arguments.folder).FolderPath;
		this.Input_type 	= new TypeValidator(terminal_arguments.type).Type;
		this.Input_orm		= new OrmValidator(terminal_arguments.orm).Orm;
	}
	getArray(){
		/*
		return an array with terminal_arguments
		*/
		return {
			"name"	: this.Input_name,
			"folder":this.Input_folder,
			"type"	:this.Input_type,
			"orm"	:this.Input_orm
		};
	}
}
