const MvcStructureGenerator   = require("../lib/express_structure/mvc_structure_generator");
const RemoveProjectFolder 	  = require("./utils/remove_project_folder");
const assert = require("assert");
const fs 	 = require("fs");
const path 	 = require("path");
describe("mvc structure generator", ()=>{
	const test_path = path.join("src","test");
	const test_folderName = "mvc_test_folder";
	const workFolder_Path = path.join(test_path,test_folderName);
	const srcFolder_path = path.join(workFolder_Path, "src");
	RemoveProjectFolder(workFolder_Path);

	new MvcStructureGenerator(test_path,test_folderName);
	it("is folder created",()=>{
		const state = fs.existsSync(workFolder_Path);
		assert.equal(state, true);
	});
	it("is src folder created", ()=>{
		const state = fs.existsSync(srcFolder_path);
		assert.equal(state, true);
	});
	it("model folder was created", ()=>{
		const modelFolder_path = path.join(srcFolder_path, "model");
		const state = fs.existsSync(modelFolder_path);
		assert.equal(state, true);
	});
	it("view folder was created", ()=>{
		const viewFolder_path = path.join(srcFolder_path, "view");
		const state = fs.existsSync(viewFolder_path);
		assert.equal(state, true);
	});
	it("controller folder was created", ()=>{
		const controllerFolder_path = path.join(srcFolder_path, "controller");
		const state = fs.existsSync(controllerFolder_path);
		assert.equal(state, true);
	})
});
