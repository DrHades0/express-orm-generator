const MissingArguments = require("./exceptions/missing_argument");
module.exports = class TerminalArgumentsValidator{
	constructor(terminal_arguments){
		if(terminal_arguments.name 		== undefined) throw new MissingArguments("name");
		if(terminal_arguments.folder 	== undefined) throw new MissingArguments("folder");
		if(terminal_arguments.type 		== undefined) throw new MissingArguments("type");
		if(terminal_arguments.orm 		== undefined) throw new MissingArguments("orm");
	}
}
