const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
const validator 	= require("validator");
const isValidPath	= require("is-valid-path");
const fs 			= require("fs")
module.export = class FolderValidator{
	constructor(folder_argument){
		this.FolderPath = folder_argument;

		this.NotEmpty();
		this.ValidFolderPath();
		this.IhavePermissionInFolderPath();
	}

	NotEmpty(){
		if(validator.isEmpty(this.FolderPath)) throw new MissingArgument("folder");
	}

	ValidFolderPath(){
		if(!isValidPath(this.FolderPath)) throw new InvalidArgument("folder");
	}

	IhavePermissionInFolderPath(){
		try{
			fs.accessSync(this.FolderPath, fs.constants.F_OK);
		}catch(error){
			throw new Error("NotPermissionForUseFolder");
		}
	}
}
