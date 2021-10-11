const validator = require("validator");
const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
module.exports  = class TypeValidator{
	constructor(type){
		this.Type = type;
		this.NotEmpty();
		this.MatchOneProjectStructure();
	}

	NotEmpty(){
		/*
		if Type is empty throw error
		*/
		if(validator.isEmpty(this.Type)) throw new MissingArgument("type");
	}

	MatchOneProjectStructure(){
		/*
		check if type match with api or mvc
		if not throw InvalidArgument error
		*/
		if(this.Type == "api")  return;
		if(this.Type == "mvc")  return;
		if(this.Type == "none") return;

		throw new InvalidArgument("type")
	}
}
