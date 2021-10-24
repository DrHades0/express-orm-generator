const ApiStructureGenerator   = require("../lib/folder_structures/api_structure_generator");
const RemoveProjectFolder 	  = require("./utils/remove_project_folder");
const describe = require("mocha").describe;
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
	const apiFolder_path  = path.join(srcFolder_path, "api");
	const coreFolder_path = path.join(srcFolder_path, "core");
	RemoveProjectFolder(workFolder_Path);
	new ApiStructureGenerator(test_path,test_folderName);
	it("project folder created",()=>{
		/* verify if project folder was created */
		const state = fs.existsSync(workFolder_Path);
		assert.equal(state, true);
	});
	describe("core folder created", ()=>{
		/*
			verfiy correct core folder creation
		*/
		const state = fs.existsSync(coreFolder_path);
		assert.equal(state, true);
		it("core indexCore.js created", ()=>{
			/*
				verify if indexCore.js created
			*/
			const indexCore_path = path.join(coreFolder_path, "indexCore.js");
			const state = fs.existsSync(indexCore_path);
			assert.equal(state, true);
		})
	});
	describe("src folder created", ()=>{
		/*
			verify if src folder is right created
		*/
		const state = fs.existsSync(srcFolder_path);
		assert.equal(state, true);
		it("src index.js created", ()=>{
			/*
				verify if srcIndex.js created
			*/
			const index_path = path.join(srcFolder_path, "index.js");
			const state = fs.existsSync(index_path);
			assert.equal(state, true);
		})
		describe("middleware folder created", ()=>{
			/*
				verify middlewares folder created
			*/
			const middlewareFolder_path = path.join(apiFolder_path, "middlewares/");
			console.log(middlewareFolder_path)
			const state = fs.existsSync(middlewareFolder_path);
			assert.equal(state, true);
			it("middleware indexMiddleware.js created", ()=>{
				/*
					verify if indexMiddleware.js created
				*/
				const indexMiddleware_path = path.join(middlewareFolder_path, "indexMiddlewares.js");
				const state = fs.existsSync(indexMiddleware_path);
				assert.equal(state, true);
			})
		});
		describe("routes folder created", ()=>{
			/*
				verify if routes folder is created
			*/
			const routesFolder_path = path.join(apiFolder_path, "routes");
			const state = fs.existsSync(routesFolder_path);

			assert.equal(state, true);
			it("routes indexRoutes.js created", ()=>{
				/*
					verify if indexRoutes.js file created
				*/
				const indexRoutes_path = path.join(routesFolder_path, "indexRoutes.js");
				const state = fs.existsSync(indexRoutes_path);
				assert.equal(state, true);
			})
		});
		describe("services folder created", ()=>{
			/*
				verify if services folder is created
			*/
			const servicesFolder_path = path.join(apiFolder_path, "services");
			const state = fs.existsSync(servicesFolder_path);

			assert.equal(state, true);
			it("services indexServices.js created", ()=>{
				/*
					verify if indexServices.js created
				*/
				const indexServices_path = path.join(servicesFolder_path, "indexServices.js");
				const state = fs.existsSync(indexServices_path);
				assert.equal(state, true);
			})
		});
		describe("apiServices folder created", ()=>{
			/*
				verify if apiServices folder is created
			*/
			const apiServicesFolder_path = path.join(apiFolder_path, "apiServices");
			const state = fs.existsSync(apiServicesFolder_path);

			assert.equal(state, true);
			it("apiServices indexApiServices.js created", ()=>{
				/*
					verify if indexApiServices.js created
				*/
				const indexApiServices_path = path.join(apiServicesFolder_path, "indexApiServices.js");
				const state = fs.existsSync(indexApiServices_path);
				assert.equal(state, true);
			})
		});
	});
})
