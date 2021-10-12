const fs = require("fs");
module.exports = function RemoveProjectFolder(project_path){
	if (fs.existsSync(`${test_path}/${test_folder_name}`)) {
		fs.unlink(project_path);
	}
}
