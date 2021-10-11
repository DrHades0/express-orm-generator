const TypeValidator = require("../lib/input/type_argument/type_validator");
const MissingArgument = require("../lib/input/exceptions/missing_argument");
const assert 		= require("assert");
describe("type validator", ()=>{
	it("empty type",()=>{

		const action = ()=> new TypeValidator("");
		const expected = new MissingArgument("type");
		assert.throws(action, expected);
	})
})
