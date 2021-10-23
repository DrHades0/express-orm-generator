const fs = require("fs");
const path = require("path");
module.exports = class MvcStructureGenerator{
	constructor(folderPath, folderName){
		this.folderName = folderName;
		this.folderPath = folderPath;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolderPath = path.join(this.folderDir, "src");
		this.CreateFolder();
		this.CreateSrcFolder();
		this.CreateViewFolder();
		this.CreateControllerFolder();
		this.CreateModelFolder();
	}

	CreateFolder(){
		/*
			Create a project folder
		*/
		fs.mkdirSync(this.folderDir);
	}
	CreateSrcFolder(){
		/*
			create src folder
		*/
		fs.mkdirSync(this.srcFolderPath);
	}
	CreateViewFolder(){
		/*
			create the view folder
		*/
		const viewFolder_path = path.join(this.srcFolderPath, "view");
		fs.mkdirSync(viewFolder_path)
	}
	CreateControllerFolder(){
		/*
			create controller folder
			*/
		const controllerFolder_path = path.join(this.srcFolderPath, "controller");
		fs.mkdirSync(controllerFolder_path)
	}
	CreateModelFolder(){
		/*
			create model folder
			*/
		const modelFolder_path = path.join(this.srcFolderPath, "model")
		fs.mkdirSync(modelFolder_path)
	}
}
