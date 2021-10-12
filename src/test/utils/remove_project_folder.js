const fs = require("fs");
module.exports = function RemoveProjectFolder(project_path){

	if (fs.existsSync(project_path)) {
		fs.rmdirSync(project_path, {recursive:true});
	}
}
