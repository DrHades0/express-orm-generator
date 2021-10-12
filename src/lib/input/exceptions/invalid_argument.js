module.exports = class InvalidArgument extends Error{
	constructor(invalid_name_argument,message){
		super();
		this.name = "Invalid argument";
		this.message = message;
	}
}
