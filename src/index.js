const {Command} = require("commander");
const program = new Command();
const InputManager 			= require("./lib/input/input_manager");
const AppGenerator			= require("./lib/express_app_generator/app_generator");
const ApiStructureGenerator = require("./lib/folder_structures/api_structure_generator");
const MvcStructureGenerator = require("./lib/folder_structures/mvc_structure_generator");
const ProjectManager 		= require("./lib/project_manager");
module.exports = function Main(){

	program.version('0.0.1');

	program
		.option("-d, --debug", 'output extra debugging')
		.option("-n, --name <name>", 'project name')
		.option("-f  --folder <folder>", "project path")
		.option("-t  --type <type>", "project patter [mvc or api]")
	program.parse(process.argv);

	const input = program.opts();
	const inputManager = new InputManager(input);
	const args = inputManager.getArray();


	const projectManager = new ProjectManager(args);
	new AppGenerator(projectManager.appPath, args.type);
}
