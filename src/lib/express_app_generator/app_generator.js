const path	= require("path");
const fs	= require("fs");
module.exports = class AppGenerator{
	/*
		create an app.js file with all the basic settings
	*/
	constructor(projectPath, type){
		this.AppFile_path = path.join(projectPath, "app.js");
		this.Type 		  = type;
		this.CreateAppFile();
	}
	CreateAppFile(){
		/*
			copy app template in app.js file
		*/
		const apiTemplate_path = this.SelectAppTemplate();
		const appFileContent = fs.readFileSync(apiTemplate_path,{encoding:'utf8', flag:'r'});
		fs.writeFileSync(this.AppFile_path, appFileContent);
	}

	SelectAppTemplate(){
		/*
			Choose the template depending on the type passed by constructor
		*/
		if(this.Type == "mvc"){
			return path.join(__dirname, "mvc_app_template.txt")
		}
		if(this.Type == "api"){
			return path.join(__dirname, "api_app_template.txt")
		}
	}
}
