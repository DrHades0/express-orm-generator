const fs = require("fs");
const path = require("path");
const IndexCreator = require("./IndexCreator");
module.exports = class ApiStructureGenerator{
	constructor(folderPath, folderName){
		this.folderPath = folderPath;
		this.folderName = folderName;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolderPath = path.join(this.folderDir,"src");

		this.CreateFolder();
		this.CreateSrcFolder();
		// this.WriteExpressApp();
	}


	CreateFolder(){
		/* create base project folder */
		fs.mkdirSync(`${this.folderDir}`);
	}

	CreateSrcFolder(){
		/*
			Create Src folder with Core and Api folders
		*/
		fs.mkdirSync(this.srcFolderPath);
		this.CreateCoreFolder();
		this.CreateApiFolder();

		this.CreateIndexFile();
	}

	CreateCoreFolder(){
		/*
			Create core folder
		*/
		const coreFolderPath = path.join(this.srcFolderPath, "core");
		fs.mkdirSync(coreFolderPath);
		new IndexCreator(coreFolderPath, "Core");
	}
	CreateApiFolder(){
		/*
			Create api, routes, middlewares, scripts and controller folder and
			create app.js
		*/
		this.apiFolderPath = path.join(this.srcFolderPath, "api");

		fs.mkdirSync(this.apiFolderPath);
		this.CreateRoutesFolder();
		this.CreateMiddlewaresFolder();
		this.CreateServicesFolder();
		this.CreateApiServicesFolder();
		this.CreateExpressApp();
	}
	CreateApiServicesFolder(){
		const apiServicesFolder_path = path.join(this.apiFolderPath, "apiServices");
		fs.mkdirSync(apiServicesFolder_path);
		new IndexCreator(apiServicesFolder_path, "ApiServices");

	}
	CreateRoutesFolder(){
		/*
		 	Make routes folder with indexRouter
		*/
		const routeFolderPath = path.join( this.apiFolderPath, "routes");
		fs.mkdirSync(routeFolderPath);

		new IndexCreator(routeFolderPath, "Routes");

	}

	CreateMiddlewaresFolder(){
		/*
			Create a middleware folder in api folder
		*/
		const middlewareRoutePath = path.join( this.apiFolderPath, "middlewares");
		fs.mkdirSync(middlewareRoutePath);

		new IndexCreator(routeFolderPath, "Middlewares");

	}

	CreateServicesFolder(){
		const serviceFolderPath = path.join(this.apiFolderPath, "services");
		fs.mkdirSync(serviceFolderPath);
		new IndexCreator(routeFolderPath, "Services");

	}
	CreateExpressApp(){
	}

	CreateIndexFile(){
		/*
			Create a index.js file in src folder
		*/
		new IndexCreator(this.srcFolderPath, "");

	}

}
