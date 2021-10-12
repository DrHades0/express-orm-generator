const OrmValidator = require("../lib/input/orm_argument/orm_validator");
const MissingArgument = require("../lib/input/exceptions/missing_argument");
const InvalidArgument = require("../lib/input/exceptions/invalid_argument");

const assert = require("assert");
describe("orm input", ()=>{
	it("is empty", ()=>{
		/*
			test if orm input is empty throw error
		*/

		const action = ()=> new OrmValidator("");
		const expected = new MissingArgument("orm");


		assert.throws(action,expected);
	});
	describe("orm match any", ()=>{
		/*
			test if OrmValidator trow error if input not match with any orm
		*/
		it("orm match with sequelize",()=>{
			new OrmValidator("sequelize");
		})
		it("orm match with mongoose", ()=>{
			new OrmValidator("mongoose")
		})
		it("orm not match with any", ()=>{
			const action = ()=> new OrmValidator("asd");
			const expected = new InvalidArgument("orm", "the orm not match with any orm");

			assert.throws(action,expected);
		});
	});
});
