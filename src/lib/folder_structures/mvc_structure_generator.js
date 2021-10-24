const fs = require("fs");
const path = require("path");
const IndexCreator = require("./IndexCreator");
const MvcAppGenerator = require("../express_app_generator/mvc/mvc_app_generator");
module.exports = class MvcStructureGenerator{
	constructor(folderPath, folderName){
		this.folderName = folderName;
		this.folderPath = folderPath;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolder_Path 		= path.join(this.folderDir, "src");
		this.controllerFolder_Path 	= path.join(this.srcFolder_Path, "controller");
		this.modelFolder_Path 		= path.join(this.srcFolder_Path, "model");
		this.viewFolder_Path 		= path.join(this.srcFolder_Path, "view");

		this.CreateFolder();
		this.CreateSrcFolder();
		this.CreateViewFolder();
		this.CreateControllerFolder();
		this.CreateModelFolder();
		new MvcAppGenerator(this.srcFolder_Path);
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
		const indexFilePath = path.join(this.srcFolder_Path, "index.js")
		fs.mkdirSync(this.srcFolder_Path);
		fs.writeFileSync(indexFilePath,"");
	}
	CreateViewFolder(){
		/*
			create the view folder
		*/
		fs.mkdirSync(this.viewFolder_Path);
		new IndexCreator(this.viewFolder_Path, "View");
	}
	CreateControllerFolder(){
		/*
			create controller foldermodelFolder_path
			*/
		fs.mkdirSync(this.controllerFolder_Path);
		new IndexCreator(this.controllerFolder_Path, "Controller");

	}
	CreateModelFolder(){
		/*
			create model folder and indexModel.js
		*/
		fs.mkdirSync(this.modelFolder_Path);
		new IndexCreator(this.modelFolder_Path, "Model");

	}
}
