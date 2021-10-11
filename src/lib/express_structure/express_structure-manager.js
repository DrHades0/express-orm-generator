const fs = require("fs");
module.exports = class ExpressStructureManager{
	/*This class make the project folder,name and type structure*/
	constructor(folderPath, folderName, projectType){
		this.path = folderPath;
		this.name = folderName;
		this.type = projectType;
		this.folderDir = "";
		this.CreateFolder();
		this.MakeFolderStructure();
	}

	CreateFolder(){
		fs.mkdirSync(`${this.path}/${this.name}`);
		this.folderDir = `${this.path}/${this.name}`;
	};

	MakeApiStructure(){
		fs.mkdirSync(`${this.folderDir}/src`);
		fs.mkdirSync(`${this.folderDir}/src/core`);
		fs.mkdirSync(`${this.folderDir}/src/api`);
		fs.appendFile(`${this.folderDir}/src/index.js`);
	}

	MakeMvcStructure(){
		fs.mkdirSync(`${this.folderDir}/src`);
		fs.mkdirSync(`${this.folderDir}/src/model`);
		fs.mkdirSync(`${this.folderDir}/src/view`);
		fs.mkdirSync(`${this.folderDir}/src/controller`);
		fs.mkdirSync(`${this.folderDir}/src/routes`);
		fs.appendFile(`${this.folderDir}/src/index.js`);
	}

	MakeFolderStructure(){
		if(this.type == "api"){
			this.MakeApiStructure();
			return;
		}

		if(this.type == "mvc"){
			this.MakeMvcStructure();
			return;
		}
	}

}
