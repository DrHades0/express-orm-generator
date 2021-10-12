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
		const nameLengthMoreThan10 = "abcdfgfsgi12";
		const action 	= ()=> new NameValidator(nameLengthMoreThan10);
		const expected 	= new InvalidArgument("name","the name has more than teen(10) characters");

		assert.throws(action,expected);
	});
	it("name length is less than 5", ()=>{
		const nameLengthLessThan5 = "abc";
		const action 	= ()=>new NameValidator(nameLengthLessThan5);
		const expected 	= new InvalidArgument("name", "the name has less than five(5) characters");

		assert.throws(action,expected)
	});
	describe("name charset", ()=>{
		const alpha_name = "abcdf";
		const alphanumeri_name ="abcd5"
		const invalid_name = "as_df";

		it("no alphanumeric name",()=>{
			const action = ()=>new NameValidator(invalid_name);
			const expected = new InvalidArgument("name", "the name has to be alphanumeric");

			assert.throws(action,expected);
		});
		it("alpha name", ()=>{
			new NameValidator(alpha_name);
		})
		it("alphanumeric name", ()=>{
			new NameValidator(alphanumeri_name);
		})
	});
})
