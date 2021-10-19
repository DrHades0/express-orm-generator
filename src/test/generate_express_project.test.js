const ApiStructureGenerator   = require("../lib/express_structure/api_structure_generator");
const RemoveProjectFolder 	  = require("./utils/remove_project_folder");
const assert = require("assert");
const fs 	 = require("fs");
const path 	 = require("path");
describe("generate project integration test",()=>{
	/*
		Verify correct the structure generators
	*/
	const test_path = path.join("src","test")

	describe("integration  api project generator ", ()=>{
		/*
			Generate Api Structure and test the exist of
			folders
		*/
		const test_folderName = "api_test_folder";
		const work_folderPath = path.join(test_path,test_folderName);
		RemoveProjectFolder(work_folderPath); //delete if already exist test folder

		new ApiStructureGenerator(test_path,test_folderName);

		it("correct folder creation", ()=>{
			// value if root project folder is created
			const state = fs.existsSync(work_folderPath);
			assert.equal(state, true);
		});

		describe("correct src folder creation", ()=>{
			/*
				verify if [src] folder is created into work_folderPath
			*/
			const path_toTest = path.join(work_folderPath,"src")
			const state = fs.existsSync(path_toTest);
			assert.equal(state, true);
			it("correct core folder creation", ()=>{
				/*
					verify if [core] folder is created into work_folderPath
				*/
				const core_folderPath = path.join(path_toTest,"core");
				const state = fs.existsSync(path_toTest);
				assert.equal(state, true);
			});
			it("correct api folder creation", ()=>{
				const api_folderPath = path.join(path_toTest,"api");
				const state = fs.existsSync(api_folderPath);
				assert.equal(state, true);
			})
		});



		describe("correct api folder creation", ()=>{
			/*
				verify if api folder is created with all
				these folder inside [middleware, services, controller, routes]
			*/
			const src_path = path.join(work_folderPath, "src");
			const apiFolder_path = path.join(src_path, "api");

			const state = fs.existsSync(apiFolder_path);
			assert.equal(state, true);

			it("api folder contains middleware folder", ()=>{
				const middlewarePath = path.join(apiFolder_path, "middlewares");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
			it("api folder contains routes folder", ()=>{
				const middlewarePath = path.join(apiFolder_path, "routes");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			});
			it("api folder contains services folder", ()=>{
				const middlewarePath = path.join(apiFolder_path, "services");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
			it("api folder contains controller folder", ()=>{
				const middlewarePath = path.join(apiFolder_path, "controllers");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
		});

		it("index.js exist", ()=>{
			const srcPath = path.join(work_folderPath, "src");
			const indexPath = path.join(srcPath, "index.js");
			const state = fs.existsSync(indexPath);
			assert.equal(state, true);
		});
	})
})
