module.exports  = class MissingArgument extends Error{
	constructor(name_argument_missing){
		super();
		this.name = "MissingArgument";
		this.message = `The ${name_argument_missing} argument is missing`;
	}
}
