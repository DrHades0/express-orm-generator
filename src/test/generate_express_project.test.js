const ExpressStructureManager = require("../lib/express_structure/express_structure-manager");
const assert = require("assert");
const fs 	= require("fs");
describe("generate project test",()=>{
	const test_path = "src/test"

	describe("create api project ", ()=>{
		const type = "api";
		const test_folder_name = "api_test_folder";
		const expressStructure = new ExpressStructureManager(test_path,test_folder_name,type);

		it("folder exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}`);
			assert.equal(state, true);
		});

		it("src exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src`);
			assert.equal(state, true);
		});

		it("core exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/core`);
			assert.equal(state, true);
		});

		it("api exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/api`);
			assert.equal(state, true);
		});

		it("index.js exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/index.js`);
			assert.equal(state, true);
		});
	})

	describe("create api project ", ()=>{
		const type = "mvc";
		const test_folder_name = "mvc_test_folder";
		const expressStructure = new ExpressStructureManager(test_path,test_folder_name,type);

		it("folder exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}`);
			assert.equal(state, true);
		});

		it("src exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src`);
			assert.equal(state, true);
		});

		it("model exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/model`);
			assert.equal(state, true);
		});

		it("views exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/views`);
			assert.equal(state, true);
		});

		it("controller exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/controller`);
			assert.equal(state, true);
		});
		it("routes exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/routes`);
			assert.equal(state, true);
		});


		it("index.js exist", ()=>{
			const state = fs.existsSync(`${test_path}/${test_folder_name}/src/index.js`);
			assert.equal(state, true);
		});
	})

})
