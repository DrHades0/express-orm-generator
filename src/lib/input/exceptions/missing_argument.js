module.export = class MissingArgument extends Error{
	constructor(argument_missing){
		constructor()
		this.name = `MissingArgument`;
		this.message = `The ${argument_missing} is missing`;
	}
}
