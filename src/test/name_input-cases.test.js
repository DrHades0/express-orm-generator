const assert 		= require("assert");
const randomstring 	= require("randomstring");
const MissingArgument = require("../lib/input/exceptions/missing_argument");
const InvalidArgument = require("../lib/input/exceptions/invalid_argument");
const NameValidator   = require("../lib/input/name_argument/name_validator")

describe("NameValidator test",()=>{
	it("name is empty",()=>{
		const action 	= ()=> new NameValidator("");
		const expected 	= new MissingArgument("name");

		assert.throws(action,expected);
	});

	it("name length is more than 10", ()=>{
		const nameLengthMoreThan10 = randomstring.generate({
			length: 11,
			charset: "alphanumeric"
		});
		const action 	= ()=> new NameValidator(nameLengthMoreThan10);
		const expected 	= new InvalidArgument("name","the name has more than teen(10) characters");

		assert.throws(action,expected);
	});
	it("name length is less than 5", ()=>{
		const nameLengthLessThan5 = randomstring.generate({
			length: 4,
			charset:"alphanumeric"
		});
		const action 	= ()=>new NameValidator(nameLengthLessThan5);
		const expected 	= new InvalidArgument("name", "the name has less than five(5) characters");
	});
})
