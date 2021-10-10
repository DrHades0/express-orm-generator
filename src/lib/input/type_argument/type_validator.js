const validator = require("validator");
const MissingArgument = require("../exceptions/missing_argument");
module.exports  = class TypeValidator{
	constructor(type){
		this.Type = type;
		this.NotEmpty();
		this.ValidType();
		this.MatchOneProjectStructure();
	}

	NotEmpty(){
		/*
		if Type is empty throw error
		*/
		if(validator.isEmpty(this.Type)) throw new MissingArgument("type");
	}

	ValidType(){
		/*
		if Type is not alpha throw error
		*/
		if(!validator.isAlpha(this.Type)) throw new InvalidArgument("type");
	}

	MatchOneProjectStructure(){
		/*
		check if type match with api or mvc
		if not throw InvalidArgument error
		*/
		if(this.Type == "api") return;
		if(this.Type == "mvc") return;

		throw new InvalidArgument("type")
	}
}
