const path	= require("path");
const fs	= require("fs");
module.exports = class ApiAppGenerator{
	/*
		create an app.js file with all the basic settings
	*/
	constructor(path){
		this.AppFile_path = path.join(path, "app.js");
		this.CreateApiFile();
	}
	CreateApiFile(){
		const appFileContent = fs.readFileSync("./api_app_template.txt",{encoding:'utf8', flag:'r'});
		fs.writeFileSync(this.appFileContent, appFileContent);
	}
}
