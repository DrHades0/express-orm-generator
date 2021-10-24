const fs = require("fs");
const path = require("path");
const IndexCreator = require("IndexCreator");
module.exports = class MvcStructureGenerator{
	constructor(folderPath, folderName){
		this.folderName = folderName;
		this.folderPath = folderPath;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolder_Path = path.join(this.folderDir, "src");
		this.controllerFolder_Path = path.join(this.srcFolderPath, "controller");
		this.modelFolder_Path = path.join(this.srcFolderPath, "model");
		this.viewFolder_Path = path.join(this.srcFolderPath, "view");

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
		new IndexCreator(this.srcFolderPath, "");
	}
	CreateViewFolder(){
		/*
			create the view folder
		*/
		fs.mkdirSync(this.viewFolder_Path);
		new IndexCreator(this.viewFolder_Path, "view");
	}
	CreateControllerFolder(){
		/*
			create controller foldermodelFolder_path
			*/
		fs.mkdirSync(this.controllerFolder_Path);
		new IndexCreator(this.srcFolderPath, "controller");

	}
	CreateModelFolder(){
		/*
			create model folder and indexModel.js
		*/
		fs.mkdirSync(this.modelFolder_Path);
		new IndexCreator(this.srcFolderPath, "model");

	}
}
