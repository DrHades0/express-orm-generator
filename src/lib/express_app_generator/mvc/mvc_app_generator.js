const path	= require("path");
const fs	= require("fs");
module.exports = class MvcAppGenerator{
	/*
		create an app.js file with all the basic settings
	*/
	constructor(projectPath){
		this.AppFile_path = path.join(projectPath, "app.js");
		this.CreateAppFile();
	}
	CreateAppFile(){
		const apiTemplate_path = path.join(__dirname, "mvc_app_template.txt")

		const appFileContent = fs.readFileSync(apiTemplate_path,{encoding:'utf8', flag:'r'});
		fs.writeFileSync(this.AppFile_path, appFileContent);
	}
}
