const ApiStructureGenerator = require("./folder_structures/api_structure_generator");
const MvcStructureGenerator = require("./folder_structures/mvc_structure_generator");
module.exports = class ProjectManager{
	constructor(args){
		this.type 	= args.type;
		this.name 	= args.name;
		this.folder = args.folder;

		this.ProjectCreate();
	}
}
