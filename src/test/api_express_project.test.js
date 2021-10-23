const ApiStructureGenerator   = require("../lib/express_structure/api_structure_generator");
const RemoveProjectFolder 	  = require("./utils/remove_project_folder");
const assert = require("assert");
const fs 	 = require("fs");
const path 	 = require("path");
describe("api project generator test",()=>{
	/*
		Verify correct the structure generators
	*/
	const test_folderName = "api_test_folder";
	const test_path 	  = path.join("src","test");
	const workFolder_Path = path.join(test_path,test_folderName);
	const srcFolder_path  = path.join(workFolder_Path, "src");
	RemoveProjectFolder(workFolder_Path);
	new ApiStructureGenerator(test_path,test_folderName);
	it("project folder created",()=>{
		/* verify if project folder was created */
		const state = fs.existsSync(workFolder_Path);
		assert.equal(state, true);
	});
	it("core folder created", ()=>{
		/*
			verfiy correct core folder creation
		*/
		const coreFolder_path = path.join(workFolder_Path, "core");
		const state = fs.existsSync(coreFolder_path);
		assert.equal(state, true);
	});
	describe("src folder created", ()=>{
		/*
			verify if src folder is right created
		*/
		const state = fs.existsSync(srcFolder_path);
		assert.equal(state, true);
		describe("middleware folder created", ()=>{
			/*
				verify middlewares folder created
			*/
			const middlewareFolder_path = path.join(srcFolder_path, "middlewares");
			const state = fs.existsSync(middlewareFolder_path);
			assert.equal(state, true);
			it("middleware indexMiddleware.js created", ()=>{
				/*
					verify if indexMiddleware.js created
				*/
				const indexMiddleware_path = path.join(middlewareFolder_path, "indexMiddleware.js");
				const state = fs.existsSync(indexMiddleware_path);
				assert.equal(state, true);
			})
		});
		describe("routes folder created", ()=>{
			/*
				verify if routes folder is created
			*/
			const routesFolder_path = path.join(srcFolder_path, "routes");
			const state = fs.existsSync(routesFolder_path);

			assert.equal(state, true);
		});
		describe("services folder created", ()=>{
			/*
				verify if services folder is created
			*/
			const servicesFolder_path = path.join(srcFolder_path, "services");
			const state = fs.existsSync(servicesFolder_path);

			assert.equal(state, true);
		});
		describe("apiServices folder created", ()=>{
			/*
				verify if apiServices folder is created
			*/
			const servicesFolder_path = path.join(srcFolder_path, "apiServices");
			const state = fs.existsSync(servicesFolder_path);

			assert.equal(state, true);
		});
	});
})
