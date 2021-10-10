module.export = class InvalidArgument{
	constructor(invalid_name_argument){
		super();

		this.name = `Invalid argument`;

		this.message = `The argument ${invalid_name_argument} is invalid`;
	}
}
