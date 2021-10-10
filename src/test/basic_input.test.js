const assert 			= require("assert");
const {AssertionError} 	= require("assert");
const InputManager 		= require("../lib/input/input_manager");
const MissingArgument 	= require("../lib/input/exceptions/missing_argument");
describe("basic input test",()=>{
	it("all options",()=>{
		const terminal_argument = {
			name	:"test",
			folder	:"/home/drhades/Desktop",
			type	:"api",
			orm		:"sequelize"
		};

		const inputManager = new InputManager(terminal_argument);
	});

	describe("missing argument",()=>{
		it("missing name",()=>{
			/* If missing one of arguments throw exception*/
			const terminal_argument = {
				folder	:"folder/",
				type	:"api",
				orm		:"sequelize"
			};
			const error_expected = new MissingArgument("name");
			const action = ()=> new InputManager(terminal_argument);
			assert.throws(action, error_expected )

		});
		it("missing folder",()=>{
			const terminal_argument = {
				name	:"test",
				type	:"api",
				orm		:"sequelize"
			};
			try{
				const inputManager = new InputManager(terminal_argument);
				assert.fail("expected an Missing Arguments error");
			}catch(error){
				if(error instanceof AssertionError){
					throw error;
				}

				assert.equal(error.name, "MissingArgument");
				assert.equal(error.message, "The folder argument is missing")

			}
		});
		it("missing type",()=>{
			const terminal_argument = {
				name	:"test",
				folder	:"folder/",
				orm		:"sequelize"
			};
			try{
				const inputManager = new InputManager(terminal_argument);
				assert.fail("expected an Missing Arguments error");
			}catch(error){
				if(error instanceof AssertionError){
					throw error;
				}
				assert.equal(error.name, "MissingArgument");
				assert.equal(error.message, "The type argument is missing")
			}
		});
	});
})
