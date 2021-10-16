const fs = require("fs");
const path = require("path");
module.exports = class ApiStructureGenerator{
	constructor(folderPath, folderName){
		this.folderPath = folderPath;
		this.folderName = folderName;
		this.folderDir  = path.join(this.folderPath, this.folderName);

		this.srcFolderPath = path.join(this.folderDir,"src");

		this.CreateFolder();
		this.CreateSrcFolder();
		this.WriteExpressApp();
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
	}

	CreateCoreFolder(){
		/*
			Create core folder
		*/
		const coreFolderPath = path.join(this.srcFolderPath, "core");
		fs.mkdirSync(coreFolderPath);
	}
	CreateApiFolder(){
		/*
			Create api, routes, middlewares, scripts and controller folder and
			create app.js
		*/
		const coreApiPath = path.join(this.srcFolderPath, "api");
		fs.mkdirSync(coreApiPath);
		this.CreateRoutesFolder(coreApiPath);
		this.CreateMiddlewaresFolder(coreApiPath);
		this.CreateControllerFolder(coreApiPath);
		this.CreateServicesFolder(coreApiPath);

		this.CreateExpressApp(coreApiPath);
	}

	CreateRoutesFolder(api_path){
		/*
		 	Make routes folder with indexRouter
		*/
		const routeFolderPath = path.join(api_path, "routes");
		fs.mkdirSync(routeFolderPath);

		const indexRouterPath = path.join(routeFolderPath, "indexRouter.js");
		fs.writeFileSync(indexRouterPath, "");
	}

	CreateMiddlewaresFolder(api_path){
		const middlewareRoutePath = path.join(api_path, "middlewares");
		fs.mkdirSync(middlewareRoutePath);
	}

	CreateControllerFolder(api_path){
		const controllerFolderPath = path.join(api_path, "controllers");
		fs.mkdirSync(controllerFolderPath);
	}

	CreateExpressApp(api_path){
	}

}
