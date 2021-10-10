const validator = require("validator");
const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
module.exports  = class NameValidator{
	constructor(name){
		this.Name = name;
		this.NotEmpty();
		this.IsAlphanumeric();
	}

	NotEmpty(){
		 /*
		 check is empty
		 */
		if(validator.isEmpty(this.Name)) throw new MissingArgument("name");
	}

	IsAlphanumeric(){
		/*
			check if a Alphanumeric
		*/
		if(!validator.isAlphanumeric(this.Name)) throw new InvalidArgument("name");
	}

}
