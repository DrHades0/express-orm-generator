const ApiStructureGenerator = require("./folder_structures/api_structure_generator");
const MvcStructureGenerator = require("./folder_structures/mvc_structure_generator");
module.exports = class ProjectManager{
	constructor(args){
		this.type 	= args.type;
		this.name 	= args.name;
		this.folder = args.folder;
		this.appPath = this.ProjectCreate();
	}

	ProjectCreate(){
		/* create project depends of type and return appPath */
		if(this.type != "api" && this.type != "mvc") throw new Error("no valid type");
		if(this.type == "api"){
			return new ApiStructureGenerator(this.folder, this.name).appPath;
		}
		if(this.type == "mvc"){
			return new MvcStructureGenerator(this.folder, this.name).appPath;
		}

	}
}
