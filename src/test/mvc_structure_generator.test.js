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
	RemoveProjectFolder(workFolder_Path);  //remove folder if exist

	new MvcStructureGenerator(test_path,test_folderName);  //generate project
	it("is folder created",()=>{
		/*
			verify if project folder is created
		*/
		const state = fs.existsSync(workFolder_Path);
		assert.equal(state, true);
	});
	describe("is src folder created", ()=>{
		/*
			verify if src folder and index.js file is created
		*/
		const state = fs.existsSync(srcFolder_path);
		assert.equal(state, true);
		it("src index.js created", ()=>{
			const indexSrcFile_path = path.join(srcFolder_path, "index.js")
			const state = fs.existsSync(indexSrcFile_path);
			assert.equal(state, true);
		})
	});
	it("model folder was created", ()=>{
		/*
			verify if model folder and indexModel.js is created
		*/
		const modelFolder_path = path.join(srcFolder_path, "model");
		const state = fs.existsSync(modelFolder_path);
		assert.equal(state, true);
		it("model indexModel.js created", ()=>{
			const indexModelFile_path = path.join(modelFolder_path, "indexModel.js")
			const state = fs.existsSync(indexModelFile_path);
			assert.equal(state, true);
		})
	});
	describe("view folder was created", ()=>{
		/*
			verify if view folder and indexView.js is created
		*/
		const viewFolder_path = path.join(srcFolder_path, "view");
		const state = fs.existsSync(viewFolder_path);
		assert.equal(state, true);
		it("view indexView.js created", ()=>{
			const indexViewFile_path = path.join(viewFolder_path, "indexView.js")
			const state = fs.existsSync(indexViewFile_path);
			assert.equal(state, true);
		});
	});
	describe("controller folder was created", ()=>{
		/*
			verify if model folder and indexModel.js is created
		*/
		const controllerFolder_path = path.join(srcFolder_path, "controller");
		const state = fs.existsSync(controllerFolder_path);
		assert.equal(state, true);
		it("controller indexController.js is created",()=>{
			const indexControllerFile_path = path.join(controllerFolder_path, "indexController.js");
			const state = fs.existsSync(indexControllerFile_path)
			assert.equal(state, true)
		})
	});
});
