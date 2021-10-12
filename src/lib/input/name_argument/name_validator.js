const validator = require("validator");
const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
module.exports  = class NameValidator{
	constructor(name){
		this.Name = name;
		this.NotEmpty();
		this.IsAlphanumeric();
		this.IsLengthLessThan10();
		this.IsLengthMoreThan5();
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
		if(!validator.isAlphanumeric(this.Name)) throw new InvalidArgument("name", "the name has to be alphanumeric");
	}

	IsLengthLessThan10(){
		/*
			if name length more than 10(teen) throw InvalidArgument
		*/
		if(!validator.isLength(this.Name, {max:10})) throw new InvalidArgument("name","the name has more than teen(10) characters");
	}

	IsLengthMoreThan5(){
		/*
			if name length less than 5(five) throw InvalidArgument
		*/
		if(!validator.isLength(this.Name, {min:5})) throw new InvalidArgument("name","the name has less than five(5) characters");
	}
}
