module.export = class MissingArgument extends Error{
	constructor(name_argument_missing){
		constructor()
		this.name = `MissingArgument`;
		this.message = `The ${name_argument_missing} is missing`;
	}
}
