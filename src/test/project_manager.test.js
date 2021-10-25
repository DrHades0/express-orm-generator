const path 	= require("path");
const fs	= require("fs");
const ProjectManager = require("../lib/project_manager");
const RemoveProjectFolder = require("./utils/remove_project_folder");
describe("integration ProjectManager test",()=>{
	const baseTest_path = path.join("src", "test");
	const testDir		= path.join(baseTest_path, "project_manager_test");
	it("if type argument is mvc", ()=>{
		const name = "mvcFolder"
		const arguments = {name:name, folder:testDir, type:"mvc"};
		const pathToTest = path.join(testDir, name);
		RemoveProjectFolder(pathToTest);
		new ProjectManager(arguments);

		const state = fs.existsSync(pathToTest);

		assert.equal(state, true);
	});
	it("if type argument is api", ()=>{
		const name = "apiFolder"
		const arguments = {name:name, folder:testDir, type:"api"};
		const pathToTest = path.join(testDir, name);
		RemoveProjectFolder(pathToTest);
		new ProjectManager(arguments);

		const state = fs.existsSync(pathToTest);

		assert.equal(state, true);
	})
})
