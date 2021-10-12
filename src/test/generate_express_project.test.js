const ExpressStructureManager = require("../lib/express_structure/express_structure-manager");
const RemoveProject = require("./utils/remove_project_folder");
const assert = require("assert");
const fs 	= require("fs");
describe("generate project test",()=>{
	const test_path = "src/test"
	const test_folder_name = "test_folder";
	RemoveProject(`${test_path}/${test_folder_name}`);
	describe("create api project ", ()=>{
		const type = "api";
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
 		RemoveProject(`${test_path}/${test_folder_name}`);
		const type = "mvc";
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

})
