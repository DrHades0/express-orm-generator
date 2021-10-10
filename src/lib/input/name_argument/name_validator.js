const validator = require("validator");
const MissingArgument = require("../exceptions/missing_argument");
module.export = class NameValidator{
	constructor(name){
		this.Name = name;
		this.NotEmpty();
		this.IsAlphanumeric();
	}

	NotEmpty(){
		if(validator.isEmpty(this.Name)) throw new MissingArgument("name");
	}

	IsAlphanumeric(){
		if(!validator.isAlphanumeric(this.Name)) throw new InvalidArgument("name");
	}

}
