const fs = require("fs");
module.exports = class ExpressStructureManager{
	/*This class make the project folder,name and type structure*/
	constructor(folderPath, folderName, projectType){
		this.path = folderPath;
		this.name = folderName;
		this.type = projectType;
		this.folderDir = `${this.path}/${this.name}`;
		this.CreateFolder();
		this.MakeFolderStructure();
	}

	CreateFolder(){
		/*
			create project folder and create property folderDir
		*/
		fs.mkdirSync(`${this.path}/${this.name}`);

	};

	MakeApiStructure(){
		/*
			Create a api structure with express js
		*/
		fs.mkdirSync(`${this.folderDir}/src`);
		fs.mkdirSync(`${this.folderDir}/src/core`);
		fs.mkdirSync(`${this.folderDir}/src/api`);
		fs.writeFile(`${this.folderDir}/src/index.js`,"", (params)=>{
			console.log(params)
		});
	}

	MakeMvcStructure(){
		/*
			Create a mvc structure with express js
		*/
		fs.mkdirSync(`${this.folderDir}/src`);
		fs.mkdirSync(`${this.folderDir}/src/model`);
		fs.mkdirSync(`${this.folderDir}/src/view`);
		fs.mkdirSync(`${this.folderDir}/src/controller`);
		fs.mkdirSync(`${this.folderDir}/src/routes`);
		fs.appendFile(`${this.folderDir}/src/index.js`);
	}

	MakeFolderStructure(){
		/*
			Compare type if api or mvc and create respective project structure
		*/
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
