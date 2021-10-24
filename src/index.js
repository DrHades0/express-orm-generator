const {Command} = require("commander");
const program = new Command();

const InputManager = require("./lib/input/input_manager");
const ApiStructureGenerator = require("./lib/folder_structures/api_structure_generator");
const MvcStructureGenerator = require("./lib/folder_structures/mvc_structure_generator");
const AppGenerator			= require("./lib/express_app_generator/app_generator");
program.version('0.0.1');

program
	.option("-d, --debug", 'output extra debugging')
	.option("-n, --name <name>", 'project name')
	.option("-f  --folder <folder>", "project path")
	.option("-t  --type <type>", "project patter [mvc or api]")
	.option("-o  --orm <orm>", "project orm [sequelize or mongoose]");
program.parse(process.argv);

const input = program.opts();
const inputManager = new InputManager(input);
const args = inputManager.getArray();


if(args.type == "api"){
	const appProject = new ApiStructureGenerator(args.folder,args.name);

}
if(args.type == "mvc"){
	const appProject = new MvcStructureGenerator(args.folder,args.name);
}
new AppGenerator(appProject.appPath, args.type);
