const ApiStructureGenerator   = require("../lib/express_structure/api_structure_generator");
const RemoveProjectFolder 	  = require("./utils/remove_project_folder");
const assert = require("assert");
const fs 	 = require("fs");
const path 	 = require("path");
describe("generate project integration test",()=>{
	/*
		Verify correct the structure generators
	*/
	const test_path = "src/test"

	describe("integration  api project generator ", ()=>{
		/*
			Generate Api Structure and test the exist of
			folders
		*/
		const type = "api";
		const test_folderName = "api_test_folder";
		const work_folderPath = path.join(test_path,test_folderName);
		RemoveProjectFolder(work_folderPath);
		const apiStructureGenerator = new ApiStructureGenerator(test_path,test_folderName);

		it("correct folder creation", ()=>{
			// value if root project folder is created
			const state = fs.existsSync(work_folderPath);
			assert.equal(state, true);
		});

		it("correct src folder creation", ()=>{
			/*
				verify if [src] folder is created into work_folderPath
			*/
			const path_toTest = path.join(work_folderPath,"src")
			const state = fs.existsSync(path_toTest);
			assert.equal(state, true);
		});

		it("correct core folder creation", ()=>{
			/*
				verify if [core] folder is created into work_folderPath
			*/
			const path_toTest = path.join(work_folderPath,"core")
			const state = fs.existsSync(path_toTest);
			assert.equal(state, true);
		});

		describe("correct api folder creation", ()=>{
			/*
				verify if api folder is created with all
				these folder inside [middleware, services, controller, routes]
			*/
			const path_toTest = path.join(work_folderPath,"api");
			const state = fs.existsSync(path_toTest);
			assert.equal(state, true);
			it("api folder contains middleware folder", ()=>{
				const middlewarePath = path.join(path_toTest, "middleware");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
			it("api folder contains routes folder", ()=>{
				const middlewarePath = path.join(path_toTest, "routes");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			});
			it("api folder contains services folder", ()=>{
				const middlewarePath = path.join(path_toTest, "services");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
			it("api folder contains controller folder", ()=>{
				const middlewarePath = path.join(path_toTest, "controller");
				const state = fs.existsSync(middlewarePath);
				assert.equal(state,true);
			})
		});

		it("index.js exist", ()=>{
			const srcPath = path.join(work_folderPath, "src");
			const indexPath = path.join(srcPath, "index.js")
			const state = fs.existsSync(indexPath);
			assert.equal(state, true);
		});
	})
})
