const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
const validator 	= require("validator");
const isValidPath	= require("is-valid-path");
const fs 			= require("fs")
module.exports  = class FolderValidator{
	constructor(folder_argument){
		this.FolderPath = folder_argument;
		this.NotEmpty();
		this.ValidFolderPath();
		this.IhavePermissionInFolderPath();
	}

	NotEmpty(){
		if(validator.isEmpty(this.FolderPath)) throw new InvalidArgument("folder", "folder argument cant be empty");
	}

	ValidFolderPath(){
		if(!isValidPath(this.FolderPath)) throw new InvalidArgument("folder","the folder argument is not a valid path");
	}

	IhavePermissionInFolderPath(){
		// try{
		// 	fs.accessSync(this.FolderPath, fs.constants.F_OK);
		// }catch(error){
		// 	throw new InvalidArgument("folder", "the path does not allow to be written");
		// }
		try{
			fs.accessSync(this.FolderPath, fs.constants.R_OK | fs.constants.W_OK);
		}catch(err){
			throw new InvalidArgument("folder", "the path passed by folder argument not allow to be written");
		}
	}


}
