const FolderValidator = require("../lib/input/folder_argument/folder_validator");
const InvalidArgument = require("../lib/input/exceptions/invalid_argument");
const assert = require("assert");

describe("folder validator test", ()=>{
	it("pass empty folder", ()=>{
		const emptyFolderName = "";
		const action	= ()=> new FolderValidator(emptyFolderName);
		const expected 	= new InvalidArgument("folder", "folder argument cant be empty");

		assert.throws(action,expected);
	});
	it("pass invalid folder path", ()=>{
		const invalidPath = ".#/";

		const action 	= ()=>new FolderValidator(invalidPath);
		const expected 	= new InvalidArgument("folder", "the folder argument is not a valid path");

		assert.throws(action,expected);
	});

	it("pass no permisson folder path", ()=>{
		const noPermissonsPath = "/" // root directory
		const action 	= ()=> new FolderValidator(noPermissonsPath);
		const expected  = new InvalidArgument("folder", "the path passed by folder argument not allow to be written");

		assert.throws(action,expected);
	});

});
