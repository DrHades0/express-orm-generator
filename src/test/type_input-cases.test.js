const TypeValidator = require("../lib/input/type_argument/type_validator");
const MissingArgument = require("../lib/input/exceptions/missing_argument");
const InvalidArgument = require("../lib/input/exceptions/invalid_argument");
const assert 		= require("assert");
describe("type validator", ()=>{
	it("empty type",()=>{

		const action = ()=> new TypeValidator("");
		const expected = new MissingArgument("type");
		assert.throws(action, expected);
	});
	describe("match type",()=>{
		const mvc 			= "mvc";
		const api 			= "api";
		const none 			= "none";
		const invalid_type 	= "crud";
		it("mvc type",()=>{
			const validate = new TypeValidator(mvc);
		})
		it("api type", ()=>{
			const validate = new TypeValidator(api);
		})
		it("none type", ()=>{
			const validate = new TypeValidator(none);
		})

		it("no match type", ()=>{
			const action = ()=> new TypeValidator(invalid_type);
			const expected = new InvalidArgument("type");

			assert.throws(action,expected);
		})
	})
})
