const validator = require("validator")
const MissingArgument = require("../exceptions/missing_argument");
const InvalidArgument = require("../exceptions/invalid_argument");
module.exports = class OrmValidator{
	constructor(orm_input){
		this.Orm = orm_input;

		this.NotEmpty();
		this.MatchOrm();
	}


	NotEmpty(){
		if(validator.isEmpty(this.Orm)) throw new MissingArgument("orm");
	}

	MatchOrm(){
		/*
		compare if match with orms
		*/
		if(this.Orm == "sequelize") return;
		if(this.Orm == "mongoose") return;


		throw new InvalidArgument("orm", "the orm not match with any orm");

	}
}
